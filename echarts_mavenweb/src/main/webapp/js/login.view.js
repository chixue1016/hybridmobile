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

	        failureController.login( username, password, host, port );
	    }

	    function setPosition(){
	    	var height = $(window).height();
		    var topOffset = height/4;
		    var loginFormStyle = "height:"+height+"px";
		    var loginWrapperStyle = "position:relative;top:"+topOffset+"px";
		    $(".login").attr("style", loginFormStyle);
		    $(".login-wrapper").attr("style",loginWrapperStyle);
	    }

	    function eventBind() {
	    	$("#login-button").click( login );
	    }

	    function init() {
	    	eventBind();
	    	setPosition();
	    }

	    // Constructor code.
	    init();
    	
    }
