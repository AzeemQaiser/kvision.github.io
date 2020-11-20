$(document).ready(function() {
	  AOS.init({
         duration: 3000,
         once: true,
     });
    $('body').css("overflow-x", "hidden !important");
    $("#header").load("header.html");
    $("#footer").load("footer.html");
	//initiateSwiper();
	
	 setTimeout(function(){
	    document.querySelector(".loader-wrapper").style.display = "none"; 
        document.querySelector("body").style.visibility = "visible"; 
		 $(".loader-wrapper").fadeOut("slow");
		 $("html").css("overflow-y",  "auto");
		/*  $("html").getNiceScroll().remove();
	 $('html').niceScroll();
     $('.nicescroll-rails-vr').css('z-index','1000000');
	 $(".nicescroll-rails-hr").css("display", "none"); */
	 }, 500); 
});