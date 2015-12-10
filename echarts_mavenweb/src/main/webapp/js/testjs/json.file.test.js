$(document).ready(function() {	

	$("#test").click(function() {
		var path = "D:\\WebGitStores\\hybridmobile\\echarts_mavenweb\\src\\main\\webapp\\resource\\failureOrg_2000.json"
		$.getJSON( path, function(data) {
			alert(JSON.stringify(data));
		});

	});
});


