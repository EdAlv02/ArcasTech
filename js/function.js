

$(document).ready(function(){
            
  var height = $(window).height();

  $('#secHeight').height(height);
});

$(document).ready(function() {
    function updateNavbarColor() {
      var bgColor = $('body').css('background-color');
      if (bgColor === 'rgba(255, 255, 255, 1)') {
        $('nav').removeClass('dark-bg').addClass('white-bg');
      } else {
        $('nav').removeClass('white-bg').addClass('dark-bg');
      }
    }
  
    // Call the function initially
    updateNavbarColor();
  
    // Call the function on scroll
    $(window).scroll(function() {
      updateNavbarColor();
    });
  });
