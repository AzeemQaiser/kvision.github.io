
 $(document).ready(function() {
     AOS.init({
         duration: 3000,
         once: true,
     });
 });

 document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector("body").style.visibility = "hidden"; 
        document.querySelector(".loader-wrapper").style.visibility = "visible"; 
    } else { 
        document.querySelector(".loader-wrapper").style.display = "none"; 
        document.querySelector("body").style.visibility = "visible"; 
		 $(".loader-wrapper").fadeOut("slow");
    } 
}; 