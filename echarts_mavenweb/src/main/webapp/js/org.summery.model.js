
var pseudoFailureOrgSummary = [
	{	
		"orgId"			: 1,
		"orgName" 		: "天瑞集团总公司炼油分公司第一炼油厂",
		"haltedTimes" 	: 15,
		"haltedHours" 	: 320
	},

	{
		"orgId"			: 2,
		"orgName" 		: "天瑞化肥农药",
		"haltedTimes" 	: 15,
		"haltedHours" 	: 120
	},

	{
		"orgId"			: 3,
		"orgName" 		: "天瑞集团总公司炼油分公司第二炼油厂",
		"haltedTimes" 	: 15,
		"haltedHours" 	: 160
	},

	{
		"orgId"			: 4,
		"orgName" 		: "天瑞发电厂1",
		"haltedTimes" 	: 15,
		"haltedHours" 	: 240
	}

];

var pseudoSummaryDataOfOneOrg = {
	"orgId" 		: 1,
	"failureType" 	: [	
		{ name : '老化', 		value : 335 	},
        { name : '人为损坏', 	value : 310 	},
        { name : '事故', 		value : 234 	}, 
        { name : '年久失修', 	value : 135		},
        { name : '其它', 		value : 1548 	}
	],

	"failureReason" : [
		{ name : '自然老化', 	value : 7 		},
        { name : '操作不当', 	value : 8 		},
        { name : '油污污染', 	value : 6 		}, 
        { name : '一不小心', 	value : 12		},
        { name : '随便啦', 		value : 24 		},
        { name : '故障原因', 	value : 36		}	
	],

	"failureSymptom" : [
		{ name : '部件脱落', 	value : 7 		},
        { name : '燃油泄漏', 	value : 8 		},
        { name : '停机', 		value : 6 		}, 
        { name : '杂音', 		value : 12		},
        { name : '严重发热', 	value : 24 		},
        { name : '涂层掉漆', 	value : 36		}
	]
};

function FailureOrgSummaryModel() {
	this.getAll = function() {	
		return pseudoFailureOrgSummary;

		var serverUrl 	= Cache.get("serverUrl");
		var user 		= Cache.get("user"); 	
		var password 	= Cache.get("password");
		var groupId		= Cache.get("groupId");
		var userId		= Cache.get("userId");
		var token		= Cache.get("token");

		$.ajax({
			type 	: "POST",
			url 	: serverUrl + "/failureOrgSummary.jsonp",
			data 	: JSON.stringify({"user" : user, "password" : password, "groupId" : groupId, "userId" : userId}),			
			
			dataType : 'jsonp',
			success	: function(jsonArray) {
				var data = jsonArray[0];
				$("#data").html(JSON.stringify(data));
				displayedData = data;
			}
		});
	};

	this.getBy = function(orgId) {
		return pseudoSummaryDataOfOneOrg; 
	};
}


