$(document).ready(function() {
    $('body').css("overflow-x", "hidden !important");
  
    $("#header").load("header.html");
    $("#footer").load("footer.html");
	//initiateSwiper();
});
   var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      breakpoints: {
         // when window width is >= 320px
          640: {
              slidesPerView: 1.1,
             spaceBetween: 0
           },
           768: {
             slidesPerView: 1.1,
             spaceBetween: 0
           },
           992: {
            slidesPerView: 7,
            spaceBetween: 0
           }
         }
    });