
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
		// 事件绑定
		bindEvents();		

		var pageTitle  	= _chartConfig.getPageTitle( _summaryType );
		$("#title").text( pageTitle );

		var haltedHours = _selectedSummaryData.haltedHours;
		var haltedTimes = _selectedSummaryData.haltedTimes;	
		$("#haltedHours").text( haltedHours  + "h" );
		$("#haltedTimes").text( haltedTimes );

		var name = _selectedSummaryData.name;
		$("#name").text( name );

		failureDetailView.onReloadHtml();		

	};

	function bindEvents() {
		// 饼图拖拽，选中以及取消选择事件
		_chartConfig.onPieChartDragged( pieChartDraggedHandler );
		_chartConfig.onPieChartSelected( pieChartSelectedHandler );
		_chartConfig.onPieChartUnselected( pieChartUnselectedHandler );

		$("#detailBack").click( onBack );
	}


	function loadDetail( summaryType, id, startMonth, endMonth ) {
		failureController.onLoadDetail( summaryType, id, startMonth, endMonth );
	}

	this.showDetail = function( datas ) {
		_chartConfig.draw( _summaryType, datas );		
	};

	function onBack() {
		failureController.backToSummary();
	}

	// 故障类型饼图拖拽重计算 事件: 与该类型相关的数据需要删除，重绘
	function pieChartDraggedHandler( draggedId ) {		
		failureController.onRemoveDetail( _summaryType, _selectedSummaryData.id, draggedId, _startMonth, _endMonth ); 
	}
	this.removeDetail 	= function( datas ) {
		_chartConfig.removeDataAndRefresh( datas );
	};
	// 饼图选中事件
	function pieChartSelectedHandler( detailId ) {
		failureController.onLocateDetail( _summaryType, _selectedSummaryData.id, detailId, _startMonth, _endMonth );
	}
	this.locateDetail	= function( datas ) {
		_chartConfig.locateDataAndRefresh( datas );
	};
	// 饼图取消选中事件
	function pieChartUnselectedHandler( ) {
		failureController.onRestoreDetail( _summaryType );
	}
	this.restoreDetail	= function( summaryType ) {
		_chartConfig.restoreDataAndRefresh( summaryType );
	};
}


