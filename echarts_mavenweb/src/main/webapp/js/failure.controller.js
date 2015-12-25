$(document).bind( "mobileinit", function() {
	$.support.cors = true;
	$.mobile.allowCrossDomainPages = true;
	$.mobile.pushStateEnabled = false; 
});

function FailureController() {
	//var failureSummaryView 	= new FailureSummaryView();
	var failureModel 	= new FailureModel();
	var _failureSlider	= new FailureSlider();
	
	this.login = function(user, password, host, port) {	
		failureModel.login( user, password, host, port );		
	};

	this.onLoadSummary 	= function( summaryType, startMonth, endMonth ) {
		failureModel.loadSummary( summaryType, startMonth, endMonth );
	};
	this.loadedSummary 	= function( datas ) {
		failureSummaryView.showSummary( datas );
	};

	this.backToSummary	= function() {
		_failureSlider.toSummary();		
	};
	this.frontToSummary	= function() {
		failureSummaryView.init();
		_failureSlider.toSummary();		
	};

	this.frontToDetail	= function( failureMessage ) {
		// Before redirect the detail html, save the summary html firstly.
		failureSummaryView.snapshot();
		// Send message to the detail html
		failureMessage.send( );     
        _failureSlider.toDetail();
        failureDetailView.init();
	};

	this.backToLogin	= function() {
		_failureSlider.toLogin();
	};

	this.onLoadDetail 	= function( summaryType, id, startMonth, endMonth ) {		
		failureModel.loadDetail( summaryType, id, startMonth, endMonth );
	};
	this.loadedDetail 	= function( datas ) {	
        failureDetailView.showDetail( datas );
	};

	// 详情页面中类别拖拽后，删除相关的详情数据
	this.onRemoveDetail = function( summaryType, id, typeName ) {
		failureModel.loadRemovedDetail( summaryType, id, typeName );
	};
	this.removeDetail 	= function( datas ) {
		failureDetailView.removeDetail( datas );
	};
	

}

