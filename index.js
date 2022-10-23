


$(document).ready(function() {

    //Scroll reveal;

    //delay logos
    $('.leftHead').delay(2000).fadeIn();
    

    const scrollTop = $(window).scrollTop();

    

    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if (scroll>200) {
            $('.rightHead').slideUp();
        }
        else if (scroll<200){
            $('.rightHead').slideDown()
        }
    });

    //Show/hide hidden screen

    $('.bx-x').click(function(e) {
        e.preventDefault();
        $('#hiddenScreen').slideUp()
        setTimeout(() => {
            $('.logo').hide(100)
        }, 200);
    })

    $('.rightHead').click(function(e) {
        e.preventDefault();
        $('#hiddenScreen').slideDown()
        setTimeout(() => {
            $('.logo').show(250)
        }, 200);
    })

    //active menu option

    // $('.centerHead ul li a').mouseenter(function(e) {
    //     e.preventDefault();
    //     $(this).attr('id', 'preactive')
    // })

    // $('.centerHead ul li a').mouseleave(function(e) {
    //     e.preventDefault();
    //     if($(this).hasClass('active')){
    //         pass
    //     }
    //     $(this).removeAttr('id', 'preactive')
    // })

    $('.centerHead ul li a').click(function() {
        $(this).parent().parent().parent().children().find('a').removeClass('active');
        $(this).addClass('active')
    });

    //change the theme

    $('.one').click(function(){
        $('.slide1').slideDown()
        $('.slide2').slideUp()
    })

    $('.two').click(function(){
        $('.slide2').slideDown()
        $('.slide1').slideUp()
    })

    //portfolio covers

    $('.card').mouseenter(function(e){
        e.preventDefault()
        $(this).find('.cover').animate({
            left:0,
            height:'100%'
        }, 500)
        $(this).find('.round1').animate({
            width:'25vw',
            height:'25vw',
        }, 700)
    })

    $('.card').mouseleave(function(e){
        e.preventDefault()
        $(this).find('.cover').animate({
            left:'-100%',
            height:'0%',
        }, 200)

        $(this).find('.round1').animate({
            width:'0px',
            height:'0px'
        }, 500)
    
    })


    //experience background

    $('.box').mouseenter(function(e){
        e.preventDefault()
        $(this).find('.round2').animate({
            width:'20vw',
            height:'20vw'
        }, 500)
        $(this).css('transform', 'scale(1.05) ');
    })

    $('.box').mouseleave(function(e){
        e.preventDefault()
        $(this).find('.round2').animate({
            width:'0vw',
            height:'0vw'
        }, 500)
        $(this).css('transform', 'scale(1) ');
    })
    

    
})