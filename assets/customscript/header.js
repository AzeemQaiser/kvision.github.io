function solutionClick(){
  var disp = $(".dropdown-content").css('display');
 if(disp == "none"){
        $(".dropdown-content").css('display', 'block');
		$("#solution").addClass('activeMenu');
  }else{
      $(".dropdown-content").css('display', 'none');
	  $("#solution").removeClass('activeMenu');
  }

}

 $(document).on('click','.catagory',function(e){
var disp =  $(this).children("ul:first").css("display");
   if(disp == "none"){
         $(".nav-item .subCatagory").css("display", "none");
         $(this).children("ul:first").css("display", "block");
    }else{
         $(".nav-item .subCatagory").css("display", "none");
     }
  
 e.preventDefault();

});
 $(document).on('click','.subCatagory li',function(e){
var disp =  $(this).children("ul:first").css("display");
   if(disp == "none"){
         $(this).children("ul:first").css("display", "block");
    }else{
         $(".nav-item .subCatagory").css("display", "none")
     }
  
 e.preventDefault();

});

function businessMore() {
    window.location.href = 'business.html';
}

function consumerMore() {
    window.location.href = 'consumer.html';
}
