(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();



        $(".claiant-active").owlCarousel({
            items: 3,
            nav: false,
            dots: true,
            margin: 30,
            loop: true
        });


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	