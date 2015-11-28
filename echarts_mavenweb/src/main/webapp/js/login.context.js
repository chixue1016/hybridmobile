
function LoginContext() {
	var _cachedTag 	= "loginContext";
	var _projectId 	= "echarts_mavenweb";

	var _user;
	var _password;	
	var _groupId;
	var _userId;
	var _token;
	var _host;
	var _port;

	var init	= function() {
		var cachedContext = JSON.parse(Cache.get( _cachedTag ));
		if (cachedContext != null) {
			_user 		= cachedContext["user"];
			_password 	= cachedContext["password"];
			_groupId	= cachedContext["groupId"];
			_userId		= cachedContext["userId"];
			_token		= cachedContext["token"];
			_host		= cachedContext["host"];
			_port		= cachedContext["port"];
		}
	};

	var stringify = function() {
		var jsonSnapshot = {
			"user"		: _user,
			"password"	: _password,			
			"groupId"	: _groupId,
			"userId"	: _userId,
			"token"		: _token,
			"host"		: _host,
			"port"		: _port,
		}

		return JSON.stringify(jsonSnapshot);
	};

	this.save	= function() {
		var stringSnapshot = stringify();
		Cache.save( _cachedTag, stringSnapshot );
	};

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

	this.getServerUrl = function() {
		return "http://" + _host + ":" + _port + "/" + _projectId;
	};
	
	// Constructor
	init();
}