  var swiper = new Swiper('.testimonialSwiper', {
        navigation: {
           nextEl: '.sec3-arrowright',
           prevEl: '.sec3-arrowleft',
         },
		  breakpoints: {
         // when window width is >= 320px
          640: {
              slidesPerView: 1,
             spaceBetween: 0,
			 direction: 'horizontal'
           },
           768: {
             slidesPerView: 1,
             spaceBetween: 30,
			 direction: 'horizontal'
           },
           992: {
            slidesPerView: 1,
            spaceBetween: 0,
			direction: 'horizontal'
           }
         }
    });