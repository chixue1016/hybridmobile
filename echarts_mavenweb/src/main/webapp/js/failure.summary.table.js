function FailureSummaryTableBuilder( divId ) {
	var _divId;

	// 表格布局
	var layoutConfig = 
		"<'row font45px'<'col-xs-12'tr>>" 							+
       	"<'row font35px'<'col-xs-10'p><'col-xs-2'l>>"				+
       	"<'row font35px'<'col-xs-12'f>>"							+
       	"<'row font35px'<'col-xs-12'i>>";

	var columnsConfig 	= [ 
		{ "title"  : "名称", 		"data"	: "name"}, 
		{ "title"  : "停机次数",  	"data" 	: "haltedTimes"}, 
		{ "title"  : "停机时长",	"data"	: "haltedHours"}
	];

    // 提示语
    var hintsConfig	= {
        "decimal"		: "",
        "emptyTable"	: "没有数据",
        "info"			: "共_TOTAL_条",
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

		"aria": {
    		"sortAscending":  ": activate to sort column ascending",
    		"sortDescending": ": activate to sort column descending"
		}
	};	

	var tableConfig = {
		"dom"       : layoutConfig,    
	    "columns"   : columnsConfig,
	    "searching" : false,
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
		return $( "#" + divId ).DataTable( tableConfig );
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

