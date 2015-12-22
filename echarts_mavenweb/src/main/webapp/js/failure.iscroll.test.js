var myScroll, mySwiper,
	pullDownEl, pullDownOffset,
	pullUpEl, pullUpOffset,
	pullThreshold = 5, // 上拉或下拉动作，触发加载数据时的偏移值
	failureSummaryView,
	loginView,
	failureController;



function loaded() {	
	loginView = new LoginView();
	failureSummaryView = new FailureSummaryView();

	failureController = new FailureController();
	failureController.frontToSummary();
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

document.addEventListener('DOMContentLoaded', loaded, false);
