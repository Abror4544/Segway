$(function () {
  // window.onbeforeunload = function () {
  //   window.scrollTo(0, 0);
  // }

  $('.menu_btn_bars').click( () => {
    $('.menu_btn_bars').hide();
    $('.menu_btn_bars').css('transform', 'rotate(180deg)');
    $('.menu_btn_close').show();
    $('.menu_ul').css('transform', 'translateY(0%)');
    $('body').css('overflow', 'hidden');
  });
  $('.menu_btn_close').click( () => {
    $('.menu_btn_close').hide();
    $('.menu_btn_bars').show();
    $('.menu_ul').css('transform', 'translateY(-113%)');
    $('body').css('overflow', 'auto');
  });

  $(window).scroll(function() {
    let offset = $(window).scrollTop();
    $('.menu').toggleClass('setdown', offset > 0);
  });

  let link = $('.menuItem');

  link.on('click', function (e) {
    e.preventDefault();
    let selector = $(this).addClass('active').attr('href');
    let target = $(selector);
    $('html, body').animate({ scrollTop: target.offset().top - 120 }, 1000);
    if ($(window).width() < 767) {      
      $('.menu_ul').css('transform', 'translateY(-113%)');
      $('.menu_btn_close').hide();
      $('.menu_btn_bars').show();
      $('body').css('overflow', 'auto');
    }
  })

  $('.formOpen').click( () => {
    $('.formWrapper').css('display', 'flex');
    $('body').css('overflow', 'hidden');
  })
  $('.formClose').click( () => {
    $('.formWrapper').css('display', 'none');
    $('body').css('overflow', 'auto');
  })

  const swiper1 = new Swiper('.swiper1', {
   navigation: {
    nextEl: '.next1',
    prevEl: '.prev1',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30
    },
    991: {
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 30
    }
  }
});

  const swiper2 = new Swiper('.swiper2', {
   navigation: {
    nextEl: '.next2',
    prevEl: '.prev2',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20
    },
    991: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 30
    }
  }
});

  $('.accordionItem').click(function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('.accordionText').slideUp(500);
      $('.accordionText').removeClass('.textActive');
    }else{
      $('.accordionItem').removeClass('active').eq($(this).index()).addClass('active');
      $('.accordionText').slideUp(500).eq($(this).index()).slideDown(500);
      $('.accordionText').removeClass('.textActive');
    }
  })

  $(document).ready(function () {

    var show = true;
    var countbox = ".benefits__inner";
    $(window).on("scroll load resize", function () {
      if (!show) return false;
      var w_top = $(window).scrollTop();
      var e_top = $(countbox).offset().top;
      var w_height = $(window).height();
      var d_height = $(document).height();
      var e_height = $(countbox).outerHeight();
      if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
        $('.benefits__number').css('opacity', '1');
        $('.benefits__number').spincrement({
          thousandSeparator: "",
          duration: 8000
        });

        show = false;
      }
    });

  });


})