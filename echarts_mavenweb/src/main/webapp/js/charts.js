// data : [{"value":335,"name":"A"},{"value":679,"name":"B"},{"value":1548,"name":"C"}]

function PieChart(divId, title, data) {
	var _title;
	var _data;
	var _type = 'pie';
	var chartOption;
	var myChart = echarts.init(document.getElementById(divId));	

	// Í¼ÐÎ²ÎÊýÅäÖÃ
	function initOption() {		
		chartOption = {
			title : {
                text : _title
            },

			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
		
			series : [
				{					
					type : _type,
					selectedMode: 'single', 
					radius : '75%',						
					data : _data
				}						
			]
		};
	}

	var repaint = function() {
		myChart.setOption(chartOption);
	}

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
		

	this.draw = function() {		
	    // Îªecharts¶ÔÏó¼ÓÔØÊý¾Ý 
	    repaint(); 
	};	

	// Constructor Code.
	this.setTitle(title);
	this.setData(data);
	initOption();
}

/*  isVectial : wheter the yAxis is value type?
	          true stands for the yAxis is Value type.
	data : {"name" : value},...

*/
function BarChart(divId, title, data, isVertical) {
	var _title;
	var _data;
	var _categories = [];
	var _values = [];
	var _isVertical;	
	var _xAxis, _yAxis;

	var _type = 'bar';
	var chartOption;
	var myChart = echarts.init(document.getElementById(divId));	

	// Í¼ÐÎ²ÎÊýÅäÖÃ
	function initOption() {	
		buildAxis();		

		chartOption = {
			title : {
                text : _title
            },

			tooltip : {
				trigger: 'axis',				
			},		
			
			xAxis : _xAxis,
            yAxis : _yAxis,
            series : [
                {
                    type : _type,
                    data : _values,
                    itemStyle : {
                        normal: {
                            borderRadius: 5,
                            label : {
                                show : true,
                                textStyle : {
                                    fontSize : '20',
                                    fontFamily : '微软雅黑',
                                    fontWeight : 'bold'
                                }
                            }
                        }
                    },                        
                    
                }
            ]                
		};
	}

	function buildAxis() {
		var valueType 		= [{ type : 'value' }];
		var categoryType 	= [{
                type : 'category',
                data : _categories
        }];

		if (_isVertical) {
			_xAxis = categoryType;
            _yAxis = valueType;            
		} else {
			_xAxis = valueType;
			_yAxis = categoryType;                     
		}
	} 

	function dataFormat() {
		if (_data == null) {
			return;
		}

		var length = _data.length;			
		for (var i = 0; i < length; i++)
		{	
			var item = _data[i].name;
			_categories[i] = item;
			var value = _data[i].value;
			_values[i] = value;						
		} 		
	}

	function repaint() {
		myChart.setOption(chartOption);
	}

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
		

	this.draw = function() {		
	    // Îªecharts¶ÔÏó¼ÓÔØÊý¾Ý 
	    repaint(); 
	};	

	// Constructor Code.
	this.setTitle(title);
	this.setData(data);
	this.setVertical(isVertical);
	dataFormat();
	initOption();
}

function CircleChart(divId, title, data) {
	var _title;
	var _data;
	var _serieDatas = [];

	var _type = 'pie';
	var chartOption;
	var myChart = echarts.init(document.getElementById(divId));	

	function dataFormat() {
		if (_data == null) {
			return;
		}

		var length 	= _data.length;
		var sum		= 0;
		for (var i = 0; i < length; i++)
		{				
			var value = _data[i].value;
			sum += value;						
		}

		for (var i = 0; i < length; i++)
		{	
			var value = _data[i].value;
			var other = { name : 'other', value : sum - value };
			_serieDatas[i] = [ data[i], other ];						
		}

		alert( JSON.stringify( _serieDatas ) ); 		
	}

	var labelTop = {
    	normal : {
        	label : {
            	show : true,
            	position : 'center',
            	formatter : '{b}',
            	textStyle: {
            		color	 : '#000000',
            		fontSize : 15,
                	baseline : 'bottom'
            	}
        	},
        	labelLine : {
            	show : false
        	}
    	}
	};
	var labelFromatter = {
    	normal : {
        	label : {
            	formatter : function (params){
                	return 100 - params.value + '%'
            	},
            	textStyle: {
                	baseline : 'top'
            	}
        	}
    	},
	};

	var labelBottom = {
    	normal : {
        	color: '#ccc',
        	label : {
            	show : true,
            	position : 'center'
        	},
        	labelLine : {
            	show : false
        	}
    	},
    	emphasis: {
        	color: 'rgba(233,43,22,0)'
    	}
	};

	var width = window.screen.width;
	alert(width);
	var outerRadius = width * 0.12;
	var innerRadius	= outerRadius * 0.5;
	var radius = [ innerRadius, outerRadius ];
	alert(radius);
	var centers = [ '20%', '50%', '80%' ];
	
	function initOption() {	
		chartOption = {    
    		title : {
        		text: 'The App World',     
        		x: 'center'
    		},
    		color	:  [ 
    			'#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed', 
    			'#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0', 
    			'#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700', 
    			'#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0' 
			],

    		series : [
        		{
            		type : 'pie',
            		center : [ centers[0], '30%'],
            		radius : radius,
            		x: '0%', // for funnel
            		itemStyle : labelFromatter,
            		data : _serieDatas[0]
        		},
        		{
            		type : 'pie',
            		center : [ centers[1], '30%'],
            		radius : radius,
            		x:'20%', // for funnel
            		itemStyle : labelFromatter,
            		data : _serieDatas[1]		
        		},
        		{
            		type : 'pie',
            		center : [ centers[2], '30%'],
            		radius : radius,
            		x: '0%', // for funnel
            		itemStyle : labelFromatter,
            		data : [
                		{name:'other', value:46, itemStyle : labelBottom},
                		{name:'GoogleMaps', value:54,itemStyle : labelTop}
            		]
        		},        
    		]
		};
	}

	function repaint() {
		myChart.setOption(chartOption);
	}

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

	this.draw = function() {		
	    // Îªecharts¶ÔÏó¼ÓÔØÊý¾Ý 
	    repaint(); 
	};	

	// Constructor Code.
	this.setTitle(title);
	this.setData(data);
	dataFormat();
	initOption();
}

