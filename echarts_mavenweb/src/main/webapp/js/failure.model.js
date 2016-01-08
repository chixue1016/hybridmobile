var pseudoLogin 	= false;

// 本地伪数据测试
var usePseudoLocal 	= false;
// 远程伪数据测试
var usePseudoRemote = false;		

function FailureModel() {
	var _failureSummaries;
	/*var _loginContext		= new LoginContext();
	var _user 		= _loginContext.getUser(); 	
	var _password 	= _loginContext.getPassword();
	var _groupId	= _loginContext.getGroupId();
	var _userId		= _loginContext.getUserId();
	var _token		= _loginContext.getToken();
	var _serverUrl 	= _loginContext.getServerUrl();*/

	var _user; 	
	var _password;
	var _groupId;
	var _userId;
	var _token;
	var _serverUrl;

	function successfullyLogin( responseContext ) {
		alert(JSON.stringify(responseContext));	
		// Save data to storage
		/*var loginContext = new LoginContext();
		loginContext.setUser( user );	
		loginContext.setPassword( password );
		loginContext.setToken( responseContext.token );
		loginContext.setGroupId( responseContext.groupid );
		loginContext.setUserId( responseContext.userid );
		loginContext.setHost( host );
		loginContext.setPort( port );
		loginContext.save();*/
		
		_groupId	= responseContext.groupid;
		_userId		= responseContext.userid;
		_token		= responseContext.token;
	
		failureController.frontToSummary();	
	}
	function buildServerUrl( host, port ) {
		var projectId = "echarts_mavenweb";
		return "http://" + host + ":" + port + "/" + projectId;
	}

	this.login 		= function( user, password, host, port ) {
		_user 		= user;
		_password 	= password;
		_serverUrl 	= buildServerUrl(host, port);
		
		//alert(_serverUrl);
		if ( pseudoLogin ) {
			var loginContext = pseudoLoginContext();
			loginContext.save();
			failureController.frontToSummary();			
		} else {
			var jsonParameters	= {
				"user" 		: _user, 	
				"password" 	: _password,
			};

			asyncGet( _serverUrl, "LOGIN", jsonParameters, successfullyLogin );	
		}				
	};

	// Successed in loading all failure summary data.
	var successfullyLoadSummary = function( datas ) {
		var _failureSummaries = datas;		
		//alert(JSON.stringify( failureOrgSummaries ) );
				
		failureController.loadedSummary( _failureSummaries );
	};

	// Successed in loading failure detail data.
	var successfullyLoadDetail = function( datas ) {
		var failureDetails = datas;				
		//Cache.save("failureDetails", JSON.stringify(failureDetails));		
		//alert(JSON.stringify(failureDetails));

		failureController.loadedDetail( failureDetails );
	};	

	this.loadSummary = function( summaryType, startMonth, endMonth ) {
		if (usePseudoLocal) {
			// Just for test : pseduo load summary data.
			_failureSummaries = pseudoSummaryDatasFor( summaryType );
			failureController.loadedSummary( _failureSummaries );
			return;
		} 

		if (usePseudoRemote) {
			asyncGet(pseudoServerUrl, "LOAD_SUMMARY", pseudoSummaryParameters, successfullyLoadSummary);
			return;
		}		
		
		var jsonParameters = {
			"user" 		: _user, 		"password" 		: _password, 
			"groupId" 	: _groupId, 	"userId" 		: _userId,
			"token"		: _token,		"summaryType"	: summaryType,
			"startMonth": startMonth,	"endMonth"		: endMonth
		};
		

		asyncGet( _serverUrl, "LOAD_SUMMARY", jsonParameters, successfullyLoadSummary);				
	};

	this.loadDetail = function( summaryType, id, startMonth, endMonth ) {
		if (usePseudoLocal) {
			// Just for test : pseduo load Detail data.
			var failureDetails = pseudoDetailDatasFor( summaryType, id ); 
			failureController.loadedDetail( failureDetails );
		} else {
			var jsonParameters = {
				"user" 		: _user, 		"password" 		: _password, 
				"groupId" 	: _groupId, 	"userId" 		: _userId,
				"id"		: id,			"summaryType"	: summaryType,
				"startMonth": startMonth,	"endMonth"		: endMonth,
				"token"		: _token
			};

			asyncGet( _serverUrl, "LOAD_DETAIL", jsonParameters, successfullyLoadDetail);	
		}
	};

	// Successed in loading failure detail data.
	function successfullyLoadRemovedDetail( datas ) {
		var failureDetails = datas;				
		//Cache.save("failureDetails", JSON.stringify(failureDetails));		
		//alert(JSON.stringify(failureDetails));

		failureController.removeDetail( failureDetails );
	};
	this.loadRemovedDetail	= function( summaryType, summaryDataId, detailId, startMonth, endMonth ) {
		loadSpecificDetail( summaryType, summaryDataId, detailId, startMonth, endMonth, successfullyLoadRemovedDetail);
	};
	// Successed in loading failure detail data.
	function successfullyLoadLocatedDetail( datas ) {
		var failureDetails = datas;				
		//Cache.save("failureDetails", JSON.stringify(failureDetails));		
		//alert(JSON.stringify(failureDetails));

		failureController.locateDetail( failureDetails );
	};
	this.loadLocatedDetail	= function( summaryType, summaryDataId, detailId, startMonth, endMonth ) {
		loadSpecificDetail( summaryType, summaryDataId, detailId, startMonth, endMonth, successfullyLoadLocatedDetail);
	};

	// 加载 [summaryId, detailId] 指定的 详情数据
	function loadSpecificDetail( summaryType, summaryDataId, detailId, startMonth, endMonth, callback ) {
		if (usePseudoLocal) {
			// Just for test : pseduo load Detail data.
			var removedDetails = pseudoDetailDatasByTypeFor( summaryType, summaryDataId, draggedDataId); 
			failureController.removeDetail( removedDetails );
		} else {
			var jsonParameters = {
				"user" 		: _user, 		"password" 		: _password, 
				"groupId" 	: _groupId, 	"userId" 		: _userId,
				"id"		: summaryDataId,"summaryType"	: summaryType,
				"detailId"	: detailId,
				"startMonth": startMonth,	"endMonth"		: endMonth,
				"token"		: _token
			};

			asyncGet( _serverUrl, "LOAD_DETAIL", jsonParameters, callback);
		}
	}
}


function buildHttpGetParameters(jsonParameters) {
	if (jsonParameters == null) {
			return "";
		}

		var result = "";
		for (var key in jsonParameters) {
			result += (key + "=" + jsonParameters[key] + "&");
		}
		
		// Delete the last "&".
		return result.substring(0, result.length - 1);	
}

var requestMapper = {
	"LOGIN"			: "login",
	"LOAD_SUMMARY" 	: "failureSummary",
	"LOAD_DETAIL" 	: "failureDetail",
};

function buildWholeUrl(serverUrl, request) {
	var mappedRequest =  requestMapper[request];

	return serverUrl + "/" + mappedRequest + ".jsonp";
}

function asyncGet(serverUrl, request, jsonParameters, successCallback) {
	var httpGetData = buildHttpGetParameters(jsonParameters);
	var httpUrl		= buildWholeUrl(serverUrl, request);		

	$.ajax({
		type 	: "GET",			
		url 	: httpUrl,						
		data 	: httpGetData,

		dataType : 'jsonp',
		success  : successCallback			
	});
}




