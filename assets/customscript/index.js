var k = 0;
$(window).scroll(function() {
    //Counter
    var oTop = $('.counter-identifier').offset().top - window.innerHeight;
    if (k == 0 && $(window).scrollTop() > oTop) {
        $('.counter-identifier').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 5000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        k = 1;
    }
    //side menu highlight
    /*  $('.target').each(function() {
            if($(window).scrollTop() >= ($(this).offset().top -400)) {
                var id = $(this).attr('id');
				if(id == "section2"){
				   if($(window).scrollTop() >= ($(this).offset().top-300)) {
				       $('.sidemenu-mainrow li').removeClass('sidemenu-active');
                $('.sidemenu-mainrow #sidemenu-'+id ).addClass('sidemenu-active');
				   }
				}else{
                $('.sidemenu-mainrow li').removeClass('sidemenu-active');
                $('.sidemenu-mainrow #sidemenu-'+id ).addClass('sidemenu-active');
				}
            }
            });*/
});


function partnerMore() {
    window.location.href = 'partner.html';
}

function businessMore() {
    window.location.href = 'business.html';
    window.location.href = 'business.html';
}

function consumerMore() {
    window.location.href = 'consumer.html';
}

function initiateSwiper() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.sec3-arrowright',
            prevEl: '.sec3-arrowleft',
        },
        breakpoints: {
            // when window width is >= 320px
            640: {
                slidesPerView: 1.1,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 1.1,
                spaceBetween: 10
            },
            992: {
                slidesPerView: 2.1,
                spaceBetween: 10
            }
        }
    });
};
$(document).ready(function() {
    $('body').css("overflow-x", "hidden !important");
    setTimeout(function() {
        $(".mobi-mbri-arrow-next").click();
    }, 3000);
    $("#header").load("header.html");
    $("#footer").load("footer.html");
	//initiateSwiper();
});
