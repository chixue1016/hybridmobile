var loginView, failureSummaryView, failureDetailView, 
	failureController;



function loaded() {	
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
