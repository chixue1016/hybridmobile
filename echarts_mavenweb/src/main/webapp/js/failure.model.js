// 本地伪数据测试
var usePseudoLocal 	= false;
// 远程伪数据测试
var usePseudoRemote = false;		

function FailureModel() {
	var _failureSummaries;
	var _loginContext		= new LoginContext();
	var _user 		= _loginContext.getUser(); 	
	var _password 	= _loginContext.getPassword();
	var _groupId	= _loginContext.getGroupId();
	var _userId		= _loginContext.getUserId();
	var _token		= _loginContext.getToken();
	var _serverUrl 	= _loginContext.getServerUrl();

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




