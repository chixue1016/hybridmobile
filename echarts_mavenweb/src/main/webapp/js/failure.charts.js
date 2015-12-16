// data : [{"value":335,"name":"A"},{"value":679,"name":"B"},{"value":1548,"name":"C"}]
var _font = '微软雅黑';
var titleFontSize = 30;

/*function PieChart(divId, title, data) {*/
function PieChart( ) {
	var _divId;
	var _title;
	var _data;

	var _type = 'pie';

	/***************************************************************/
	/************************* title  ******************************/
	/***************************************************************/
	function buildTitle( ) {
    	var title = {
	        text 		: _title,	      
	        textStyle 	: {
	           	fontSize 	: titleFontSize,
	            fontFamily 	: _font,
	            fontWeight 	: 'bold'
	        }
	    };

	    return title;
    }

    /***************************************************************/
	/************************* tooltip  ****************************/
	/***************************************************************/
	function buildTooltip( ) {
    	var tooltip = {
			trigger		: 'item',
			formatter	: "{a} <br/>{b} : {c} ({d}%)",
			textStyle 	: {
	           	fontSize 	: '20',
	            fontFamily 	: _font,
	            fontWeight 	: 'bold'
	        },
		};

	    return tooltip;
    }

    /***************************************************************/
	/************************* serie  ******************************/
	/***************************************************************/
	var serieItemStyle = {
        normal	: {                                 
            label : {
                show 		: true,
                textStyle 	: {
                   	fontSize 	: '20',
                    fontFamily 	: _font,
                    fontWeight 	: 'bold'
                }
            },	            
        }
    };
	
    function buildSeries( data ) {    	
	    var series = [
			{					
				type 		: _type,				 
				radius 		: '75%',						
				data 		: data,
				selectedMode: 'single',
				itemStyle 	: serieItemStyle,
			}						
		];

        return series;  
    }	

	/***************************************************************/
	/************************* option  *****************************/
	/***************************************************************/
	function buildOption() {
		var title 	= buildTitle( );
		var tooltip	= buildTooltip( );
		var series 	= buildSeries( _data );	

		var chartOption = {
			title 	: buildTitle(),
			tooltip : buildTooltip(),		
			series 	: buildSeries( _data ),
		};

		return chartOption;
	}

	this.draw = function() {		
	    // Îªecharts¶ÔÏó¼ÓÔØÊý¾Ý 
	    repaint(); 
	};

	var repaint = function() {
		var myChart = echarts.init(document.getElementById( _divId ));	
		myChart.setOption( buildOption() );
	}

	/***************************************************************/
	/*********************** setter/getter  ************************/
	/***************************************************************/
	this.setDivId = function( divId ) {
		_divId = divId;
	};
	this.getDivId = function() {
		return _divId;
	};

	this.setData = function(data) {		
		_data = data;		
	};
	this.getData = function() {
		return _data;
	};
	

	this.setTitle = function(title) {
		_title = title;
	};
	this.getTitle = function() {
		return _title;
	};
		

		

	/*// Constructor Code.
	this.setTitle(title);
	this.setData(data);
	initOption();*/
}

