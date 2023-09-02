

const check = document.querySelector('.checkbtn');
const navigations = document.querySelector(".navigations");
// ul.display='none';
check.addEventListener('click',function() {
  this.classList.toggle("cross");
  navigations.classList.toggle("open");
});

// const links = document.querySelectorAll('a');

// if (links.length) {
//   links.forEach((link) => {
//     link.addEventListener('click', (e) => {
//       links.forEach((link) => {
//           link.classList.remove('active');
//         //   console.log('cleck')
//       });
//       e.preventDefault();
//       link.classList.add('active');
//     //   console.log('cleck')

//     });
//   });
// }


// mellear 

// back top top
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
// cursosr
// let cursor = document.querySelector("#cursor");
//         let cursor2 = document.querySelector("#cursor2");

//         document.addEventListener("mousemove", function (e) {
//             cursor.style.cssText = cursor2.style.cssText = "left : " + e.clientX + "px;" + "top : " + e.clientY + "px;";
//         })



// animated 
// js

  
jQuery(function($) {
  
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    
    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }
    
    // Check all animatables and animate them if necessary
		$animatables.each(function(i) {
       var $animatable = $(this);
			if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
			}
    });

	};
  
  // Hook doAnimations on scroll, and trigger a scroll
	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});



// progressbar 

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressbar").style.width = scrolled + "%";
}