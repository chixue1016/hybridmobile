
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
	var failureDetails 	= pseudoFailureDetails[summaryType];		
	//alert(JSON.stringify( failureSummaries ) );
	var failureDetailOfTheId = failureDetails[id];
	
	return failureDetailOfTheId;
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
		}
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
	{ name 	: '故障组织1', 		value : 335 	},
    { name 	: '故障组织2', 		value : 310 	},
    { name 	: '故障组织3', 		value : 234 	}, 
    { name 	: '故障组织4', 		value : 135		},
    { name 	: '故障组织5', 		value : 1548 	}
];

var pseudoFailureType = [	
	{ name 	: '故障类别1', 		value : 35 		},
    { name 	: '故障类别2', 		value : 10 		},
    { name 	: '故障类别3', 		value : 34 		}, 
    { name 	: '故障类别4', 		value : 35		},
    { name 	: '故障类别5', 		value : 48 		}
];

var pseudoFailureReason = [	
	{ name 	: '故障原因1', 		value : 25 		},
    { name 	: '故障原因2', 		value : 10 		},
    { name 	: '故障原因3', 		value : 24 		}, 
    { name 	: '故障原因4', 		value : 25		},
    { name 	: '故障原因5', 		value : 38 		}
];

var pseudoFailureSymptom = [
	{ name 	: '故障现象1', 		value : 15 		},
    { name 	: '故障现象2', 		value : 15 		},
    { name 	: '故障现象3', 		value : 23 		}, 
    { name 	: '故障现象4', 		value : 15		},
    { name 	: '故障现象5', 		value : 18 		}
];

var pseudoFailureDetailOfOneOrg = {
	"failureType"	: pseudoFailureType,
	"failureReason"	: pseudoFailureReason,
	"failureSymptom": pseudoFailureSymptom
};

var pseudoFailureDetailOfOneType = {
	"failureOrg"	: pseudoFailureOrg,
	"failureReason"	: pseudoFailureType,
	"failureSymptom": pseudoFailureReason
};

var pseudoFailureDetailOfOneReason = {
	"failureOrg"	: pseudoFailureOrg,
	"failureType"	: pseudoFailureType,
	"failureSymptom": pseudoFailureSymptom
};

var pseudoFailureDetailOfOneSymptom = {
	"failureOrg"	: pseudoFailureOrg,
	"failureType"	: pseudoFailureType,
	"failureReason"	: pseudoFailureReason
};

var pseudoFailureOrgDetails	= {
	"1"		: pseudoFailureDetailOfOneOrg,
	"2"		: pseudoFailureDetailOfOneOrg,
	"3"		: pseudoFailureDetailOfOneOrg,
	"4"		: pseudoFailureDetailOfOneOrg
};

var pseudoFailureTypeDetails	= {
	"1"		: pseudoFailureDetailOfOneType,
	"2"		: pseudoFailureDetailOfOneType,
	"3"		: pseudoFailureDetailOfOneType,
	"4"		: pseudoFailureDetailOfOneType
};

var pseudoFailureReasonDetails	= {
	"1"		: pseudoFailureDetailOfOneReason,
	"2"		: pseudoFailureDetailOfOneReason,
	"3"		: pseudoFailureDetailOfOneReason,
	"4"		: pseudoFailureDetailOfOneReason
};

var pseudoFailureSymptomDetails	= {
	"1"		: pseudoFailureDetailOfOneSymptom,
	"2"		: pseudoFailureDetailOfOneSymptom,
	"3"		: pseudoFailureDetailOfOneSymptom,
	"4"		: pseudoFailureDetailOfOneSymptom
};

var pseudoFailureDetails 		= {
	"failureOrg"	: pseudoFailureOrgDetails,
	"failureType"	: pseudoFailureTypeDetails,
	"failureReason"	: pseudoFailureReasonDetails,
	"failureSymptom": pseudoFailureSymptomDetails
};
