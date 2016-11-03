$(function() {

  ////////// Mobile Menu //////////

  $('a.menu-icon').click(function() {
    $('#menu-links').slideToggle();
  });

  //////////// popover ///////////

  $('.pop').popover(function(){
    $('button').trigger('click');
  });
  
});