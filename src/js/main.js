//click-burger : pop-up menu + cross + no-scroll (body)
burger=$(".burger");
menu=$(".menu");

burger.click(function() {
    $(burger).toggleClass("active");
    $(menu).toggleClass("active");
    $("body").toggleClass("active");
});

//click-menu-linken : close pop-up + close cross + close no-scroll (body)
menuItems=$(".menu .menu-item a");

menuItems.click(function(){
    $(burger).removeClass("active");
    $(menu).removeClass("active");
    $("body").removeClass("active");
});

//navigation position fixed on scroll----------------------------------

let bodyTop=$("body").offset().top;
//let banner=$(".bannerlogoburger").offset().top;

$(window).scroll(function(){
    let scrolled=$(window).scrollTop();

    if (scrolled > bodyTop +40){
        $(".bannerlogoburger").addClass("scrolledbanner");
        $(".burger").addClass("scrolledbanner");
        $(".menu-item").addClass("active")
    }
    if (scrolled > bodyTop +500){
        $(".top").addClass("show");
    }
    if (scrolled < bodyTop +40){
        $(".bannerlogoburger").removeClass("scrolledbanner");
        $(".burger").removeClass("scrolledbanner");
        $(".menu-item").removeClass("active")
    }
    if (scrolled < bodyTop +500){
        $(".top").removeClass("show");
    }
    
})

//back to top
$(".arrowTop").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
}); 

//swiper
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 0,
    centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

  });


//menu-block on click add bold & green color + remove others

  $(".menu .menu-item a").click(function(){
   //console.log($(".menu .menu-bloc"))

    $(".menu .menu-item").removeClass('.current-menu-item');
    $(this).addClass('.current-menu-item');

    //console.log(this)
  });