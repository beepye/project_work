$(document).ready(function(){
  $('.tabs > li > a:not(:first)').removeClass('active');
  $('.tabs > li > a:first').addClass('active');
  $('.tab-container:not(:first)').hide();

  $('.tabs li a').click(function(){
    var t = $(this).attr('href');
    $('.tabs li a').removeClass('active');
    $(this).addClass('active');
    $('.tab-container').hide();
    $(t).fadeIn('slow');
    return false;
  })
});