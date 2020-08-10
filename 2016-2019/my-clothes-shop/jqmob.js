$(document).ready(function(){

// open menu and close menu btn
    $(".menu").click(function(){
        $(".menu-container,.about").fadeToggle("slow");
      $('.menu,.close-menu').toggle();
   });

// close close btn menu 
    $(".close-menu").click(function(){
        $(".menu-container,.about,.menu").fadeToggle("slow");
      $('.close-menu').toggle();
   }); 

// open about and close about btn 
    $(".about").click(function(){
        $(".about-container,.menu").fadeToggle("slow");
              $('.about,.close-about').toggle();
    });

// close close btn about
 $(".close-about").click(function(){
        $(".about-container,.about,.menu").fadeToggle("slow");
      $('.close-about').toggle();
   }); 


// open bag and close bag btn  
    $(".bag").click(function(){
        $(".bag-container,.buy").fadeToggle("slow");
              $('.close-bag,.bag ').toggle();


    });
// close close btn about
 $(".close-bag").click(function(){
        $(".bag-container,.bag,.buy").fadeToggle("slow");
      $('.close-bag').toggle();
   }); 

 });