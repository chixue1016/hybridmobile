
function FailureSnapshot() {
	var _cachedTag = "failureSnapshot";
	var _summaryType;
	var _startMonth, _endMonth;
	var _selectedSummaryData;
	var _summaryDatas;	

	var init	= function() {
		var cachedSnapshot 	= JSON.parse(Cache.get( _cachedTag ));
		if (cachedSnapshot != null) {
			_summaryType 	= cachedSnapshot["summaryType"];
			_startMonth 	= cachedSnapshot["startMonth"];
			_endMonth 		= cachedSnapshot["endMonth"];
			_selectedSummaryData	= cachedSnapshot["selectedSummaryData"];
			_summaryDatas	= cachedSnapshot["summaryDatas"];
		}
	};

	var stringify = function() {
		var jsonSnapshot = {
			"summaryType"	: _summaryType,
			"startMonth"	: _startMonth,
			"endMonth"		: _endMonth,			
			"selectedSummaryData"	: _selectedSummaryData,
			"summaryDatas"	: _summaryDatas,
		}

		return JSON.stringify(jsonSnapshot);
	};

	this.setSummaryType 	= function( summaryType ) {
		_summaryType 	= summaryType;
	};
	this.getSummaryType 	= function() {
		return _summaryType;
	};

	this.setStartMonth 		= function( startMonth ) {
		_startMonth		= startMonth;
	};
	this.getStartMonth 		= function(  ) {
		return _startMonth;
	};

	this.setEndMonth 		= function( endMonth ) {
		_endMonth		= endMonth;
	};
	this.getEndMonth 		= function() {
		return _endMonth;
	};	

	this.setSelectedSummaryData = function( selectedSummaryData ) {
		_selectedSummaryData	= selectedSummaryData;
	};
	this.getSelectedSummaryData = function() {
		return _selectedSummaryData;
	};

	this.setSummaryDatas 	= function( summaryDatas ) {
		_summaryDatas 	= summaryDatas;
	};
	this.getSummaryDatas 	= function() {
		return _summaryDatas;
	};

	this.save	= function() {
		var stringSnapshot = stringify();
		Cache.save( _cachedTag, stringSnapshot );
	};

	// Constructor code;
	init();
}

