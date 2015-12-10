
function FailureMessage( summaryType, startMonth, endMonth, selectedSummaryData ) {
	var _cachedTag = FailureMessage.getCacheTag();

	var _summaryType;
	var _startMonth, _endMonth;
	var _selectedSummaryData;

	var stringify = function() {
		var jsonMessage = {		
			"summaryType"			: _summaryType,
			"startMonth"	: _startMonth,
			"endMonth"		: _endMonth,				
			"selectedSummaryData"	: _selectedSummaryData,			
		}

		return JSON.stringify(jsonMessage);
	};

	this.send	= function() {
		var stringMessage = stringify();
		Cache.save( _cachedTag, stringMessage );
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

	// Constructor code.
	this.setSummaryType( summaryType );
	this.setStartMonth( startMonth );
	this.setEndMonth( endMonth );
	this.setSelectedSummaryData( selectedSummaryData );
}

FailureMessage.getCacheTag = function() {
	return "failureMessage";
}

FailureMessage.receive = function() {
	var cachedTag 		= FailureMessage.getCacheTag();
	var cachedMessage 	= JSON.parse(Cache.get( cachedTag ));

	var failureMessage;
	if ( cachedMessage != null ) {		
		failureMessage = new FailureMessage();

		failureMessage.setSummaryType( cachedMessage[ "summaryType" ] );
		failureMessage.setStartMonth( cachedMessage[ "startMonth" ] );
		failureMessage.setEndMonth ( cachedMessage["endMonth"] );
		failureMessage.setSelectedSummaryData( cachedMessage["selectedSummaryData"] );
	}

	return failureMessage;
}