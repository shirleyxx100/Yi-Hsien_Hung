$(document).ready(function(){
    $('.logo').on('mouseenter', () => {
    $('.introduction').show();
  });
  $('.logo').on('mouseleave', () => {
    $('.introduction').hide();
  });

  $('.btn-contact').on('mouseenter', () => {
    $('.email').toggle();
  });
  $('.btn-contact').on('click', () => {
    $('.email').toggle();
  });
  $('.email').on('mouseleave', () => {
    $('.email').hide();
  });

  $('.btn-portfolio').on('mouseenter', () => {
    $('.drop-menu').toggle();
  });
  $('.drop-menu').on('mouseleave', () => {
    $('.drop-menu').hide();
  });

  $('.btn-contact-tablet').on('click', () => {
    $('.email-tablet').toggle();
  });

  $('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    adaptiveHeight: false
  });

  $('.carousel-two').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    adaptiveHeight: false
  });

  $('.carousel-three').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    adaptiveHeight: false
  });
  
});
