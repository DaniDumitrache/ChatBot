<?Php

/** 
 * Dani Dumitrache
 * 
 * 
 * @class       ChatMessage
 * @author      Dani Dumitrache 
 * @link        https://danid.rf.gd/ 
 */

class ChatMessage
{
    private $conn;
    private $result;
    private $err_code;
    private $data;


    function GenerateRandomWords()
    {
        $api = file_get_contents('https://random-word-api.herokuapp.com/word');
        $data = json_decode($api, true);

        echo $data[0];
    }

    public function GetMessage()
    {
        //
        $conn = mysqli_connect("localhost", "root", "", "ChatBot") or $result = 101;
        $GetMesg = mysqli_real_escape_string($conn, $_POST['text']);

        $err_code = [
            302,
            101
        ];

        $result = 0;

        // Check Exist replies
        $CheckData = "SELECT * FROM message WHERE queries LIKE '%$GetMesg%'";
        $RunQuery = mysqli_query($conn, $CheckData) or $result = 302;
        $data = mysqli_fetch_array($RunQuery);

        if (!in_array($result, $err_code)) {
            if (mysqli_num_rows($RunQuery) > 0) {
                $result = $data['replies'];
            } else {
                // Generate Random Words
               // $this->GenerateRandomWords();
                echo 'sorry but I don`t know how to help you';
            }
        }else{
            $result = 'err';
        }
        return $result;
    }

    public function __construct()
    {
        error_reporting(E_PARSE);
        echo $this->GetMessage();
    }
}

new ChatMessage;
