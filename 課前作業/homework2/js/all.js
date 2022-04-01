// swiper JS
$(document).ready(function () {
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        // direction: 'vertical',
        speed: 2000,
        effect: 'slide',
        loop: false,
      
        autoplay: {
          delay: 1500,
        },
        
        // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        //   type: 'bullets',
        // },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
    });
      
    // lightbox JS
    lightbox.option({
        'resizeDuration': 500,
        'wrapAround': true
    })
});

// 回到最上面
$(document).ready(function () {
    $('.top a').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
});

// 下拉式選單
$(document).ready(function () {
    $('.dropdown').click(function(event){
        event.preventDefault();
        $('.dropdown').toggleClass('active');
        $('.dropdown-open').slideToggle();
    });
});
