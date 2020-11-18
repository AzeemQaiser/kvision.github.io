 var swiper = new Swiper('.swiper1', {
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
		
				function sendmail() {
			alert("Function is under development")
		}
$(document).ready(function() {
    $('body').css("overflow-x", "hidden !important");
  
    $("#header").load("header.html");
    $("#footer").load("footer.html");
	//initiateSwiper();
});