
/*********************************************************************
	************************** 登陆数据 ****************************
*********************************************************************/
function pseudoLoginContext() {
	var loginContext = new LoginContext();
	loginContext.setUser( pseudoContext.user );	
	loginContext.setPassword( pseudoContext.password );
	loginContext.setToken( pseudoContext.token );
	loginContext.setGroupId( pseudoContext.groupId );
	loginContext.setUserId( pseudoContext.userId );
	loginContext.setHost( pseudoContext.host );
	loginContext.setPort( pseudoContext.port );	
	return loginContext;
}

var pseudoContext = {
	"host"		: "10.1.73.225",	"port"			: "80",
	"user" 		: "songyp", 	"password" 		: "yonyou1", 
	"groupId" 	: "0001A1100000000005TN", 		"userId" 		: "1001A1100000000001KA",
	"token"		: "123456",		
};


/*********************************************************************
	************************** 总览数据 ****************************
*********************************************************************/
function pseudoSummaryDatasFor( summaryType) {
	return pseudoFailureSummaries[summaryType];
}

function pseudoDetailDatasFor( summaryType, id ) {
	var failureDetails 			= pseudoFailureDetails[summaryType];		
	//alert(JSON.stringify( failureSummaries ) );
	var failureDetailOfTheId 	= failureDetails[id];
	
	return failureDetailOfTheId;
}

function pseudoDetailDatasByTypeFor( summaryType, id, typeName ) {
	var failureDetails 			= pseudoFailureDetailsByType[summaryType];		
	//alert(JSON.stringify( failureSummaries ) );
	var failureDetailsByType 	= failureDetails[id];
	var failureDetailsOfTheType = failureDetailsByType[ typeName ];
	
	return failureDetailsOfTheType;
}

