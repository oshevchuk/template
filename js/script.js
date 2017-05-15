// alert(1);
$('.add-to-cart').on('click', function () {
    // alert(1);
    var cart=$('#cart').eq(0);
    var imgtodrag=$(this).parent().parent().find('.second-img').eq(0);
    // var imgtodrag=$('#an1');
    if(imgtodrag.length==0){
        imgtodrag=$(this).parent().parent().parent().parent().parent().find('img').eq(0);
    }

    console.log(imgtodrag);
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

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("up").style.display = "block";
    } else {
        document.getElementById("up").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function goTop() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}