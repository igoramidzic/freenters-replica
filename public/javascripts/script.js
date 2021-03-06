/* BUGS

    1) FIXED --Navbar toggles navbarScrolled class when collapse button is clicked--

*/

var navbarToggle = false;
var toggleWhiteBackground = false;

$(document).ready(function(){

  // Smooth scrolling in-page link
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  // Functions

  // Scroll Up Element
  function scrollUpElementCheck() {
    var heightToToggle = $('.promo-section').outerHeight() - 52;
    if ($(window).scrollTop() > heightToToggle) {
      $('.scrollUpDiv').css('opacity', '1');
    }
    if ($(window).scrollTop() < heightToToggle) {
      $('.scrollUpDiv').css('opacity', '0');
    }
  }

  // Change navbar function
  function toggleNavbar () {
    if (navbarToggle) {
      navbarToggle = false;
    } else {
      navbarToggle = true;
    }
  }

  // Toggle background-color for navbar when un-collapsed
  $('.navbar-toggle').click(function () {
    if (!toggleWhiteBackground) {
      $('.navbar').addClass('navbarScrolled');
      toggleWhiteBackground = true;
    }
    if (navbarToggle) {
      if ($(window).scrollTop() < 100) {
        $('.navbar').removeClass('navbarScrolled');
        toggleWhiteBackground = false;
      }
    }
    $('.navbar-toggle').toggleClass('icon-bar-green');
    toggleNavbar();
  })

  // Change navbar on scroll
  function changeNavbarOnScroll () {
    if ($(window).scrollTop() > 150) {
      $('.navbar').addClass('navbarScrolled');
      toggleWhiteBackground = true;
    }
    if ($(window).scrollTop() < 100) {
      if (navbarToggle == false) {
        $('.navbar').removeClass('navbarScrolled');
        toggleWhiteBackground = false;
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
      scrollUpElementCheck()
    });

    // Resize function
    $( window ).resize(function() {
      toggleBrInTitle();
      changeTextAlign();
    });

    changeNavbarOnScroll();
    toggleBrInTitle();
    scrollUpElementCheck()
    changeTextAlign();



    // Login/Register Model
    // Plugin options and our code
    $("#modal_trigger").leanModal({
    		top: 100,
    		overlay: 0.6,
    		closeButton: ".modal_close"
    });

    $(function() {
    		// Calling Login Form
    		$("#login_form").click(function() {
    				$(".social_login").hide();
    				$(".user_login").show();
    				return false;
    		});

    		// Calling Register Form
    		$("#register_form").click(function() {
    				$(".social_login").hide();
    				$(".user_register").show();
    				$(".header_title").text('Register');
    				return false;
    		});

    		// Going back to Social Forms
    		$(".back_btn").click(function() {
    				$(".user_login").hide();
    				$(".user_register").hide();
    				$(".social_login").show();
    				$(".header_title").text('Login');
    				return false;
    		});
    });
});
