'use strict';

$(document).ready(function() {
    navAddClass();
    
});

$(window).scroll(function(){
    navAddClass();
});

function navAddClass() {
    var navHeight = $('#main-nav').height();
    var windowScrollPosition = $(window).scrollTop();
    
    if(windowScrollPosition >= navHeight) {
        $('#main-nav').addClass('scrolled');
        
    } else {
        $('#main-nav').removeClass('scrolled');
    }

}