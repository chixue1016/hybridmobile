
function FailureDetailView() {	
	var _summaryType;
	var _startMonth;
	var _endMonth;
	var _selectedSummaryData;

	// 图形的配置
	var _chartConfig;

	this.onReloadHtml = function() {		
		loadDetail( _summaryType, _selectedSummaryData.id, _startMonth, _endMonth );
	};

	this.init	 	= function() {
		var message 	= FailureMessage.receive(); 
		_summaryType 	= message.getSummaryType();
		_startMonth		= message.getStartMonth();
		_endMonth		= message.getEndMonth();
		_selectedSummaryData = message.getSelectedSummaryData();
		
		_chartConfig 	= FailureChartConfig.getConfig();
		var pageTitle  	= _chartConfig.getPageTitle( _summaryType );
		$("#title").text( pageTitle );

		var haltedHours = _selectedSummaryData.haltedHours;
		var haltedTimes = _selectedSummaryData.haltedTimes;	
		$("#haltedHours").text( haltedHours  + "h" );
		$("#haltedTimes").text( haltedTimes );

		var name = _selectedSummaryData.name;
		$("#name").text( name );

		// 事件绑定
		$(document).ready(function() {
			failureDetailView.onReloadHtml();
			$("#detailBack").click( onBack );                   
		});

	};


	var loadDetail	= function( summaryType, id, startMonth, endMonth ) {
		failureController.onLoadDetail( summaryType, id, startMonth, endMonth );
	}

	this.showDetail = function( datas ) {
		var chartCount 	= _chartConfig.getChartCount();

		for (var chartIndex = 0; chartIndex < chartCount; chartIndex++) {			
			var chart = _chartConfig.getChart( _summaryType, chartIndex, datas );
		   	chart.draw(); 
		}
	};

	function onBack() {
		failureController.backToSummary();
	}
}

var failureDetailView = new FailureDetailView();

