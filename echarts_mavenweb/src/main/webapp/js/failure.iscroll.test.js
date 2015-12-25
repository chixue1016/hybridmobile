var loginView, failureSummaryView, failureDetailView, 
	failureController;



function loaded() {	
	var datas = pseudoDetailDatasByTypeFor("failureOrg", "1", "故障类别3");
	loginView 			= new LoginView();
	failureSummaryView 	= new FailureSummaryView();
	failureDetailView	= new FailureDetailView();

	failureController 	= new FailureController();
	failureController.frontToSummary();
}

/*document.addEventListener('touchmove', 
	function (e) { 
		e.preventDefault(); 
	}, 
	false);*/

document.addEventListener('DOMContentLoaded', loaded, false);
