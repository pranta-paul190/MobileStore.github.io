$(document).ready(
  (function ($) {
    "use strict";
    //meanmenu
    $("#navbar nav").meanmenu();

    //jQuery Sticky Area
  $(".sticky-area").sticky({
    topSpacing: 0,
  });
  // SCROLLTO THE TOP

  // Show or hide the sticky footer button
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 1000) {
      $(".scroll-top").fadeIn(100);
    } else {
      $(".scroll-top").fadeOut(100);
    }
  });
   // OWL CAROUSEL 2
   $('.owl-carousel').owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    nav:true,
     //navText: ["Play","Stop"],
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsiveClass:true,
     responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1400: {
                items: 4
            }
        }

});
   /*For Partner Section */
  // $(".logo").owlCarousel({
  //   items: 5,
  //   loop: true,
  //   margin: 60,
  //   nav: false,
  //   dots: false,
  //   autoplay: true,
  //   autoplayTimeout: 1000,
  //   autoplayHoverPause: true,
  //   mouseDrag: false,
  //   responsiveClass:true,
  //    responsive: {
  //           0: {
  //               items: 2
  //           },
  //           768: {
  //               items: 2
  //           },
  //           1400: {
  //               items: 4
  //           }
  //       }
  // });

  //wow
  new WOW().init();
  //Aos
  AOS.init();
  // Show or hide the sticky footer button
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 1000) {
      $(".scroll-top").fadeIn(100);
    } else {
      $(".scroll-top").fadeOut(100);
    }
  });
   // Animate the scroll to top
  $(".scroll-top").on("click", function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      200
    );
  });
  

    // Preloader JS
     function preloader() {
      if ($("#preloader").length) {
        $(window).on("load", function () {
          $("#preloader").fadeOut();
          $("#preloader").delay(200).fadeOut("slow");
        });
      }
    }

    /*Function Calls*/
    preloader();
  })(jQuery)
);