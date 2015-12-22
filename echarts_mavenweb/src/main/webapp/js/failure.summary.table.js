function FailureSummaryTableBuilder( divId ) {
	var _divId;

	// 表格布局
	var layoutConfig = 
		"<'row table-info-tablewrapper'<'col-xs-12'tr>>" 							/*+ // 
       	"<'row table-info-pagination'<'col-xs-9'p><'col-xs-3'l>>"					+
       	"<'row table-info-information'<'col-xs-12'i>>"*/;

	var columnsConfig 	= [ 
		{ "title"  : "名称", 		"data"	: "name"}, 
		{ "title"  : "停机次数",  	"data" 	: "haltedTimes"}, 
		{ "title"  : "停机时长",	"data"	: "haltedHours"}
	];

    // 提示语
    var hintsConfig	= {
        "decimal"		: "",
        "emptyTable"	: "没有数据",
        "info"			: "• _TOTAL_ •",
        "infoEmpty"		: "显示第0到第0条，共0条",
		"infoFiltered"	: "(filtered from _MAX_ total entries)",
		"lengthMenu"	: "_MENU_",
		"loadingRecords": "加载中..",
		"processing"	: "处理中...",
		"search"		: "搜索:",
		"zeroRecords"	: "没有查询到数据",
		"paginate"	: {
   			"first"		: "|<",
   			"last"		: ">|",
  			"next"		: ">",
    		"previous"	: "<"
		},
	};	

	var tableConfig = {
		"dom"       : layoutConfig,    
	    "columns"   : columnsConfig,
	    "searching" : false,
	    "paging" 	: false,	
	    "rowId"     : "id",
	    "select"    : {
	    	"style" : "single",
	        "items" : "row",
	        "info" 	: false
	    },

	    // "pagingType": "full",

	    "language"  : hintsConfig,
	};

	this.build = function() {
		var tableDiv = $( "#" + divId );
		return tableDiv.DataTable( tableConfig );
	}

	this.setDivId = function( divId ) {
		_divId = divId;
	};
	this.getDivId = function() {
		return _divId;
	};	

	// Constructor Code.
	this.setDivId( divId );
}

