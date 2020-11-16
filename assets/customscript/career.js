var swiper = new Swiper('.swiper-container', {
	   effect: 'flip',
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
$(document).ready(function() {
    $('body').css("overflow-x", "hidden !important");
   
    $("#header").load("header.html");
    $("#footer").load("footer.html");
	//initiateSwiper();
});