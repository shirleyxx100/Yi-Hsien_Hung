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

});
