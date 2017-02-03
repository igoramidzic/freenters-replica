/* BUGS

    1) Navbar toggles navbarScrolled class when collapse button is clicked

*/

var navbarToggle = false;

$(document).ready(function(){

  // Functions

  // Toggle background-color for navbar when un-collapsed
  $('.navbar-toggle').click(function () {
    if (!($('.navbar').hasClass('navbarScrolled'))) {
      $('.navbar').addClass('navbarScrolled');
    } else {
      $('.navbar').removeClass('navbarScrolled');
    }
    $('.navbar-toggle').toggleClass('icon-bar-green');

    if (navbarToggle == false) {
      navbarToggle = true;
    } else {
      navbarToggle = false;
    }
    console.log(navbarToggle);
  })

  // Change navbar on scroll
  function changeNavbarOnScroll () {
    if ($(window).scrollTop() > 150) {
      if (!($('.navbar').hasClass('navbarScrolled'))) {
        $('.navbar').addClass('navbarScrolled');
      }
    }
    if ($(window).scrollTop() < 100) {
      if (navbarToggle == false) {
        $('.navbar').removeClass('navbarScrolled');
      }
    }
  }

  // Remove br statement from attention-grabber section title
  function toggleBrInTitle () {
    if ($(window).width() < 975) {
      $('.promo-section .br-in-title').hide();
    }
    // Return br statement
    if ($(window).width() >= 975) {
      $('.promo-section .br-in-title').show();
    }
  }

  // Change text-align for attention-grabber section
  function changeTextAlign () {
    if ($(window).width() < 751) {
      $('.promo-section .content').css('text-align', 'center');
    }
    // Return text-align left
    if ($(window).width() >= 751) {
      $('.promo-section .content').css('text-align', 'left');
    }
  }

    // Scroll function
    $(window).scroll(function(){
      changeNavbarOnScroll();
    });

    // Resize function
    $( window ).resize(function() {
      toggleBrInTitle();
      changeTextAlign();
    });

    changeNavbarOnScroll();
    toggleBrInTitle();
    changeTextAlign();
});
