$(document).bind( "mobileinit", function() {
	$.support.cors = true;
	$.mobile.allowCrossDomainPages = true;
	$.mobile.pushStateEnabled = false; 
});

function FailureController() {
	//var failureSummaryView 	= new FailureSummaryView();
	var failureModel 	= new FailureModel();
	var _failureSlider	= new FailureSlider();
	
	this.onLoadSummary 	= function( summaryType, startMonth, endMonth ) {
		failureModel.loadSummary( summaryType, startMonth, endMonth );
	};
	this.loadedSummary 	= function( datas ) {
		failureSummaryView.showSummary( datas );
	};

	this.toDetail		= function( failureMessage ) {
		// Before redirect the detail html, save the summary html firstly.
		failureSummaryView.snapshot();
		// Send message to the detail html
		failureMessage.send( );     
        _failureSlider.toDetail();
        failureDetailView.init();
	};

	this.onBackTo		= function( html ) {
		open( html );
	}

	this.onLoadDetail 	= function( summaryType, id, startMonth, endMonth ) {		
		failureModel.loadDetail( summaryType, id, startMonth, endMonth );
	};
	this.loadedDetail 	= function( datas ) {	
        failureDetailView.showDetail( datas );
	};

	function open( html ) {
		window.open( html );
	};
	

}

var failureController = new FailureController();
