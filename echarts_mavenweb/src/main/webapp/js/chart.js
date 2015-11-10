require.config({
    paths: {
        echarts: './js'
    }
});

var currentSelected;
var currentSelectedIndex;
var displayedData;
var jsonData = "[{\"value\":335,\"name\":\"A\"},{\"value\":679,\"name\":\"B\"},{\"value\":1548,\"name\":\"C\"}]";

var myChart;
var option;

// Ê¹ÓÃ
require(
    [
        'echarts',
        'echarts/chart/pie'
	],
    function (ec) {
        // »ùÓÚ×¼±¸ºÃµÄdom£¬³õÊ¼»¯echartsÍ¼±í
        myChart = ec.init(document.getElementById('main'));
    }
);

// Í¼ÐÎ²ÎÊýÅäÖÃ
function initOption() {
	option = {
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			orient : 'vectical',
			x : 'left',
			data:['A','B','C']
		},
		toolbox: {
			show : true,
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				magicType : {
					show: true, 
					type: ['pie', 'funnel']
				},
			restore : {show: true},
			saveAsImage : {show: true}
			}
		},
		calculable : false,
		series : [
			{
				name:'Src',
				type:'pie',
				selectedMode: 'single',
				radius : [0, 70],						
				data : displayedData
			}						
		]
	};
}

function loadData() {
	console.log(jsonData);
	displayedData = JSON.parse(jsonData);		
}

function draw() {			
	initOption();
    // Îªecharts¶ÔÏó¼ÓÔØÊý¾Ý 
    repaint(); 
}

// ÉèÖÃµ±Ç°Ñ¡ÖÐµÄÊý¾Ý
function select(item) {
	var selectedItem = item;
	if (selectedItem == null || selectedItem == currentSelected)
	{
		return;
	}
	
	if (currentSelected != null)
	{
		displayedData[currentSelectedIndex].selected = false;
	}

	var length = displayedData.length;			
	for (var i = 0; i < length; i++)
	{	
		var item = displayedData[i].name;
		if (item == selectedItem)
		{
			displayedData[i].selected = true;
			currentSelected = selectedItem;
			currentSelectedIndex = i;
		} 
		
	}
	repaint();
}

function repaint() {
	myChart.setOption(option);
}
