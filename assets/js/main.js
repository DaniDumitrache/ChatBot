const chat = $("#chat");
$(document).ready(function () {
  $("#mesagecomp").keypress(function (e) {
    if (e.which == 13) {
      if ($("#mesagecomp").val()) {
        const GetMessageText = $("#mesagecomp").val();
        const Usermessage =
        '<div class="msg right-msg"><div class="msg-bubble"><div class="msg-info"></div><div class="msg-text">' +
        GetMessageText +
        "</div></div></div>";
      chat.append(Usermessage);

        $("#mesagecomp").val("");

        $.ajax({
          url: "GetMessage.php",
          type: "POST",
          data: "text=" + GetMessageText,
          success: function (result) {
            if (result != "err") {
              const Botmessage =
                '<div class="msg left-msg"><div class="msg-bubble"><div class="msg-info"><div class="msg-info-name">ChatBOT</div></div><div class="msg-text">' +
                result +
                "</div></div></div>";
              chat.append(Botmessage);
            } else {
              const Botmessage =
                '<li class="other"><div class="msg"><p>Sorry Service is unavaliable</p></div></li>';
              chat.append(Botmessage);
            }
          },
        });
      }
    }
  });

  $("#send").click(function () {
    if ($("#mesagecomp").val()) {
      const GetMessageText = $("#mesagecomp").val();
      const Usermessage =
        '<div class="msg right-msg"><div class="msg-bubble"><div class="msg-info"></div><div class="msg-text">' +
        GetMessageText +
        "</div></div></div>";
      chat.append(Usermessage);

      $("#mesagecomp").val("");

      $.ajax({
        url: "GetMessage.php",
        type: "POST",
        data: "text=" + GetMessageText,
        success: function (result) {
            console.log(result)
          if (result != "err") {
            const Botmessage =
              '<div class="msg left-msg"><div class="msg-bubble"><div class="msg-info"><div class="msg-info-name">ChatBOT</div></div><div class="msg-text">' +
              result +
              "</div></div></div>";
            chat.append(Botmessage);
          } else {
            const Botmessage =
              '<li class="other"><div class="msg"><p>Sorry Service is unavaliable</p></div></li>';
            chat.append(Botmessage);
          }
        },
      });
    }
  });

  $("#log").click(function () {
    const Name = $("#GetName").val();

    $("form").show();
    $(".SetName").hide();
  });

  $(function () {
    $("form").attr("onsubmit", "return false");
  });

  $(login(false));

  function login(bool) {
    if (bool == true) {
      $("form").hide();
      $(".SetName").show();
    } else {
      $("form").show();
      $(".SetName").hide();
    }
  }
});
