$(document).ready(function() {
	failureDetailView.onReloadHtml();                   
});

var chartDivIds 	=  [ "chart1", "chart2", "chart3" ];

var chartsConfig 	= {
	"failureOrg" 	: {
		subjects	: [	"failureType", 	"failureReason",	"failureSymptom"],
		charts 		: [ "pie", 			"barVectical", 		"barHorizen"	]		
	},

	"failureType" 	: {
		subjects	: [	"failureOrg",	"failureReason",	"failureSymptom"],
		charts 		: [ "circle", 		"barVectical", 		"barHorizen"	],		
	},

	"failureReason" : {
		subjects	: [	"failureOrg",	"failureType", 		"failureSymptom"],
		charts		: [ "circle", 		"pie",  			"barVectical" 	]		
	},

	"failureSymptom": {
		subjects	: [	"failureOrg",	"failureType", 		"failureReason"	],
		charts		: [ "circle",		"pie", 				"barHorizen"	]		
	}
};

// 详情页面标题
var detailPageTitles	= {
	"failureOrg"	: "总览",
	"failureType"	: "故障类别",
	"failureSymptom": "故障现象",
	"failureReason"	: "故障原因"
};
// 图标标题
var chartTitles	= {
	"failureOrg"	: "故障发生组织",
	"failureType"	: "故障类别",
	"failureSymptom": "故障现象",
	"failureReason"	: "故障原因"
};

function FailureDetailView() {
	var _snapshot 		= new FailureSnapshot(); 
	var _summaryType 	= _snapshot.getSummaryType();
	var _startMonth		= _snapshot.getStartMonth();
	var _endMonth		= _snapshot.getEndMonth();
	var _selectedSummaryData = _snapshot.getSelectedSummaryData();

	this.onReloadHtml = function() {
		init();
		
		loadDetail( _summaryType, _selectedSummaryData.id, _startMonth, _endMonth );
	};

	var init	 	= function() {
		var title  			= detailPageTitles[ _summaryType ];
		$("#title").html(title);
	};
	var loadDetail	= function( summaryType, id, startMonth, endMonth ) {
		failureController.onLoadDetail( summaryType, id, startMonth, endMonth );
	}

	this.showDetail = function( datas ) {
		var summaryType 	= _snapshot.getSummaryType();
		var theChartConfig 	= chartsConfig[summaryType];

		var chartTypes 	= theChartConfig.charts;
		var subjects 	= theChartConfig.subjects;

		for (var i = 0; i < chartTypes.length; i++) {
			var subject 	= subjects[i];
			var data 		= datas[subject];
			var title 		= chartTitles[subject]
			var chartDivId 	= chartDivIds[i];
			//alert(JSON.stringify(data));
			var chartType = chartTypes[i];	
			var chart;
    		if (chartType == "pie") {
    			chart = new PieChart(chartDivId, title, data); 
    		} else if (chartType == "barHorizen") {
        		chart = new BarChart(chartDivId, title, data, false);
    		} else if (chartType == "barVectical") {
        		chart = new BarChart(chartDivId, title, data, true);
    		} else if (chartType == "circle") {
    			chart = new PieChart(chartDivId, title, data);
    		}

    	chart.draw();
		}
	};
}

var failureDetailView = new FailureDetailView();

