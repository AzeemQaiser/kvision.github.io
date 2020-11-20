

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
		  var swiper = new Swiper('.testimonial-swiper', {
	   effect: 'flip',
        navigation: {
           nextEl: '.down',
           prevEl: '.up',
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
		function sendmail() {
			alert("Function is under development")
		}
$(document).ready(function() {
    $('body').css("overflow-x", "hidden !important");
  
    $("#header").load("header.html");
    $("#footer").load("footer.html");
	//initiateSwiper();
});
function launchModal(){
	$("#modaltriggerBtn").click();
}