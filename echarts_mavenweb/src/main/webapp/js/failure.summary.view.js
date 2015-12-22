
function FailureSummaryView() {		
	var _summaryType;
	var _startMonth, _endMonth;
	var _summaryDatas;

	var _tableScroller;
	var _table;

	// 表格每页显示的数据个数
	var _pageSize	= 3;
	// 记录当前界面显示的数据的索引
	var _currentDataIndex = 0;
	this.init 	= function() {
		initTable();
		initScroller();
		eventBind();
	};
	function initTable() {
		if ( _table == null || _table == "undefined") {
			_table 	= new FailureSummaryTableBuilder( "failureSummaryTable" ).build();
			
			_table.on( "select", function(e, dt, type, indexes) {
		    	var rowDatas 	= _table.rows( indexes ).data();
		    	var selectData 	= rowDatas[0];
		    	onSelectRow( selectData );  

			});
		}
		
	}

	function pullDownAction () {			
		loadOnePage();
		_tableScroller.refresh();		// Remember to refresh when contents are loaded (ie: on ajax completion)
	}	

	function pullUpAction () {
		loadOnePage();
		_tableScroller.refresh();		// Remember to refresh when contents are loaded (ie: on ajax completion)
	}

	function initScroller() {
		var pullDownEl 		= document.getElementById('pullDown');
		var pullDownHeight 	= pullDownEl.offsetHeight;
		//var pullDownHeight = $('#pullDown').height(); // jQuery获取的高度不包括内 外边距和边框
		/*var pullUpEl 		= document.getElementById('pullUp');	
		var pullUpOffset 	= pullUpEl.offsetHeight;	*/	

		var scrollWrapper 			= document.getElementById('wrapper');
		// 表格滚动条的位置相对于表格分隔符确定
		var separatorPadding		= 20;
		var scrollWrapperTopOffset 	= document.getElementById('tableSeparator').offsetTop + separatorPadding;
		//var scrollWrapperTopOffset 		= $('#tableSeparator').offset().top + 20/*.offsetTop + 20*/;
		scrollWrapper.style.top  	= scrollWrapperTopOffset + "px";
		
		// 表格滚动条包装器高度
	    var scrollWrapperHeight		= $(window).height() - scrollWrapperTopOffset;
		scrollWrapper.style.height= scrollWrapperHeight + "px";
		
		scrollWrapper.style.left 	= '0';

		var pullThreshold = 5, // 上拉或下拉动作，触发加载数据时的偏移值
		_tableScroller = new iScroll('wrapper', {
			topOffset		: pullDownHeight,
			useTransition 	: true,
			
			onRefresh: function () {
				if (pullDownEl.className.match('loading')) {
					pullDownEl.className = '';
					pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
				} else if (pullUpEl.className.match('loading')) {
					pullUpEl.className = '';
					pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
				}
			},
			onScrollMove: function () {
				var currentY = this.y;
				if (this.y > pullThreshold && !pullDownEl.className.match('flip')) {
					pullDownEl.className = 'flip';
					pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Release to refresh...';
					this.minScrollY = 0;
				} else if (this.y < pullThreshold && pullDownEl.className.match('flip')) {
					pullDownEl.className = '';
					pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
					this.minScrollY = -pullDownHeight;
				} else if (this.y < (this.maxScrollY - pullThreshold) && !pullUpEl.className.match('flip')) {
					pullUpEl.className = 'flip';
					pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Release to refresh...';
				} else if (this.y > (this.maxScrollY - pullThreshold) && pullUpEl.className.match('flip')) {
					pullUpEl.className = '';
					pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
					
				}
			},
			onScrollEnd: function () {
				if (pullDownEl.className.match('flip')) {
					pullDownEl.className = 'loading';
					pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Loading...';				
					pullDownAction();	// Execute custom function (ajax call?)
				} else if (pullUpEl.className.match('flip')) {
					pullUpEl.className = 'loading';
					pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Loading...';				
					pullUpAction();	// Execute custom function (ajax call?)
				}
			}
		});
	}

	// 事件绑定
	function eventBind() {
		$("#failureSummaryNavbar").on( "click", "a", function(event) {		
			var selectedSummaryTab = $(this);
			onChangeTab( selectedSummaryTab );	
		});

		$("#queryByDate").click( onQueryByDate );

		$("#summaryBack").click( onBack );

		$(document).ready( function() {                
            onReloadHtml();  
        });

		/* //initiating jQuery
        jQuery(function($) {
            $(document).ready( function() {              
                $('#head').stickUp();
                failureSummaryView.onReloadHtml();  
            });
        });*/
	
	};

	var loadSummary 	= function() {
		_startMonth 	= $("#startMonth").val();
		_endMonth		= $("#endMonth").val();
		
		// Just send loading data request.		
        failureController.onLoadSummary( _summaryType, _startMonth, _endMonth );
	};

	function loadOnePage() {
		var length 		= _summaryDatas.length ;		
		var startIndex 	= _currentDataIndex;
		var endIndex	= Math.min( _currentDataIndex + _pageSize, length );
		var onePage 	= [];
		for ( var i = startIndex ; i < endIndex ; i++) {		   
			onePage.push( _summaryDatas[ i ] );		   
		}

		_currentDataIndex = endIndex;
		_table.rows.add( onePage ).draw();
	}

	this.showSummary  	= function( datas ) {
		// var table = $('#dataInfo').DataTable();
		// table.clear();

 	    _summaryDatas = datas.data;
 	    _table.clear();
 	    loadOnePage();
 	};

	var loadDetail 	= function( summaryType, id ) {
		failureController.onLoadDetail( summaryType, id );
	};

	function onReloadHtml() {
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

	function onSelectRow ( selectedRow ) {
    	var selectedSummaryData = {
    		"id" 			: selectedRow.id,
    		"name"			: selectedRow.name,
    		"haltedTimes" 	: selectedRow.haltedTimes,
    		"haltedHours"	: selectedRow.haltedHours
    	};

    	// 跳转到详情页面
    	var failureMessage = 
    		new FailureMessage( _summaryType, _startMonth, _endMonth, selectedSummaryData );
    	failureController.frontToDetail( failureMessage );
	};

	function onChangeTab (selectedSummaryTab) {		
		var selectedSummaryType = selectedSummaryTab.attr("id");
		var selectedNullTab 	= (selectedSummaryType == null || selectedSummaryType == "undefined");
				
		var selectedSameTab 	= ( _summaryType == selectedSummaryType );		
		if (selectedNullTab || selectedSameTab) {
			return;
		}

    	// Summary Tab's focus switch.
    	var summaryTab = $("#" + _summaryType);
    	removeFocusOn( summaryTab ); 
    	focusOn( selectedSummaryTab );     	
    	_summaryType = selectedSummaryType;
    
    	// Reload the summary data.
    	loadSummary();
	}

	function onQueryByDate() {
		loadSummary();
	}

	function onBack() {
		failureController.backToLogin( );
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
		tab.addClass( "hover" );
	};
	var removeFocusOn = function(tab) {
		tab.removeClass( "hover" );
	};

	var showMonthRange	= function( startMonth, endMonth ) {
		$("#startMonth").val(startMonth);
   		$("#endMonth").val(endMonth);
	};

	// Constructor code.
	
}







