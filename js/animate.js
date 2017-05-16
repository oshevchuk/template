/**
 * Created by Oshevchuk on 16.05.2017.
 */
// alert(1);
var show=true;
$("#button").click(function() {
    $('.element').toggleClass('element1');

    if(show) {
        $('.mons').hide(300);
        $('.info-banner').hide(300);
        $('.footer').hide(300);
    }else{
        $('.mons').show(300);
        $('.info-banner').show(300);
        $('.footer').show(300);
    }
    show=!show;
});