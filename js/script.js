// alert(1);
$('.add-to-cart').on('click', function () {
    // alert(1);
    var cart=$('#cart').eq(0);
    var imgtodrag=$(this).parent().parent().find('.second-img').eq(0);
    // var imgtodrag=$('#an1');
    if(imgtodrag.length==0){
        imgtodrag=$(this).parent().parent().parent().parent().parent().find('img').eq(0);
    }

    // console.log(imgtodrag);
    if(imgtodrag){
        var imgclone = imgtodrag.clone()
            .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
            .css({
                'opacity':'0.5',
                'position':'absolute',
                'height':'150px',
                'width':'150px',
                'z-index':'100'
            })
            .appendTo($('body'))
            .animate({
                'top':cart.offset().top+10,
                'left':cart.offset().left+10,
                'width':75,
                'height':75
            }, 1000, 'easeInOutExpo');

        setTimeout(function () {
            cart.effect("shake", {
                times:2
            }, 100);
        }, 1500);

        imgclone.animate({
            'width':0,
            'height':0
        }, function () {
            $(this).detach();
        })
    }
});


$(".item-menu").hover(function() {
    $(".item-menu").addClass("visible")
});
$(".item-menu").mouseleave(function() {
    setTimeout(function() {
        $(".item-menu").removeClass("visible")
    }, 500);
});
$(".container-item").hover(function() {
    setTimeout(function() {
        $(".container-item").css("z-index","1000")
    }, 500);
});


window.onscroll = function() {scrollFunction()};
var scrolled=false;

var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop){
        // downscroll code
        // console.log('up');
    } else {
        // upscroll code
        // console.log('down');
        if(document.body.scrollTop<$('#cloned')[0].offsetTop &&scrolled){
            $('#cloned').removeClass('pre-head');
            $('#hed-reg').removeClass('fixed-head');
            // $('html, body').stop().animate({
            //     scrollTop: 0
            // }, 30, 'swing');
            $('html, body').scrollTop(0);
            scrolled=false;
        }
    }
    lastScrollTop = st;
}, false);


function scrollFunction() {
    // console.log(document.body.scrollTop);
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("up").style.display = "block";
        // $('#hed-reg').display='none';
    } else {
        document.getElementById("up").style.display = "none";
    }

    if(document.body.scrollTop>50&&!scrolled){
        scrolled=true;
        // console.log(1);

        $('html, body').stop().animate({
            scrollTop: $('.content').eq(0).offset().top
        }, 1000);

        $('#cloned').addClass('pre-head');

         // $('#hed-reg').css({'position':'fixed', 'background-color':'rgba(1,1,1,0.5)', 'z-index':'10', 'border-bottom':'none'});
        $('#hed-reg').addClass('fixed-head').delay(400).show("blind", {}, 1000);
    }

    // if(document.body.scrollTop<390&&scrolled){
    //     $('#cloned').removeClass('pre-head');
    // }

    // if(document.body.scrollTop=0&&scrolled){
    //     scrolled=false;
    // }
}

// When the user clicks on the button, scroll to the top of the document
function goTop() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox

    // $('html, body').animate({
    //     scrollTop: 0
    // }, 300);
}

var id_show=false;
function togleMenu() {
    // id_show ?  $('.menu').hide(400) : $('.menu').show(400);
    $('#menu').toggleClass('collapsed-menu');
    id_show=!id_show;
}