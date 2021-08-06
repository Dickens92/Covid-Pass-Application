(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });
    
    new WOW().init();
    
    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });

})(jQuery);
var button = document.getElementById("submit");
button.onclick = checkStatus;

function checkStatus() {
    var numb = ['22333', '8488400', '29428333','383838363', '939373'];
    var input = document.getElementById("digit").value;
    if (numb.indexOf(input) >= 0) {
        alert("CLIENT VACCINATED")
    } else {
        alert("NOT VACCINATED- Please refer to Covid Protocols for the Unvaccinated and advice accordingly")
    }
}
