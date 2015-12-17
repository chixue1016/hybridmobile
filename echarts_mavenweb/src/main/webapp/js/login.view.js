    //取屏幕1/4的高度
   /* var width = window.screen.height/10;
    var style = "position:relative;top:" + width + "px";
    $(document).ready(function() {
     	$(".login").attr("style", style);
    });*/

   

    function LoginView() {

    	function login() {
	        var username  = $("#username").val();
	        var password  = $("#password").val();
	        var host      = $("#host").val();
	        var port      = $("#port").val();

	        loginController.login(username, password, host, port);
	    }

	    function eventBind() {
	    	$("#login-button").click( login );
	    }

	    function init() {
	    	eventBind();
	    }

	    // Constructor code.
	    init();
    	
    }

    var loginView = new LoginView();