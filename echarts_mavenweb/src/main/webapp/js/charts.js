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
					radius : [0, 90],						
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



