 $(function() {
   setInterval(function() {
     $(".slideshow-1 ul li:first-child").animate({
       "margin-left": -209
     }, 800, function() {
       $(this).css("margin-left", 0).appendTo(".slideshow-1 ul");
     });
   }, 3500);
 
   
 
 });