  var swiper = new Swiper('.swiper-container', {
	   effect: 'slide',
	   clickable: true,
        navigation: {
           nextEl: '.downarrow',
           prevEl: '.uparrow',
         },
		  breakpoints: {
         // when window width is >= 320px
          640: {
              slidesPerView: 1.1,
             spaceBetween: 0,
			 direction: 'horizontal'
           },
           768: {
             slidesPerView: 1.1,
             spaceBetween: 0,
			 direction: 'horizontal'
           },
           992: {
            slidesPerView: 1,
            spaceBetween: 0,
			direction: 'vertical'
           }
         }
    });