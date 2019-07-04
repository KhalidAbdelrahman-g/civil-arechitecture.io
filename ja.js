/*global $, window, */
/*
$(function () {
    'use strict';
    var winh = $(window).height(),
        barh = $(".upper-bar").innerHeight(),
        navh = $(".navbar").innerHeight();
    $(".slider,.carousel-item").height(winh - (barh + navh));
});

*/
//featurework shuffle//
$('.featuredworks ul li').on('click', function () {
    'use strict';
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('class') === '.All') {
        $('.shuffle-image .col-md-3').css('opacity', '1');
    } else {
        $('.shuffle-image .col-md-3').css('opacity', '.08');
        $($(this).data('class')).parents().css('opacity', '1');
    }
});