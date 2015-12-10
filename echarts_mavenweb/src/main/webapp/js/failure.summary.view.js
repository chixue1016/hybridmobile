
function FailureSummaryView() {		
	var _summaryType;
	var _startMonth, _endMonth;
	var _summaryDatas;

	var _table;

	function init() {
		_table = new FailureSummaryTableBuilder( "dataInfo" ).build();
		eventBind();
	}
	// 事件绑定
	function eventBind() {
		_table.on("select", function(e, dt, type, indexes) {
	    	var rowDatas 	= _table.rows( indexes ).data();
	    	var selectData 	= rowDatas[0];
	    	failureSummaryView.onSelectRow( selectData );  

		});

		$("#btngroup").on("click", "a", function(event) {		
			var selectedSummaryTab = $(this);
			failureSummaryView.onChangeTab(selectedSummaryTab);	
		});

		$("#queryByDate").click(function() {
			failureSummaryView.onQueryByDate();
		});

		 //initiating jQuery
        jQuery(function($) {
            $(document).ready( function() {              
                $('#matest').stickUp();
                failureSummaryView.onReloadHtml();  
            });
        });
	
	};

	var loadSummary 	= function() {
		_startMonth 	= $("#startMonth").val();
		_endMonth		= $("#endMonth").val();
		
		// Just send loading data request.		
        failureController.onLoadSummary( _summaryType, _startMonth, _endMonth );
	};

	this.showSummary  	= function( datas ) {
		// var table = $('#dataInfo').DataTable();
		// table.clear();

 	    _summaryDatas = datas.data;
 	    _table.clear();
 	    _table.rows.add(_summaryDatas).draw();
 	};

	var loadDetail 	= function( summaryType, id ) {
		failureController.onLoadDetail( summaryType, id );
	};

	this.onReloadHtml 	= function() {
		// 加载页面时，首先判断是否为第一次加载
    	// 恢复之前的快照
		var snapshot		= FailureSnapshot.restore();
    	var firstLoaded		= snapshot.isFirstLoaded();    	   
    	if ( firstLoaded ) {
    		// 第一次加载，默认总览页签
    		_summaryType 	= "failureOrg";	

    		// 第一次加载，默认当前年月
    		var currentMonth= currentYearAndMonth();
    		_startMonth		= currentMonth;
    		_endMonth		= currentMonth;    		
    	} else { 
    		_summaryType	= snapshot.getSummaryType();    		   		

    		_startMonth		= snapshot.getStartMonth();
    		_endMonth		= snapshot.getEndMonth();
    	}
    	
    	summaryTab 	= $("#" + _summaryType); 
   		focusOn( summaryTab );
   		showMonthRange( _startMonth, _endMonth ); 
   		
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

	this.onSelectRow  	= function( selectedRow ) {
    	var selectedSummaryData = {
    		"id" 			: selectedRow.id,
    		"name"			: selectedRow.name,
    		"haltedTimes" 	: selectedRow.haltedTimes,
    		"haltedHours"	: selectedRow.haltedHours
    	};

    	// 跳转到详情页面
    	var failureMessage = 
    		new FailureMessage( _summaryType, _startMonth, _endMonth, selectedSummaryData );
    	failureController.onRedirectToDetailHtml( failureMessage );
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

		snapshot.setFirstLoaded( false );
		snapshot.setSummaryType( _summaryType );
		snapshot.setStartMonth( _startMonth );
		snapshot.setEndMonth( _endMonth );
		snapshot.setSummaryDatas( _summaryDatas );

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

	// Constructor code.
	init();
}

var failureSummaryView = new FailureSummaryView();





