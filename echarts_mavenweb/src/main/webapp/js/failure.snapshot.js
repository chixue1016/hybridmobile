
function FailureSnapshot() {
	var _cachedTag = FailureSnapshot.getCacheTag();
	var _firstLoaded;
	var _summaryType;
	var _startMonth, _endMonth;
	var _summaryDatas;	

	var stringify = function() {
		var jsonSnapshot = {
			"firstLoaded"	: _firstLoaded,
			"summaryType"	: _summaryType,
			"startMonth"	: _startMonth,
			"endMonth"		: _endMonth,
			"summaryDatas"	: _summaryDatas,
		}

		return JSON.stringify(jsonSnapshot);
	};

	this.save	= function() {
		var stringSnapshot = stringify();
		Cache.save( _cachedTag, stringSnapshot );
	};

	this.setFirstLoaded 	= function( firstLoaded ) {
		_firstLoaded 	= firstLoaded;
	};
	this.isFirstLoaded 	= function() {
		return ( _firstLoaded == null || _firstLoaded == "undefined" || _firstLoaded == true);
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

	this.setSummaryDatas 	= function( summaryDatas ) {
		_summaryDatas 	= summaryDatas;
	};
	this.getSummaryDatas 	= function() {
		return _summaryDatas;
	};

}

FailureSnapshot.getCacheTag = function() {
	return "failureSnapshot";
}

FailureSnapshot.restore = function() {
	var cachedTag 		= FailureSnapshot.getCacheTag();
	var cachedSnapshot 	= JSON.parse(Cache.get( cachedTag ));
	var FailureSnapshot = new FailureSnapshot();
	if (cachedSnapshot != null) {
		failureSnapshot.setFirstLoaded( cachedSnapshot[ "firstLoaded" ] );
		failureSnapshot.setSummaryType( cachedSnapshot[ "summaryType" ] );
		failureSnapshot.setStartMonth( cachedSnapshot[ "startMonth" ] );
		failureSnapshot.setEndMonth ( cachedSnapshot["endMonth"] );
		failureSnapshot.setSummaryDatas ( cachedSnapshot["summaryDatas"] );
	}
	return failureSnapshot;
}