/*  isVectial : wheter the yAxis is value type?
	          true stands for the yAxis is Value type.
	data : {"name" : value},...

*/
/*function BarChart(divId, title, data, isVertical) {*/
function BarChart( ) {
	var _divId;
	var _title;
	var _data;
	var _isVertical;

	
	var _type = 'bar';	

	/***************************************************************/
	/************************* title  ******************************/
	/***************************************************************/
    function buildTitle( ) {
    	var title = {
	        text 		: _title,	       
	        textStyle 	: {
	           	fontSize 	: titleFontSize,
	            fontFamily 	: _font,
	            fontWeight 	: 'bold'
	        }
	    };

	    return title;
    }

	

	/***************************************************************/
	/************************* axis  *******************************/
	/***************************************************************/
	function buildAxises( data ) { 
		var axisLabel = {
	       	textStyle	: {
	            fontFamily	: _font,
	            fontSize	: '20',              
	      	}
		};

		var valueType 		= [
			{ 
				type 		: 'value',
				axisLabel	: axisLabel
			}
		];

		var categories 	= namesOf( data );
		var categoryType 	= [
			{
	            type 		: 'category',            
	            axisLabel	: axisLabel,
	            data 		: categories
	    	}
	    ];		

        var xAxis, yAxis;
		if ( _isVertical ) {
			xAxis = categoryType;
            yAxis = valueType;            
		} else {
			xAxis = valueType;
			yAxis = categoryType;                     
		}

		//alert(JSON.stringify(xAxis));

		return [ xAxis, yAxis ];
	}

	function namesOf( data ) {
		if ( data == null ) {
			return;
		}

		var names 	= [];
		var length 	= data.length;			
		for (var i = 0; i < length; i++)
		{	
			var item = _data[i].name;
			names[i] = item;						
		}
		return names; 		
	}

	/***************************************************************/
	/************************* serie  ******************************/
	/***************************************************************/	
    function buildSeries( data ) {
    	var serieItemStyle = {
	        normal	: {
	            borderRadius: 5,
	            borderWidth	: 20,
	            color 		: serieItemColor,            
	            label 		: {
	                show 		: true,
	                textStyle 	: {
	                   	fontSize 	: '20',
	                    fontFamily 	: _font,
	                    fontWeight 	: 'bold'
	                }
	            },	            
	        }
	    };

	    var values = valuesOf( data );
	    var series = [
            {
                type 		: _type,
                data 		: values,
                itemStyle 	: serieItemStyle  
                
            }
        ];

        return series;  
    }

    function serieItemColor( itemIndex ) {
		var maxColor 		= parseInt('FFFFFF', 16);
		var decRandomColor 	= parseInt( Math.random() * maxColor );
		// 左边补0，然后取后6位
		var hexRandomColor 	= ( "00000" + decRandomColor.toString(16)).slice( -6 );
		var hexColor 		= "#" +  hexRandomColor;

		return hexColor;
	}	
	
	function valuesOf( data ) {
		if ( data == null ) {
			return;
		}

		var values = [];
		var length = data.length;			
		for (var i = 0; i < length; i++)
		{			
			var value = data[i].value;
			values[i] = value;						
		}

		return values; 		
	}

    /***************************************************************/
	/************************* option  *****************************/
	/***************************************************************/
	function buildOption() {
		var title 	= buildTitle( _title );
		var axises 	= buildAxises(  _data  );	
		var series  = buildSeries(  _data  );				

		var chartOption = {
			title : title,
			
			xAxis : axises[ 0 ],
            yAxis : axises[ 1 ],          

            series : series,            
		};

		return chartOption;
	}

	this.draw = function() {		
	    // Îªecharts¶ÔÏó¼ÓÔØÊý¾Ý 
	    repaint(); 
	};	
	

	function repaint() {
		var myChart = echarts.init( document.getElementById( _divId ) );
		myChart.setOption( buildOption() );
	}


	/***************************************************************/
	/*********************** setter/getter  ************************/
	/***************************************************************/
	this.setDivId = function( divId ) {
		_divId = divId;
	};
	this.getDivId = function() {
		return _divId;
	};

	this.setData = function(data) {		
		_data = data;		
	};
	this.getData = function() {
		return _data;
	};
	

	this.setTitle = function(title) {
		_title = title;
	};
	this.getTitle = function() {
		return _title;
	};

	this.setVertical = function(isVertical) {
		_isVertical = isVertical;
	};
	this.isVertical = function() {
		return _isVertical;
	};
		

	
	/*// Constructor Code.
	this.setDivId( divId );
	this.setTitle( title );
	this.setData( data );
	this.setVertical( isVertical );*/
}

