


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

    var w = document.documentElement.clientWidth || window.innerWidth;
    if (w <= 600) {
        $('.rightHead').click(function(e) {
            e.preventDefault();
            $('#hiddenScreen').slideDown()
            $('.menu').slideUp()
            $('.menuX').prop('id', 'show');
            $('.menuX').addClass('bx-menu-alt-left')
            $('.menuX').removeClass('bx-x');
            $('.menuX').removeClass('menuX');
            
            setTimeout(() => {
                $('.logo').show(250)
            }, 200);
        })

        //portfolio covers

    $('.card').mouseenter(function(e){
        e.preventDefault()
        $(this).find('.cover').animate({
            left:0,
            height:'100%'
        }, 500)
        $(this).find('.round1').animate({
            width:'100vw',
            height:'100vw',
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
            width:'80vw',
            height:'80vw'
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

    } else {
        $('.rightHead').click(function(e) {
            e.preventDefault();
            $('#hiddenScreen').slideDown()
            $('.menuX').prop('id', 'show');
            $('.menuX').addClass('bx-menu-alt-left')
            $('.menuX').removeClass('bx-x');
            $('.menuX').removeClass('menuX');
            
            setTimeout(() => {
                $('.logo').show(250)
            }, 200);
        });

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
    }
    

    $('.bx-x').click(function(e) {
        e.preventDefault();
        $('#hiddenScreen').slideUp()
        setTimeout(() => {
            $('.logo').hide(200)
        }, 20);
    })


//menu choice

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

    

    //mobile version

    $('.bx-menu-alt-left').click(function(e){
        e.preventDefault();
        if($(this).attr('id') =='show'){
        $('.menu').slideDown();
        $(this).removeClass('bx-menu-alt-left')
        $(this).addClass('bx-x');
        $(this).removeAttr('id');
        $(this).addClass('menuX');
        setTimeout(() => {
            $('#logo').show(250)
        }, 200);
        

        }

        else{
            $('.menu').slideUp();
            $(this).prop('id', 'show');
            $(this).addClass('bx-menu-alt-left')
            $(this).removeClass('bx-x');
            $(this).removeClass('menuX');
            setTimeout(() => {
                $('#logo').hide(250)
            }, 20);

        }
        
    });


    
})