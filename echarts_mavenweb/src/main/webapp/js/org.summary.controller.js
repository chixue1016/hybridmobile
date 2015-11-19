
function FailureOrgSummaryController() {
	var failureOrgSummaryModel = new FailureOrgSummaryModel();
	
	this.getAll = function() {
		return failureOrgSummaryModel.getAll();
	}

	this.onSelect = function(orgId) {
		return failureOrgSummaryModel.getBy(orgId);
	}


}

var failureOrgSummaryController = new FailureOrgSummaryController();