function CirclesChart(divId, title, data) {
	var _divId;
	var _title;
	var _data;	
	
	var _usePercent		= false;	

	var _type 			= 'pie';
	var _topMarginRatio	= 0.5;
	// 圆圈图半径与正方体半边长的比例
	var _radiusRatio 	= 0.9;
	var _circlesPerRow 	= 3;	
	
	function calHalfWidth() {
		var screenWidth = window.screen.width;
		var halfWidth 		= screenWidth / _circlesPerRow / 2;
		if ( _usePercent ) {
			// 圆圈图所在正方体半边长的百分比
			halfWidth =  Math.floor( 100 / ( _circlesPerRow * 2) );
		}
		return halfWidth;		
	}

	function calRadius( halfWidth, radiusRatio ) {
		var innerRadius		= 0;
		var outerRadius 	= halfWidth * radiusRatio;		
		radius = [ innerRadius, outerRadius ];
		if ( _usePercent ) {
			radius = [ innerRadius, outerRadius + "%" ];
		}
				
		//alert( "radius: " + JSON.stringify( radius ));
		return radius;
	}
	

	// 在手机屏幕上x轴为纵向
	function centerFor( index, halfWidth, topMargin ) {
		var horizenIndex 	= Math.floor( index / _circlesPerRow );
		var verticalIndex	= index % _circlesPerRow;
		var verticalPosition 	= halfWidth * ( 2 * verticalIndex + 1);
		var horizenPosition  	= halfWidth * ( 2 * horizenIndex + 1) + topMargin;		
		
		// [ 纵向, 横向] --> [x, y]
		var center = [ verticalPosition, horizenPosition ];
		if ( _usePercent ) {
			center = [ x + "%", y + "%"];
		}
		//alert(" Circle #" + index + ": " + JSON.stringify( center ));
		return center;		 
	}

	function serieFor( index, halfWidth, radius, topMargin, data ) {
		var center = centerFor( index, halfWidth, topMargin );
		var serie = {
            type 	: _type,
            name	: "111",
            center 	: center,
            radius 	: radius,           
            itemStyle : labelFromatter,
            data 	: data
        };
        
        return serie;
	}

	function calSeries( halfWidth, radius, topMargin, seriesData ) {
		var series = [];
		var length 	= seriesData.length;		
		for (var i = 0; i < length; i++)
		{				
			series[i] = serieFor(i, halfWidth, radius, topMargin, seriesData[i]);						
		}

		return series;
	}

	function dataFormat() {
		if (_data == null) {
			return;
		}

		var itemStyle 	= dataItemStyle();		
		var seriesData = [];
		var length 		= _data.length;
		for (var i = 0; i < length; i++) {	
			var oneData = _data[i];
			oneData["itemStyle"] = itemStyle;
			//var other = { name : 'other', value : sum - value };
			seriesData[i] = [ oneData ];						
		}	

		return seriesData;		
	}

	function dataItemStyle() {
		var itemStyle = {
	    	normal : {
	        	label : {
	            	show : true,
	            	position : 'outer',
	            	formatter : '{b}',
	            	offsetCenter: [0, -80], 
	            	textStyle: {
	            		color	 : '#ff0000',
	            		fontSize : 15,
	                	baseline : 'bottom'
	            	}
	        	},
	        	labelLine : {
	            	show : false,
	            	length: 10
	        	}
	    	}
		};
		return itemStyle;
	}
	
	var labelFromatter = {
    	normal : {
        	label : {
            	formatter : function (params){
                	return params.name; 
            	},
            	textStyle: {
                	baseline : 'top'
            	}
        	}
    	},
	};
		
	
	function calTopMargin( halfWidth, topMarginRatio ) {
		var topMargin = halfWidth * topMarginRatio;		
		if ( _usePercent ) {
			topMargin += "%";
		}
		
		return topMargin;	
	}

	function initOption() {
		var halfWidth 	= calHalfWidth();
		var topMargin 	= calTopMargin( halfWidth, _topMarginRatio );
		var radius 		= calRadius( halfWidth, _radiusRatio );
		var seriesData 	= dataFormat( _data );
		var series 		= calSeries( halfWidth, radius, topMargin, seriesData );

		var chartOption = {    
    		title : {
        		text 	: _title,     
        		x 		: 'center'
    		},
    		color	:  [ 
    			'#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed', 
    			'#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0', 
    			'#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700', 
    			'#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0' 
			],

    		series : series
		};

		return chartOption
	}	

	function repaint() {
		var myChart = echarts.init(document.getElementById( _divId ));	
		myChart.setOption( initOption() );
	}
	this.draw = function() {		
	    // Îªecharts¶ÔÏó¼ÓÔØÊý¾Ý 
	    repaint(); 
	};

	this.setData = function( data ) {		
		_data = data;		
	};
	this.getData = function() {
		return _data;
	};	

	this.setTitle = function( title ) {
		_title = title;
	};
	this.getTitle = function() {
		return _title;
	};

	this.setDivId = function( divId ) {
		_divId = divId;
	};
	this.getDivId = function() {
		return _divId;
	};		

		

	// Constructor Code.
	this.setTitle( title );
	this.setData( data );
	this.setDivId( divId )
}

