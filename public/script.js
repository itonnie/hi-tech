//jQuery code only
$(document).ready(function() {
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    //code goes here
    $('.pullup').hide();

    $('#logo').click(function() {
        window.location.assign('#');
    })

    //listen to menu tap events
    $('.tab').on('mouseover', function() {
        if(isMobile.any()) {

        } else {
            $('.tab').removeClass('activetab');
            $(this).addClass('activetab');
    
            var panel = $(this).attr('data-panel');
            var id = '#' + panel;
    
            $('.panel').removeClass('active-panel');
            $(id).addClass('active-panel');
        }
    });

    $('.tab').on('mouseleave', function() {
        $('.tab').removeClass('activetab');
    });

    $('.carousel').carousel({
        interval: 4000,
        keyboard: true
    });

    $('.list-group-item').click(function() {
        if(isMobile.any()) {

        } else {
            $('.pullup').addClass('pullupclose');
        }
    });

    $('#residential').on('mouseover', function() {
        if(isMobile.any()) {

        } else {
            $('.pullup').hide();
            $('#innerresidential').show();
        }
    });

    $('#innerresidential').on('mouseleave', function() {
        $(this).hide();
    });

    $('#commercial').on('mouseover', function() {
        if(isMobile.any()) {
            
        } else {
            $('.pullup').hide();
            $('#innercommercial').show();
        }
    });

    $('#innercommercial').on('mouseleave', function() {
        $(this).hide();
    });

    $('#house').on('mouseover', function() {
        if(isMobile.any()) {
            
        } else {
            $('.pullup').hide();
            $('#innerhouse').show();
        }
    });

    $('#innerhouse').on('mouseleave', function() {
        $(this).hide();
    });

    $('#office').on('mouseover', function() {
        if(isMobile.any()) {
            
        } else {
            $('.pullup').hide();
            $('#inneroffice').show();
        }
    });

    $('#inneroffice').on('mouseleave', function() {
        $(this).hide();
    });

});