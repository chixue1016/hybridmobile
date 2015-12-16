
function FailureChartConfig() {
	var _chartCount 	= 3;

	var _chartDivIds 	=  [ "chart1", "chart2", "chart3" ];
	function divIdFor( chartIndex ) {
		return _chartDivIds[ chartIndex ];
	}

	// 图标标题
	var _chartTitles	= {
		"failureOrg"	: "故障发生组织",
		"failureType"	: "故障类别",
		"failureSymptom": "故障现象",
		"failureReason"	: "故障原因"
	};

	function chartTitleFor( dataType ) {
		return _chartTitles[ dataType ];
	}

	var _chartsConfig 	= {
		"failureOrg" 	: {
			dataTypes	: [	"failureType", 	"failureReason",	"failureSymptom"],
			chartTypes 	: [ "pie", 			"barHorizen", 		"barVectical"	]		
		},

		"failureType" 	: {
			dataTypes	: [	"failureReason",	"failureSymptom",   "failureOrg"],
			chartTypes 	: [ "barHorizen", 		"barVectical"	,   "circle"],		
		},

		"failureReason" : {
			dataTypes	: [	"failureType", 		"failureSymptom" , "failureOrg"],
			chartTypes	: [ "pie",  			"barVectical" 	,  "circle" ]		
		},

		"failureSymptom": {
			dataTypes	: [	"failureType", 		"failureReason",  "failureOrg"	],
			chartTypes	: [ "pie", 				"barHorizen"	, "circle",]		
		}
	};
	function dataTypeFor( summaryType, chartIndex ) {
		var dataTypes 	= _chartsConfig[ summaryType ].dataTypes;
		return dataTypes[ chartIndex ];
	}
	function chartTypeFor( summaryType, chartIndex ) {
		var chartTypes 	= _chartsConfig[ summaryType ].chartTypes;
		return chartTypes[ chartIndex ];
	}
	function chartFor ( chartType ) {
		var chart;		
		if ( chartType == "pie" ) {
			chart = new PieChart( );    			
		} else if ( chartType == "barHorizen" ) {
    		chart = new BarChart( );
    		chart.setVertical( false );        		
		} else if ( chartType == "barVectical" ) {
    		chart = new BarChart( );
    		chart.setVertical( true );         		
		} else if ( chartType == "circle" ) {
			chart = new CircleChart( );    			   			
		}

		return chart;
	}

	// 详情页面标题
	var _pageTitles	= {
		"failureOrg"	: "总览",
		"failureType"	: "故障类别",
		"failureSymptom": "故障现象",
		"failureReason"	: "故障原因"
	};
	this.getPageTitle	= function( summaryType ) {
		return _pageTitles [ summaryType ];
	};
	

	this.getChart = function( summaryType, chartIndex, datas ) {		
		
		var chartType 	= chartTypeFor( summaryType, chartIndex );
		var chart 		= chartFor( chartType );

		var dataType 	= dataTypeFor( summaryType, chartIndex );
		var data 		= datas[ dataType ];
		var title  		= chartTitleFor( dataType );
		chart.setDivId( divIdFor( chartIndex ) );
		chart.setTitle( title );
		chart.setData( data );
		/*if ( chartType == "pie" ) {
			chart = new PieChart(chartDivId, title, data);    			
		} else if ( chartType == "barHorizen" ) {
    		chart = new BarChart(chartDivId, title, data, false);        		
		} else if ( chartType == "barVectical" ) {
    		chart = new BarChart(chartDivId, title, data, true);        		
		} else if ( chartType == "circle" ) {
			chart = new CircleChart(chartDivId, title, data );    			   			
		}*/

		return chart;
	};

	this.getChartCount 	= function( ) {
		return _chartCount;
	};

}

FailureChartConfig.getConfig = function() {
	return new FailureChartConfig();
};
