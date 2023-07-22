$(document).ready(function() {
    var lazyLoadInstance = new LazyLoad(); // Inicializamos la librería LazyLoad
  
    $('.fade-up').each(function() {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight() - 100;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
  
      if (bottom_of_window > bottom_of_element) {
        $(this).addClass('visible');
      }
    });
  
    $(window).scroll(function() {
      $('.fade-up').each(function() {
        var bottom_of_element = $(this).offset().top + $(this).outerHeight() - 100;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
  
        if (bottom_of_window > bottom_of_element) {
          $(this).addClass('visible');
        }
      });
    });
  
    $(window).scroll(function() {
      $('.scroll-down-reveal').each(function() {
        var bottom_of_element = $(this).offset().top + $(this).outerHeight() - 100;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
  
        if (bottom_of_window > bottom_of_element) {
          $(this).addClass('visible');
        }
      });
    });
  
    // Código para cambiar el color de fondo del header en scroll
    $(window).scroll(function() {
      if ($(window).scrollTop() > 100) {
        $('header').css('background-color', '#fff');
      } else {
        $('header').css('background-color', '#f7f0e9');
      }
    });
  });