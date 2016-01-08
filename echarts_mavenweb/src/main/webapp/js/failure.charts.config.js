
function FailureChartConfig() {
	
	var _chartCount 	= 3;
	function getChartCount( ) {
		return _chartCount;
	};

	/***************************************************************/
	/*********************** Events Handler ************************/
	/***************************************************************/
	// 饼图拖拽事件
	var _onPieChartDraggedHandler;
	this.onPieChartDragged 	= function( handler ) {
		_onPieChartDraggedHandler = handler;
	};
	this.removeDataAndRefresh	= function( allRemovedDataArray ) {		
		for ( var type in allRemovedDataArray ) {
			// 故障类别除外
			if (type == "failureType") {
				continue;
			}
			var chart 	= _charts[ type ];
			var oldDataArray = chart.getData();
			var removedDataArray = allRemovedDataArray[ type ];
			var newDataArray	= removeData( oldDataArray, removedDataArray );
			chart.setData( newDataArray );
			chart.refresh();
		}
	};

	function removeData( oldDataArray, removedDataArray ) {
		var oldDataMap	= toMap( oldDataArray );
		var removedDataMap = toMap( removedDataArray );		
		var newDataArray = [];
		for ( var name in removedDataMap ) {
			if ( name == null || name == "undefined" ) {
				continue;
			}

			var oneRemoveData 	= removedDataMap[ name ];
			var removedValue  	= oneRemoveData.value;
			var oldData 		= oldDataMap[ name ];
			var oldValue		= oldData.value;
			var newValue 		= oldValue - removedValue;
			if ( newValue <= 0 ) {
				continue;
			}
			var newData = {};
			newData.name = name;
			newData.value = newValue;
			newDataArray.push( newData );			
		}

		return newDataArray;
	}		

	function toMap( dataArray ) {
		if ( dataArray == null || dataArray == "undefined" ) {
			return null;
		}
		
		var length = dataArray.length;
		if ( length <= 0 ) {
			return null;
		}

		var dataMap = {};
		for ( var i = 0; i < length; i++ ) {			
			var oneData = dataArray[i];
			var name = oneData.name;
			if ( name != null && name != "undefined" ) {
				dataMap[name] = oneData ;
			}			
		}

		return dataMap;
	}

	// 饼图选中事件
	var _onPieChartSelectedHandler;
	this.onPieChartSelected 	= function( handler ) {
		_onPieChartSelectedHandler 	= handler;
	};
	this.locateDataAndRefresh	= function( locatedDataArray ) {		
		for ( var type in locatedDataArray ) {
			// 故障类别除外
			if (type == "failureType") {
				continue;
			}
			var chart 	= _charts[ type ];			
			var locatedData = locatedDataArray[ type ];
			
			chart.setData( locatedData );
			chart.refresh();
		}
	};
	// 饼图取消选中事件
	var _onPieChartUnselectedHandler;
	this.onPieChartUnselected 	= function( handler ) {
		_onPieChartUnselectedHandler 	= handler;
	};
	this.restoreDataAndRefresh	= function( summaryType ) {	
		var chartCount 	= getChartCount();

		for (var chartIndex = 0; chartIndex < chartCount; chartIndex++) {
			var dataType 	= dataTypeFor( summaryType, chartIndex );
			// 故障类别除外
			if (dataType == "failureType") {
				continue;
			}			
			
			var chart 	= _charts[ dataType ];
		   	var restoredData 		= _datas[ dataType ];			
			
			chart.setData( restoredData );
			chart.refresh(); 
		}	
	};

	var _chartDivIds 	=  [ "chart1", "chart2", "chart3" ];
	function divIdFor( chartIndex ) {
		return _chartDivIds[ chartIndex ];
	}

	/***************************************************************/
	/*********************** Titles Config  ************************/
	/***************************************************************/
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

	/***************************************************************/
	/*********************** Charts Config  ************************/
	/***************************************************************/
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

	var _charts = { };
	function chartFor ( chartType, chartDiv ) {
		var chart;		
		if ( chartType == "pie" ) {
			chart = new PieChart( chartDiv );
			chart.onDragged( _onPieChartDraggedHandler );
			chart.onSelected( _onPieChartSelectedHandler ); 
			chart.onUnselected( _onPieChartUnselectedHandler );    			
		} else if ( chartType == "barHorizen" ) {
    		chart = new BarChart( chartDiv );
    		chart.setVertical( false );        		
		} else if ( chartType == "barVectical" ) {
    		chart = new BarChart( chartDiv );
    		chart.setVertical( true );         		
		} else if ( chartType == "circle" ) {
			chart = new CircleChart( chartDiv );    			   			
		}

		return chart;
	}

	function getChart( summaryType, chartIndex, datas ) {		
		
		var chartType 	= chartTypeFor( summaryType, chartIndex );
		var chartDiv 	=  divIdFor( chartIndex );
		var chart 		= chartFor( chartType, chartDiv );

		var dataType 	= dataTypeFor( summaryType, chartIndex );
		var data 		= datas[ dataType ];
		var title  		= chartTitleFor( dataType );	
		chart.setTitle( title );
		chart.setData( data );	

		return chart;
	};

	var _datas;
	this.draw	= function( summaryType, datas ) {
		_datas 	= datas;
		var chartCount 	= getChartCount();

		for (var chartIndex = 0; chartIndex < chartCount; chartIndex++) {
			var dataType 	= dataTypeFor( summaryType, chartIndex );			
			var chart 		= getChart( summaryType, chartIndex, datas );
			_charts[ dataType ] = chart;
		   	chart.draw(); 
		}
	}

	/***************************************************************/
	/*********************** Pages Config  ************************/
	/***************************************************************/
	var _pageTitles	= {
		"failureOrg"	: "总览",
		"failureType"	: "故障类别",
		"failureSymptom": "故障现象",
		"failureReason"	: "故障原因"
	};
	this.getPageTitle	= function( summaryType ) {
		return _pageTitles [ summaryType ];
	};
	

	



}

FailureChartConfig.getConfig = function() {
	return new FailureChartConfig();
};
