var ip = "10.1.73.54";
var port = "8080";
var projectId = "echarts_mavenweb";
var serverUrl = "http://" + ip + ":" + port + "/" + projectId;

$(document).bind( "mobileinit", function() {
	$.support.cors = true;
	$.mobile.allowCrossDomainPages = true;
	$.mobile.pushStateEnabled = false; 
});

$(document).ready(function() {
	function ajaxtest() {		
		var username = 'zcc21';//$('#name').text();	
		$.get({					
			//url : projectId + "/signin.do",
			url : "http://10.1.73.54:8088/echarts_mavenweb/signin.do",
			data : "name=" + username,					

			success	: function(data) {
				alert(data);
				$("#welcome").html(data);				
			}
		});
	}

	function helloCallback(data) {
		alert(data.result);
	}

	$("#signUp").click(function() {
		var username = 'zcc21';//$('#name').text();	
		$.ajax({	
			type : "GET",		
			url : serverUrl + "/signin.jsonp",
			// url : serverUrl + "/signin.do?name=zcc21&callback=helloCallback",
			//                                           %jsonp%=%jsonpCallback%
			data : "name=" + username,					

			dataType : 'jsonp',
			//jsonp : 'callback', // 默认为：callback
			//jsonpCallback : 'helloCallback',  // 不配置，jQuery会随机分配一个名称
			success	: function(jsonArray) {
				var data = jsonArray[0];
				$("#welcome").html(data.name);				
			}
		});
	});	

	$("#signIn").click(signIn);
	function signIn() {
		alert("Sign in!");
		var username = 'zcc21';//$('#name').text();	
		$.ajax({	
			type : "GET",		
			//url : projectId + "/signin.do",
			url : "http://127.0.0.1:8088/echarts_mavenweb/signin.do",
			data : "name=" + username,	
			dataType : "jsonp",
			jsonpCallback : "jsonpCallback",				

			success	: function(data) {
				alert(data);
				$("#welcome").html(data);				
			}
		});
	}	

	$("#signInByJson").click(function() {
		var username = $('#name').text();		
		$.ajax({
			type : "POST",
			url : projectId + "/signinbyjosn.do",
			data : JSON.stringify({"id" : "1", "name" : username}),
			//data : "{\"id\" : \"1\", \"name\" : \"zcc21\"}",
			contentType : "application/json",

			dataType : 'json',
			success	: function(data) {
				$("#welcome").html(JSON.stringify(data));
				displayedData = data;
			}
		});		
		
		//loadData();
	});	

	$("#saveData").click(function() {		
		$.ajax({
			type : "POST",
			url : projectId + "/savedata.do",
			
		});	
	});


	$("#loadData").click(function() {
		//var data = $.ajax({url:"./data.txt", async:false}).responseText;
		$.ajax({
			type : "POST",
			url : projectId + "/loaddata.do",
			data : JSON.stringify({"id" : "1", "name" : "zcc21"}),
			data : "{\"id\" : \"1\", \"name\" : \"zcc21\"}",
			contentType : "application/json",

			dataType : 'json',
			success	: function(data) {
				$("#data").html(JSON.stringify(data));
				displayedData = data;
			}
		});		
		
		//loadData();
	});

	$("#draw").click(function() {
		draw();
	});

	$("#selectA").click(function() {
		select('A');
	});

	$("#selectB").click(function() {
		select('B');
	});

	$("#selectC").click(function() {
		select('C');
	});
});


