$(document).ready(function() {
    $('.panel-block').on('click', function() {
        $('.panel-block').removeClass('is-active');
        $(this).addClass('is-active');

        $('.flexing').removeClass('active-panel');
        var id = $(this).attr('data-id');

        var elementId = "#" + id;
        $(elementId).addClass('active-panel');
    });

    $('.navtab').click(function() {
        $('.navtab').removeClass('activetab');
        $(this).addClass('activetab');

        var id = $(this).attr('data-val');

        var elId = '#' + id;
        $('.navpanel').removeClass('activepanel');
        $(elId).addClass('activepanel');
    });
});