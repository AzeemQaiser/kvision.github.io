
 $(document).ready(function() {
     AOS.init({
         duration: 3000,
         once: true,
     });
	  $(window).on("load", function() {
     $(".loader-wrapper").fadeOut("slow");
 });
 });