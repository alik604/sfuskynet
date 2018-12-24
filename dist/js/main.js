// Responsive Nav
$(function () {
    menu = $('nav ul');

    $('#openup').on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function () {
        var w = $(this).width();
        if (w > 480 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    $('nav li').on('click', function (e) {
        var w = $(window).width();
        if (w < 480) {
            menu.slideToggle();
        }
    });
    $('.open-menu').height($(window).height());
});

// Smooth Scrolling
$('.cf a').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
            },
            800,
            function () {
                window.location.hash = hash;
            }
        );
    }
});

var sendEMail = function () {
    window.open('mailto:' + "sfurs@sfu.ca" + '?subject=' + document.getElementById("subjectLine").value + '&body=' + document.getElementById("msg").value);
};


/*
TODO
SFU red color theme (some how)
add timeline
fix images
fix writing under exec names
adjust background on Sponsors images?
proper contact us with email forum
link to join via SFSS
 */