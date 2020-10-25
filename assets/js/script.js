$(function() {

    // Fixed Header
    let header = $('#header');
    let main = $('#main');
    let mainH = main.innerHeight();
    let scrollPos = $(window).scrollTop();
    let burger = $('#burger');
    let nav = $('#nav');
    checkScroll(scrollPos, mainH);

    $(window).on('scroll', function() {
        scrollPos = $(this).scrollTop();
        let mainH = main.innerHeight(); 
        
        checkScroll(scrollPos, mainH);
    })

    function checkScroll(scrollPos, mainH) {
        if(scrollPos >= mainH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    }


    // Smooth Scroll
    $("[data-scroll]").on('click', function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        console.log(elementOffset)

        $("html, body").animate({
            scrollTop: elementOffset
        }, 700);
    })

    // Burger Menu    
    $(burger).on('click', function() {
        nav.toggleClass('active');
    })
    
});






























// const header = document.querySelector(".header");

// function checkScroll() {
//     let scrollPos = window.scrollY;

//     if (scrollPos < 900) {
//         header.classList.remove('fixed');
//     } else {
//         header.classList.add('fixed');
//     }
// }

// window.addEventListener('scroll', function () {
//     checkScroll();
// })

