  var swiper = new Swiper('.logo-carousal-container', {
			slidesPerView: 1,
			spaceBetween: 10,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.usecasearrow-right',
				prevEl: '.usecasearrow-left',
			},
			breakpoints: {
				// when window width is >= 320px
				640: {
					slidesPerView: 3,
					spaceBetween: 10
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 10
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 10
				}
			}
		});
		$(document).ready(function() {
    $('body').css("overflow-x", "hidden !important");
  
    $("#header").load("header.html");
    $("#footer").load("footer.html");
	//initiateSwiper();
});