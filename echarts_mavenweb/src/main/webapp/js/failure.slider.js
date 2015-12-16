
function FailureSlider() {
	var _summarySlider	= 0;
	var _detailSlider	= 1;
	var _sliderSpeed	= 100; // ms

	var _mySwiper 		= new Swiper( '.swiper-container', {
	    loop: false,
		autoplay: false,
	});

	this.toSummary		= function() {
		_mySwiper.slideTo( _summarySlider, _sliderSpeed, false);
	};

	this.toDetail		= function() {
		_mySwiper.slideTo( _detailSlider, _sliderSpeed, false);
	};
}