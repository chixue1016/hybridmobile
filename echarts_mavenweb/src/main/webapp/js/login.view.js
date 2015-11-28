      function login() {
        var username  = $("#username").val();
        var password  = $("#password").val();
        var host      = $("#host").val();
        var port      = $("#port").val();

        loginController.login(username, password, host, port);
      }