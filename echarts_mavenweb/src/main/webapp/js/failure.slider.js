
function FailureSlider() {
	var _loginSlider	= 0;
	var _summarySlider	= 1;
	var _detailSlider	= 2;
	var _sliderSpeed	= 100; // ms

	var _mySwiper;

	function init() {
		_mySwiper 		= new Swiper( '.swiper-container', {
			noSwiping 	: true, // 如果slide上增加了类swiper-no-swiping，则无法滑动。		
		    autoHeight	: true,
		    loop		: false,
			autoplay	: false,

			onInit 		: function( swiper ) {
				var screenHeight = $(window).height();
				//swiper.container[0].style.height = swiper.slides[swiper.activeIndex].offsetHeight + 'px';
		  		swiper.container[0].style.height = 
		  			Math.max( screenHeight, swiper.slides[swiper.activeIndex].offsetHeight ) + 'px';
           		/*var sliderHeight = swiper.slides[swiper.activeIndex].offsetHeight;
		  		swiper.slides[swiper.activeIndex].style.height = 
		  			Math.max( screenHeight, sliderHeight ) + 'px';*/
           	},

			onSlideChangeEnd	: function( swiper ) {
				var screenHeight = $(window).height();
				var activeIndex = swiper.activeIndex;
				var sliderHeight = swiper.slides[ activeIndex ].offsetHeight;
				swiper.container[0].style.height = 
					(( activeIndex == _loginSlider ) ? sliderHeight : Math.max( screenHeight, sliderHeight )) + 'px';
    
            },
            /*onTouchStart: function( swiper ) {
            	alert("swiper touch start!");
            }*/			
		});	
		
	}

	this.toLogin		= function() {
		_mySwiper.slideTo( _loginSlider, _sliderSpeed, true); // true 代表触发 onSliderChange 回调函数 
	};

	this.toSummary		= function() {
		_mySwiper.slideTo( _summarySlider, _sliderSpeed, true);
	};

	this.toDetail		= function() {
		_mySwiper.slideTo( _detailSlider, _sliderSpeed, true);
	};

	// Constructor Code.
	init();
}