var pseudoFailureOrgSummaries 	= {
	"data" : [
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
		{	
			"id"			: 1,
			"name" 			: "故障组织1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障组织2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障组织3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障组织4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		},
	]
};

var pseudoFailureTypeSummaries = {
	"data"	: [
		{	
			"id"			: 1,
			"name" 			: "故障类别1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障类别2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障类别3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障类别4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		}
	]
};

var pseudoFailureReasonSummaries = {
	"data"	: [
		{	
			"id"			: 1,
			"name" 			: "故障原因1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障原因2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障原因3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障原因4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		}
	]
};

var pseudoFailureSymptomSummaries = {
	"data"	: [
		{	
			"id"			: 1,
			"name" 			: "故障现象1",
			"haltedTimes" 	: 10,
			"haltedHours" 	: 320
		},

		{
			"id"			: 2,
			"name" 			: "故障现象2",
			"haltedTimes" 	: 15,
			"haltedHours" 	: 120
		},

		{
			"id"			: 3,
			"name" 			: "故障现象3",
			"haltedTimes" 	: 6,
			"haltedHours" 	: 160
		},

		{
			"id"			: 4,
			"name" 			: "故障现象4",
			"haltedTimes" 	: 9,
			"haltedHours" 	: 240
		}
	]
};

var pseudoFailureSummaries 		= {
	"failureOrg"	: pseudoFailureOrgSummaries,
	"failureType"	: pseudoFailureTypeSummaries,
	"failureReason"	: pseudoFailureReasonSummaries,
	"failureSymptom": pseudoFailureSymptomSummaries
};

/*********************************************************************
	************************** 详情数据 ****************************
*********************************************************************/
var pseudoFailureOrgDetails = {
	id 		: 1,
	//dataTypes	: [ "failureType", "failureReason", "failureSymptom"],
	"data1" 	: [	
		{ name 	: '老化', 		value : 335 	},
        { name 	: '人为损坏', 	value : 310 	},
        { name 	: '事故', 		value : 234 	}, 
        { name 	: '年久失修', 	value : 135		},
        { name 	: '其它', 		value : 1548 	}
	],

	"data2" 	: [
		{ name 	: '自然老化', 	value : 7 		},
        { name 	: '操作不当', 	value : 8 		},
        { name 	: '油污污染', 	value : 6 		}, 
        { name 	: '一不小心', 	value : 12		},
        { name 	: '随便啦', 	value : 24 		},
        { name 	: '故障原因', 	value : 36		}	
	],

	"data3" 	: [
		{ name 	: '部件脱落', 	value : 72 		},
        { name 	: '燃油泄漏', 	value : 83 		},
        { name 	: '停机', 		value : 16 		}, 
        { name 	: '杂音', 		value : 22		},
        { name 	: '严重发热', 	value : 34 		},
        { name  : '涂层掉漆', 	value : 39		}
	]
};

var pseudoFailureOrg = [	
	{ name 	: '故障组织1故障组织1故障组织1', 		value : 75 	},
    { name 	: '故障组织2', 		value : 70 	},
    { name 	: '故障组织3', 		value : 84 	}, 
    { name 	: '故障组织4', 		value : 65		},
    { name 	: '故障组织5', 		value : 68 	}
];
var pseudoFailureOrgOfType1_4 = [
	{ name 	: '故障组织1故障组织1故障组织1', 		value : 10 	},
    { name 	: '故障组织2', 		value : 10 	},
    { name 	: '故障组织3', 		value : 10 	}, 
    { name 	: '故障组织4', 		value : 10	},
    { name 	: '故障组织5', 		value : 10 	}
];
var pseudoFailureOrgOfType5 = [
	{ name 	: '故障组织1故障组织1故障组织1', 		value : 35 	},
    { name 	: '故障组织2', 		value : 30 	},
    { name 	: '故障组织3', 		value : 44 	}, 
    { name 	: '故障组织4', 		value : 25	},
    { name 	: '故障组织5', 		value : 28 	}
];


var pseudoFailureType = [	
	{ name 	: '故障类别1', 		value : 75 		},
    { name 	: '故障类别2', 		value : 70 		},
    { name 	: '故障类别3', 		value : 84 		}, 
    { name 	: '故障类别4', 		value : 65		},
    { name 	: '故障类别5', 		value : 68 		}
];

var pseudoFailureReason = [	
	{ name 	: '故障原因1', 		value : 75 		},
    { name 	: '故障原因2', 		value : 70 		},
    { name 	: '故障原因3', 		value : 84 		}, 
    { name 	: '故障原因4', 		value : 65		},
    { name 	: '故障原因5', 		value : 68 		}
];
var pseudoFailureReasonOfType1_4 = [	
	{ name 	: '故障原因1', 		value : 10 		},
    { name 	: '故障原因2', 		value : 10 		},
    { name 	: '故障原因3', 		value : 10 		}, 
    { name 	: '故障原因4', 		value : 10		},
    { name 	: '故障原因5', 		value : 10 		}
];
var pseudoFailureReasonOfType5 = [	
	{ name 	: '故障原因1', 		value : 35 		},
    { name 	: '故障原因2', 		value : 30 		},
    { name 	: '故障原因3', 		value : 44 		}, 
    { name 	: '故障原因4', 		value : 25		},
    { name 	: '故障原因5', 		value : 28 		}
];


var pseudoFailureSymptom = [
	{ name 	: '故障现象1', 		value : 75 		},
    { name 	: '故障现象2', 		value : 70 		},
    { name 	: '故障现象3', 		value : 84 		}, 
    { name 	: '故障现象4', 		value : 65		},
    { name 	: '故障现象5', 		value : 68 		}
];
var pseudoFailureSymptomOfType1_4 = [
	{ name 	: '故障现象1', 		value : 10 		},
    { name 	: '故障现象2', 		value : 10 		},
    { name 	: '故障现象3', 		value : 10 		}, 
    { name 	: '故障现象4', 		value : 10		},
    { name 	: '故障现象5', 		value : 10 		}
];
var pseudoFailureSymptomOfType5 = [
	{ name 	: '故障现象1', 		value : 35 		},
    { name 	: '故障现象2', 		value : 30 		},
    { name 	: '故障现象3', 		value : 44 		}, 
    { name 	: '故障现象4', 		value : 25		},
    { name 	: '故障现象5', 		value : 28 		}
];


var pseudoFailureDetailOfOneOrg = {
	"failureType"	: pseudoFailureType,
	"failureReason"	: pseudoFailureReason,
	"failureSymptom": pseudoFailureSymptom
};
var pseudoFailureDetailOfOneOrgAndOneType1_4 = {
	"failureReason"	: pseudoFailureReasonOfType1_4,
	"failureSymptom": pseudoFailureSymptomOfType1_4
};
var pseudoFailureDetailOfOneOrgAndOneType5 = {
	"failureReason"	: pseudoFailureReasonOfType5,
	"failureSymptom": pseudoFailureSymptomOfType5
};
var pseudoFailureDetailOfOneOrgByType 	= {
	'故障类别1'	: pseudoFailureDetailOfOneOrgAndOneType1_4,
    '故障类别2'	: pseudoFailureDetailOfOneOrgAndOneType1_4,
    '故障类别3'	: pseudoFailureDetailOfOneOrgAndOneType1_4, 
    '故障类别4'	: pseudoFailureDetailOfOneOrgAndOneType1_4,
    '故障类别5'	: pseudoFailureDetailOfOneOrgAndOneType5,
};


var pseudoFailureDetailOfOneType = {
	"failureOrg"	: pseudoFailureOrg,
	"failureReason"	: pseudoFailureReason,
	"failureSymptom": pseudoFailureSymptom
};

var pseudoFailureDetailOfOneReason = {
	"failureType"	: pseudoFailureType,
	"failureSymptom": pseudoFailureSymptom,
	"failureOrg"	: pseudoFailureOrg,
};
var pseudoFailureDetailOfOneReasonAndOneType1_4 = {
	"failureSymptom": pseudoFailureSymptomOfType1_4,
	"failureOrg"	: pseudoFailureOrgOfType1_4,	
};
var pseudoFailureDetailOfOneReasonAndOneType5 = {
	"failureSymptom": pseudoFailureSymptomOfType5,
	"failureOrg"	: pseudoFailureOrgOfType5,	
};
var pseudoFailureDetailOfOneReasonByType 	= {
	'故障类别1'	: pseudoFailureDetailOfOneReasonAndOneType1_4,
    '故障类别2'	: pseudoFailureDetailOfOneReasonAndOneType1_4,
    '故障类别3'	: pseudoFailureDetailOfOneReasonAndOneType1_4, 
    '故障类别4'	: pseudoFailureDetailOfOneReasonAndOneType1_4,
    '故障类别5'	: pseudoFailureDetailOfOneReasonAndOneType5,
};

var pseudoFailureDetailOfOneSymptom = {	
	"failureType"	: pseudoFailureType,
	"failureReason"	: pseudoFailureReason,
	"failureOrg"	: pseudoFailureOrg,
};
var pseudoFailureDetailOfOneSymptomAndOneType1_4 = {
	"failureReason"	: pseudoFailureReasonOfType1_4,
	"failureOrg"	: pseudoFailureOrgOfType1_4,	
};
var pseudoFailureDetailOfOneSymptomAndOneType5 = {
	"failureReason"	: pseudoFailureReasonOfType5,
	"failureOrg"	: pseudoFailureOrgOfType5,	
};
var pseudoFailureDetailOfOneSymptomByType 	= {
	'故障类别1'	: pseudoFailureDetailOfOneSymptomAndOneType1_4,
    '故障类别2'	: pseudoFailureDetailOfOneSymptomAndOneType1_4,
    '故障类别3'	: pseudoFailureDetailOfOneSymptomAndOneType1_4, 
    '故障类别4'	: pseudoFailureDetailOfOneSymptomAndOneType1_4,
    '故障类别5'	: pseudoFailureDetailOfOneSymptomAndOneType5,
};

var pseudoFailureOrgDetails	= {
	"1"		: pseudoFailureDetailOfOneOrg,
	"2"		: pseudoFailureDetailOfOneOrg,
	"3"		: pseudoFailureDetailOfOneOrg,
	"4"		: pseudoFailureDetailOfOneOrg
};
var pseudoFailureOrgDetailsByType	= {
	"1"		: pseudoFailureDetailOfOneOrgByType,
	"2"		: pseudoFailureDetailOfOneOrgByType,
	"3"		: pseudoFailureDetailOfOneOrgByType,
	"4"		: pseudoFailureDetailOfOneOrgByType
};

var pseudoFailureTypeDetails	= {
	"1"		: pseudoFailureDetailOfOneType,
	"2"		: pseudoFailureDetailOfOneType,
	"3"		: pseudoFailureDetailOfOneType,
	"4"		: pseudoFailureDetailOfOneType,
};

var pseudoFailureReasonDetails	= {
	"1"		: pseudoFailureDetailOfOneReason,
	"2"		: pseudoFailureDetailOfOneReason,
	"3"		: pseudoFailureDetailOfOneReason,
	"4"		: pseudoFailureDetailOfOneReason,
};
var pseudoFailureReasonDetailsByType	= {
	"1"		: pseudoFailureDetailOfOneReasonByType,
	"2"		: pseudoFailureDetailOfOneReasonByType,
	"3"		: pseudoFailureDetailOfOneReasonByType,
	"4"		: pseudoFailureDetailOfOneReasonByType,
};

var pseudoFailureSymptomDetails	= {
	"1"		: pseudoFailureDetailOfOneSymptom,
	"2"		: pseudoFailureDetailOfOneSymptom,
	"3"		: pseudoFailureDetailOfOneSymptom,
	"4"		: pseudoFailureDetailOfOneSymptom,
};
var pseudoFailureSymptomDetailsByType	= {
	"1"		: pseudoFailureDetailOfOneSymptomByType,
	"2"		: pseudoFailureDetailOfOneSymptomByType,
	"3"		: pseudoFailureDetailOfOneSymptomByType,
	"4"		: pseudoFailureDetailOfOneSymptomByType,
};

var pseudoFailureDetails 		= {
	"failureOrg"	: pseudoFailureOrgDetails,
	"failureType"	: pseudoFailureTypeDetails,
	"failureReason"	: pseudoFailureReasonDetails,
	"failureSymptom": pseudoFailureSymptomDetails,
};
var pseudoFailureDetailsByType 		= {
	"failureOrg"	: pseudoFailureOrgDetailsByType,
	"failureReason"	: pseudoFailureReasonDetailsByType,
	"failureSymptom": pseudoFailureSymptomDetailsByType,
};



