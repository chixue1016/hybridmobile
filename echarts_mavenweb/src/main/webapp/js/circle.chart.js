
// 布局:
// |		4		|		4 		|		4 		|
// |  11    |   1   |      12 		|   1 	|   11 	| 
var circleChartRowLayout = 	
	"<div class='row'>"														+
		"<div class='col-xs-4'>"											+
			"<div class='row'>"												+						
				"<div class='col-xs-11'>"									+
					"<div style='%circle1%'>%value1%</div>"					+
					"<div class='circle-chart-name'>%name1%</div>"		+
				"</div>"													+
				"<div class='col-xs-1'>"									+
				"</div>"													+
			"</div>"														+				   
		"</div>"															+

		"<div class='col-xs-4'>"											+
			"<div class='row'>"												+
				"<div class='col-xs-12'>"									+
					"<div style='%circle2% divAlignCenter'>%value2%</div>"	+
					"<div class='circle-chart-name'>%name2%</div>"		+
				"</div>"													+
			"</div>"														+
		"</div>"															+

		"<div class='col-xs-4'>"											+
			"<div class='row'>"												+
				"<div class='col-xs-1'>"									+
				"</div>"													+
				"<div class='col-xs-11'>"									+
					"<div style='%circle3%'>%value3%</div>"					+
					"<div class='circle-chart-name'>%name3%</div>"		+
				"</div>"													+
			"</div>"														+					
		"</div>"															+

	"</div>";


// 基于bootstrap的圆圈图
/*function CircleChart( divId, title, data ) {*/
function CircleChart( divId ) {
	var _divId;
	var _title;
	var _data;

	var _chartHtml = {
		"titleHtml"	: "",
		"datasHtml"	: ""
	};
	var _chart;
	var _circlesPerRow = 3;
	// bootstrap布局：
	// | left-padding1 | column1 | right-padding1 | left-padding2 | column2 | right-padding2 |
	
	// outer: |			4		|		4 		|		4 		|
	// inner: |  11     |   1   |      12 		|   1 	|   11 	| 

	var _outerColumnSpan 	= 4;
	var _innerColumnSpan	= 11;
	var _totalColumnSpan 	= 12;

	// 计算圆的直径
	function calDiameter() {
		// 根据bootstrap布局，row的左右两边各有一个padding: left-padding 和 right-padding
		var padding 	= 15;
		// CircleChart中 行 Div 所在父容器中的宽度
		var chartDiv 			=  $("#" + _divId);
		var containerWidth 		= chartDiv.parent().eq(0).width() + padding * 2;
		var outerColumnWidth 	= containerWidth * ( _outerColumnSpan / _totalColumnSpan);
		var innerColumnWidth	= outerColumnWidth * ( _innerColumnSpan / _totalColumnSpan);

		// 减去列的 left-padding 和 right-padding
		var diameter = innerColumnWidth - padding * 2;
		return diameter;
	}
	
	function toHex( decimal ) {
		var hex = decimal.toString( 16 ).toUpperCase();
		return ( decimal < 16) ? ( "0" + hex) : hex;
	}
	// 计算圆的颜色
	function calColor( index ) {
		var delta	= 20;	
		var r 	= toHex( 255 - delta * index );
		var g 	= toHex( delta * index );
		var b 	= toHex( 0 );		
		var color 	= '#' + r + g + b;
		return color;
	}

	// 计算圆的样式
	function calCircleStyle( color ) {
		var diameter 	= calDiameter();

		var circleStyle = 
			"width 			: " + diameter + "px;"  								+
		    "height 		: " + diameter + "px;"									+
		   	"border-radius	: 50%;"													+
		    "background		: " + color + ";"										+
		    "line-height	: " + diameter + "px;"									+
		    "font-size		: 35px;"												+
		    "font-weight	: bold;"												+
		    "text-align		: center;";

	    return circleStyle;
	}

	// 构造一行数据的图形
	function buildRowDatasHtml( rowDatas, rowColors ) {
		var oneRowHtml = circleChartRowLayout; 
		for (var i = 1; i < _circlesPerRow + 1; i++) {			
			var valuePattern 	= "%value" + i + "%";
			var namePattern		= "%name" + i + "%";
			var circlePattern	= "%circle" + i + "%";

			var oneData 	= rowDatas[ i - 1 ];			
			var name 		= oneData.name;
			var value 		= oneData.value;
			var oneColor	= rowColors[ i - 1 ];
			var circleStyle = ( name == "" ) ? "" : calCircleStyle( oneColor );
			
			oneRowHtml = oneRowHtml.replace(circlePattern, circleStyle);
			oneRowHtml = oneRowHtml.replace(namePattern, name);
			oneRowHtml = oneRowHtml.replace(valuePattern, value);			
		}

		return oneRowHtml;
	}

	// 构造所有数据的图形
	function buildDatasHtml( datas ) {
		var datasHtml = "";
		var data = padding( datas );
		// 向上取整
		var rowCount 	= data.length / _circlesPerRow;
		for(var rowIndex = 0; rowIndex < rowCount; rowIndex++){
			
			var rowDatas 	= [];
			var rowColors	= [];
			var startIndex 	= rowIndex * _circlesPerRow;
			for (var columnIndex = 0; columnIndex < _circlesPerRow; columnIndex++) {
				var index 	= startIndex + columnIndex;
				rowDatas.push( data[ index ] );
				rowColors.push( calColor( index ));
			}
			//alert( rowColors );
			datasHtml += buildRowDatasHtml( rowDatas, rowColors );
		}
		_chartHtml.datasHtml = datasHtml;
		return datasHtml;

	}	

	// 补充数据
    function padding( originData ) {
    	var emptyData = {
			name 	: "",
			value 	: ""
		};
		// var data = new Array( originData );	
        var data =  originData ;        	
		var dataCount 		= originData.length;
		// 向上取整	
		var rowCount 		= Math.ceil( dataCount / _circlesPerRow );
		var toAddDataCount 	= rowCount * _circlesPerRow - dataCount;
		
		for (var i = 0; i < toAddDataCount; i++) {
			data.push(emptyData);
		}		
		
		return data;
    }

    function buildTitleHtml( title ) {
    	var titleHtml =   
		 	"<div class='row circle-chart-wrapper'>"							+
	    		"<div class='col-xs-12 circle-chart-title'>"	+ title + "</div>" 	+
	    	"</div>";

	    _chartHtml.titleHtml = titleHtml;
	    return titleHtml;
    }

    function buildChartHtml( ) {
		var chartHtml = _chartHtml.titleHtml + _chartHtml.datasHtml;
		return chartHtml;
    }
    function repaint() {
    	_chart.html( buildChartHtml( ) );
    }

    function buildChart( divId ) {
    	_chart = $( "#" + divId );
    }
	this.draw = function() {
		/*var chart = $( "#" + _divId );*/
		_chart.removeClass("height500px");
		repaint();
	};
	this.refresh	= function() {
		repaint();
	};


	this.setDivId = function( divId ) {
		_divId = divId;		
	};
	this.getDivId = function() {
		return _divId;
	};		

	this.setData = function( data ) {		
		_data = data;
		buildDatasHtml( data )		
	};
	this.getData = function() {
		return _data;
	};	

	this.setTitle = function( title ) {
		_title = title;
		buildTitleHtml( title );
	};
	this.getTitle = function() {
		return _title;
	};
		

	// Constructor Code.
	this.setDivId( divId );
	buildChart( divId );
	/*this.setTitle( title );
	this.setData( data );*/
}
	