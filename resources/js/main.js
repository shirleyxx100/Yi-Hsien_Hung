$(document).ready(function(){
  $('.logo').on('mouseenter', () => {
    $('.introduction').show();
  });
  $('.logo').on('mouseleave', () => {
    $('.introduction').hide();
  });

  $('.btn-contact').on('click', () => {
    $('.email').toggle();
  });
  $('.email').on('mouseleave', () => {
    $('.email').hide();
  });

  $('.btn-portfolio').on('click', () => {
    $('.drop-menu').toggle();
  });
  $('.drop-menu').on('mouseleave', () => {
    $('.drop-menu').hide();
  });

});
