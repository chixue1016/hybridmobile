$(document).bind( "mobileinit", function() {
	$.support.cors = true;
	$.mobile.allowCrossDomainPages = true;
	$.mobile.pushStateEnabled = false; 
});

function LoginController() {
	function buildServerUrl(host, port) {
		var projectId = "echarts_mavenweb";
		return "http://" + host + ":" + port + "/" + projectId;
	}

	this.login = function(user, password, host, port) {		
		var serverUrl 	= buildServerUrl(host, port);
		alert(serverUrl);		

		$.ajax({	
			type 	: "GET",		
			url 	: serverUrl + "/login.jsonp",
			// url : serverUrl + "/signin.do?name=zcc21&callback=helloCallback",
			//                                           %jsonp%=%jsonpCallback%
			data 	: "user=" + user + "&password=" + password,					

			dataType : 'jsonp',
			//jsonp : 'callback', // 默认为：callback
			
			//jsonpCallback : 'helloCallback',  // 不配置，jQuery会随机分配一个名称
			success	: function(jsonArray) {
				var data = jsonArray[0];
				alert(JSON.stringify(data));			

				// Save data to storage
				Cache.save("user", user);
				Cache.save("password", password);
				Cache.save("token", data.token);
				Cache.save("groupId", data.groupId);
				Cache.save("userId", data.userId);
				Cache.save("serverUrl", serverUrl);
			}
		});	

		return true;
	}
}

// Define gloab LoginController
var loginController = new LoginController();


function LoginContext(user, password, host, port) {
	var _projectId = "echarts_mavenweb";

	var _user;
	var _password;
	var _host;
	var _port;	
	var _groupId;
	var _userId;
	var _token;
	var _serverUrl;

	this.setUser = function(user) {
		_user = user;
	};
	this.getUser = function() {
		return _user;
	};

	this.setPassword = function(password) {
		_password = password;
	};
	this.getPassword = function() {
		return _password;
	};

	this.setHost = function(host) {
		_host = host;
	};
	this.getHost = function() {
		return _host;
	};

	this.setPort = function(port) {
		_port = port;
	};
	this.getPort = function() {
		return _port;
	};

	this.setGroupId = function(groupId) {
		_groupId = groupId;
	};
	this.getGroupId = function() {
		return _groupId;
	};

	this.setUserId = function(userId) {
		_userId = userId;
	};
	this.getUserId = function() {
		return _userId;
	};

	this.setToken = function(token) {
		_token = token;
	};
	this.getToken = function() {
		return _token;
	};

	this.setServerUrl = function(host, port) {
		_serverUrl = "http://" + host + ":" + port + "/" + _projectId;
	};
	this.getServerUrl = function() {
		return _serverUrl;
	};

	// Construction Code.
	this.setUser(user);
	this.setPassword(password);
	this.setHost(host);
	this.setPort(port);
	this.setServerUrl(host, port);

}