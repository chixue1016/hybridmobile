// data : [{"value":335,"name":"A"},{"value":679,"name":"B"},{"value":1548,"name":"C"}]

function Chart(divId, title, data) {
	var _title;
	var _data;
	var chartOption;
	var myChart = echarts.init(document.getElementById(divId));	

	// Í¼ÐÎ²ÎÊýÅäÖÃ
	function initOption() {
		var type = 'pie';
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
					name : 'Src',
					type : type,
					selectedMode: 'single', 
					radius : [0, 70],						
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
	}
	

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


