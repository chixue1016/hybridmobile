
$(document).ready(function() {
	failureSummaryView.onReloadHtml();                   
});
         
$("#btngroup").on("click", "a", function(event) {		
	var selectedSummaryTab = $(this);
	failureSummaryView.onChangeTab(selectedSummaryTab);	
});

// On select one row of the table.             
$("#tableBody").on("click", "tr", function(event) {
	failureSummaryView.onSelectRow($(this));   
});

$("#queryByDate").click(function() {
	failureSummaryView.onQueryByDate();
});

$("#maTest").click(function() {
	failureSummaryView.onReloadSummary();
});

function FailureSummaryView() {
	var _snapshot	= new FailureSnapshot();
	var _summaryType;
	var _startMonth, _endMonth;
	var _selectedSummaryData;
	var _summaryDatas;

	var loadSummary 	= function() {
		_startMonth 	= $("#startMonth").val();
		_endMonth	= $("#endMonth").val();
		
		// Just send loading data request.		
        failureController.onLoadSummary( _summaryType, _startMonth, _endMonth );
	};
	this.showSummary  	= function(datas) {
		// Reload summary data, the old data must be cleared.
		clearTable();	
		
		_summaryDatas = datas.data;
		for(var i = 0; i < _summaryDatas.length; i++) {	                     
	  		var body = document.getElementById("tableBody");
	    	var row = body.insertRow(i);

	    	var oneSummary = _summaryDatas[i];                 
	    	row.insertCell(0).innerHTML = oneSummary.name;	    	
	  		row.insertCell(1).innerHTML = oneSummary.haltedTimes;
	    	row.insertCell(2).innerHTML = oneSummary.haltedHours;

	    	row.setAttribute("id", oneSummary.id);
		}		
	};

	var loadDetail 	= function( summaryType, id ) {
		failureController.onLoadDetail( summaryType, id );
	};

	this.onReloadHtml 	= function() {
		var defaultSummaryTab 	= $("#failureOrg");
		var currentMonth		= currentYearAndMonth();		
		// 加载页面时，首先判断当前缓存的页签，如果为空，则说明是第一次加载。
		// 默认总览页签
		var startMonth, endMonth, summaryTab;	
    	var summaryType 	= _snapshot.getSummaryType();
    	var firstLoadHtml 	= (summaryType == null || summaryType == "undefined");
    	if (firstLoadHtml) {
    		summaryTab 		= defaultSummaryTab;
    		summaryType 	= summaryTab.attr("id");    		
    		_summaryType 	= summaryType;

    		startMonth	= currentMonth;
    		endMonth	= currentMonth;    		
    	} else {
    		summaryTab 	= $("#" + summaryType);
    		startMonth	= _snapshot.getStartMonth();
    		endMonth	= _snapshot.getEndMonth();
    	}
    	
   		focusOn(summaryTab);
   		showMonthRange(startMonth, endMonth); 
   		
   		loadSummary(); 
	};

	var currentYearAndMonth 	= function() {
		var currentDateTime = new Date();
   		var year 	= currentDateTime.getFullYear();
   		var month 	= currentDateTime.getMonth() + 1;
   		if (month < 10) {
   			month = "0" + month;
   		}

   		return (year + "-" + month);
	};

	this.onSelectRow  	= function(selectedRow) {
		var id 			= selectedRow.attr("id");
		var name  		= selectedRow.children().eq(0).text();
   		var haltedTimes = selectedRow.children().eq(1).text();
   		var haltedHours = selectedRow.children().eq(2).text();

		//var name = selectedRow.cells[0].getValue();
    	if ( id != null && id != "undefined" ) {    		
    	}

    	_selectedSummaryData = {
    		"id" 			: id,
    		"name"			: name,
    		"haltedTimes" 	: haltedTimes,
    		"haltedHours"	: haltedHours
    	};

    	// 跳转到详情页面
    	failureController.onRedirectToDetailHtml();
	};

	this.onChangeTab 	= function(selectedSummaryTab) {		
		var selectedSummaryType = selectedSummaryTab.attr("id");
		var selectedNullTab 	= (selectedSummaryType == null || selectedSummaryType == "undefined");
				
		var selectedSameTab 	= ( _summaryType == selectedSummaryType );		
		if (selectedNullTab || selectedSameTab) {
			return;
		}

    	// Summary Tab's focus switch.
    	var summaryTab = $("#" + _summaryType);
    	removeFocusOn(summaryTab); 
    	focusOn(selectedSummaryTab);     	
    	_summaryType = selectedSummaryType;
    
    	// Reload the summary data.
    	loadSummary();
	};

	this.onQueryByDate	= function() {
		loadSummary();
	}

	// 页面切换时，保存当前页面快照
	this.snapshot 	= function() {
		var snapshot = new FailureSnapshot();
		snapshot.setSummaryType( _summaryType );
		snapshot.setStartMonth( _startMonth );
		snapshot.setEndMonth( _endMonth );
		snapshot.setSummaryDatas( _summaryDatas );
		snapshot.setSelectedSummaryData( _selectedSummaryData );
		snapshot.save();
	}

	var focusOn = function(tab) {
		tab.addClass("hover");
	};
	var removeFocusOn = function(tab) {
		tab.removeClass("hover");
	};

	var showMonthRange	= function( startMonth, endMonth ) {
		$("#startMonth").val(startMonth);
   		$("#endMonth").val(endMonth);
	};

	var clearTable = function() {
		var body = document.getElementById("tableBody");
		while (body.rows.length > 0) {	                     
	    	body.deleteRow(0);                
		}
	};
}
var failureSummaryView = new FailureSummaryView();





