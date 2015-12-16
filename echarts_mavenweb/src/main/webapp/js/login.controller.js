var pseudoLogin = true;

$(document).bind( "mobileinit", function() {
	$.support.cors = true;
	$.mobile.allowCrossDomainPages = true;
	$.mobile.pushStateEnabled = false; 
});

$("#queryByDate").click(function() {
	failureSummaryView.onQueryByDate();
});

function LoginController() {
	function buildServerUrl(host, port) {
		var projectId = "echarts_mavenweb";
		return "http://" + host + ":" + port + "/" + projectId;
	}

	this.login = function(user, password, host, port) {	
		if ( pseudoLogin ) {
			var loginContext = pseudoLoginContext();
			loginContext.save();
			failureController.toSummary();			
		} else {
			var serverUrl 	= buildServerUrl(host, port);
			alert(serverUrl);				

			$.ajax({	
				type 	: "GET",
				async	: false,		
				url 	: serverUrl + "/login.jsonp",
				// url : serverUrl + "/signin.do?name=zcc21&callback=helloCallback",
				//                                           %jsonp%=%jsonpCallback%
				data 	: "user=" + user + "&password=" + password,					

				dataType : 'jsonp',
				//jsonp : 'callback', // 默认为：callback
				
				//jsonpCallback : 'helloCallback',  // 不配置，jQuery会随机分配一个名称
				success	: function( responseContext ) {			
					alert(JSON.stringify(responseContext));						

					// Save data to storage
					var loginContext = new LoginContext();
					loginContext.setUser( user );	
					loginContext.setPassword( password );
					loginContext.setToken( responseContext.token );
					loginContext.setGroupId( responseContext.groupid );
					loginContext.setUserId( responseContext.userid );
					loginContext.setHost( host );
					loginContext.setPort( port );
					loginContext.save();	

					failureController.toSummary();			
				}
			});	

		}

		
		//return true;
	};

	//this.successfullyLogin
}

// Define gloab LoginController
var loginController = new LoginController();


