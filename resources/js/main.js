$(document).ready(function(){
    /* $('.logo').on('mouseenter', () => {
    $('.introduction').show();
  });
  $('.logo').on('mouseleave', () => {
    $('.introduction').hide();
  });*/

  /*$('.btn-contact').on('mouseenter', () => {
    $('.email').toggle();
  });
  $('.btn-contact').on('click', () => {
    $('.email').toggle();
  });
  $('.email').on('mouseleave', () => {
    $('.email').hide();
  });*/

  $('.btn-contact').on('mouseenter', () => {
    $('#show').show();
  });
  $('.btn-contact').on('mouseleave', () => {
    $('#show').hide();
  });
  $('.btn-contact').on('mouseenter', () => {
    $('#hide').hide();
  });
  $('.btn-contact').on('mouseleave', () => {
    $('#hide').show();
  });

  /* $('.btn-portfolio').on('mouseenter', () => {
    $('.drop-menu').toggle();
  });
  $('.drop-menu').on('mouseleave', () => {
    $('.drop-menu').hide();
  }); */

  $('.btn-contact-tablet').on('click', () => {
    $('#show-2').show();
  });
  $('.btn-contact-tablet').on('click', () => {
    $('#hide-2').hide();
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
