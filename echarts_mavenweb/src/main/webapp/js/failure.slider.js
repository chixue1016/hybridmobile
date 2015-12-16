
function FailureSlider() {
	var _loginSlider	= 0;
	var _summarySlider	= 1;
	var _detailSlider	= 2;
	var _sliderSpeed	= 100; // ms

	var _mySwiper 		= new Swiper( '.swiper-container', {
	    loop: false,
		autoplay: false,
	});

	this.toDetail		= function() {
		_mySwiper.slideTo( _loginSlider, _sliderSpeed, false);
	};
	
	this.toSummary		= function() {
		_mySwiper.slideTo( _summarySlider, _sliderSpeed, false);
	};

	this.toDetail		= function() {
		_mySwiper.slideTo( _detailSlider, _sliderSpeed, false);
	};
}