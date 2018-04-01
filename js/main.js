(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

	    $(".header-area").sticky({topSpacing: 0});

	    $('body').scrollspy({
		    target: '.navbar-collapse',
		    offset:95
	    });
	    
	    $(".navbar-toggle").click(function() {
		    $("body").addClass("mobile-menu-activated");		    
	    }); $("ul.nav.navbar-nav li a ").click(function() {
		    $(".navbar-collapse").removeClass("in");		    
	    });
        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	