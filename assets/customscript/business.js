

		function partnerMore() {
			window.location.href = 'partner.html';
		}
		var swiper = new Swiper('.usecaseswiper', {
			slidesPerView: 1,
			spaceBetween: 0,
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
					spaceBetween: 0
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 0
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 0
				}
			}
		});

		function sendmail() {
			alert("Function is under development")
		}
$(document).ready(function() {
    $('body').css("overflow-x", "hidden !important");
  
    $("#header").load("header.html");
    $("#footer").load("footer.html");
	//initiateSwiper();
});