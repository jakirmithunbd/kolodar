(function($){
  "use strict";

    $(".navbar-toggle").click(function() {
	  	$(this).toggleClass('in');
	});

	/*** Sticky header */
	$(window).scroll(function() {
		if ($(window).scrollTop() > 0) {
			$(".header").addClass("sticky");
		} 
		else {
			$(".header").removeClass("sticky");
		}
	});

    /*** Header height = gutter height */
	function setGutterHeight(){
	 	var header = document.querySelector('.header'),
	 		gutter = document.querySelector('.header_gutter');
		 	gutter.style.height = header.offsetHeight + 'px';
	}

	window.onload = setGutterHeight;
	window.onresize = setGutterHeight;


	// $('#angle_btn').click(function () {
	//     $('html, body').animate({scrollTop:450}, 'slow');
	//     return false;
	// });

  $('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});
    $('.openMenu').sidr({
     	name: 'sidr-main',
      	side: 'left',
      	source: '#sidr',
      	displace: false,
      	renaming: false,
    });


   
    
})(jQuery);
