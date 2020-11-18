
 $(document).ready(function() {
     AOS.init({
         duration: 3000,
         once: true,
     });
	 setTimeout(function(){
	    document.querySelector(".loader-wrapper").style.display = "none"; 
        document.querySelector("body").style.visibility = "visible"; 
		 $(".loader-wrapper").fadeOut("slow");
		  $("html").getNiceScroll().remove();
	 $('html').niceScroll();
     $('.nicescroll-rails-vr').css('z-index','1000000');
	 $(".nicescroll-rails-hr").css("display", "none");
	 }, 3000);
 });

 document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector("body").style.visibility = "hidden"; 
        document.querySelector(".loader-wrapper").style.visibility = "visible"; 
		$("html").css("overflow-y",  "hidden");
    } else { 
        document.querySelector(".loader-wrapper").style.display = "none"; 
        document.querySelector("body").style.visibility = "visible"; 
		 $(".loader-wrapper").fadeOut("slow");
		 $("html").getNiceScroll().remove();
	 $('html').niceScroll();
     $('.nicescroll-rails-vr').css('z-index','1000000');
	 $(".nicescroll-rails-hr").css("display", "none");
	$('html,body').animate({ scrollTop: 0 }, 'slow');
    } 
}; 

$(document).ready(function(){
	 setTimeout(function(){
     $('html,body').animate({ scrollTop: 0 }, 'slow');
	 }, 1000);
});