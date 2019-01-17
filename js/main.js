//Function that animates menu icon from 3 bars to X
function menuAnimate(x) {
  x.classList.toggle("change");
}
//


//Responsive Nav
$(function() {
	menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault();
     menu.slideToggle();
  });

  $(window).resize(function(){
    var w = $(this).width();
    if(w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });

  $('nav li').on('click', function(e) {
    var w = $(window).width();
    if(w < 480 ) {
      menu.slideToggle();
    }
  });
  $('.open-menu').height($(window).height());
});
//
