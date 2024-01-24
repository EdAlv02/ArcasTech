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


$(document).ready(function() { 
  // Set the height of each section
    var height = $(window).height();
    $('section').height(height);
  
    // Add an event listener for the scroll event
    $(window).scroll(function() {
      // Calculate the current section
      var currentSection = $('section').filter(function() {
        return $(this).position().top <= $(window).scrollTop() && $(this).position().top + $(this).height() > $(window).scrollTop();
      });
  
      // Calculate the height of the current section and the position of the viewport within the section
      var sectionHeight = currentSection.height();
      var scrollPosition = $(window).scrollTop();
      var scrollPercentage = (scrollPosition / sectionHeight) * 100;
  
      // If the viewport has scrolled more than 50% of the section's height, scroll to the next section
      if (scrollPercentage > 50) {
        var nextSection = currentSection.next('section');
        if (nextSection.length > 0) {
          var nextSectionTop = nextSection.position().top;
          $('html, body').animate({
            scrollTop: nextSectionTop
          }, 500);
        }
      }
    });
  });