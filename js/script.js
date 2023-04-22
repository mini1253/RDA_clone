$('.sub_bg').hide();
// menu li에 마우스를 올렸을 때 선택한 li에 들어있는 sub_bg만 보이고
// 다른 menu li에 마우스를 올렸을 때 원래 있던 메뉴는 사라지고 마우스를 올린
// 메뉴의 sub_bg가 보이게 함
$('.menu > li').mouseover(function () {
  $(this).children('.sub_bg').stop().slideDown();
  $(this).siblings().children('.sub_bg').hide();
});
$('.menu > li').mouseleave(function () {
  $(this).children('.sub_bg').stop().slideUp();
});

// m_nav
$('.m_nav_bg , .m_sub').hide();
// .m_btn 클릭 -> .m_nav_bg 보임
// .m_close 클릭 -> .m_nav_bg 사라짐
$('.m_btn').click(function () {
  $('.m_nav_bg').show();
});
$('.m_close').click(function () {
  $('.m_nav_bg').hide();
});


//.m_menu > li > a 클릭 -> 클릭한 li의 .m_sub 보임(slideToggle)
//다른 li > a 클릭 -> 열려있던 .m_sub는 닫히고(slideUp)
//클릭한 li의 .m_sub 보임(slideToggle)
//클릭한 li > a 에 m_menu_open 클래스가 추가,삭제 (toggleClass)
//다른 li > a 클릭 -> 추가돼있던 클래스(m_menu_open)는 삭제 (removeClass)
$('.m_menu > li > a').click(function () {
  $(this).siblings('.m_sub').delay(300).slideToggle();
  $(this).parent().siblings().children('.m_sub').slideUp();
  $(this).toggleClass('m_menu_open');
  $(this).parent().siblings().children('a').removeClass('m_menu_open');
});


let mainSlide = new Swiper('.main .swiper-container', {
  navigation: {
    prevEl: '.main .swiper-button-prev',
    nextEl: '.main .swiper-button-next',
  },
  pagination: {
    el: '.main .swiper-pagination',
    type: 'fraction',
  },
  loop: true,
  autoplay: {
    delay: 2000,
  },
});


/* 1. play img 가리기
   2. stop img 누르면 슬라이드 autoplay 멈추고, stop img 가려짐, play img 보임
   3. play img 누르면 슬라이드 autoplay 시작, play img 가려짐, stop img 보임*/
$('.play').hide();
$('.stop').click(function () {
  mainSlide.autoplay.stop();
  $('.stop').hide();
  $('.play').show();
});
$('.play').click(function () {
  mainSlide.autoplay.start();
  $('.play').hide();
  $('.stop').show();
});


/* 1. 첫번째 notice_title에 .active가 추가된 상태
   2. notice_title 클릭 했을 때 클릭한 곳에만 .active가 추가되고 다른곳에선 .active가
   제거됨 , 관련된 내용만 보여야 함 */

$('.notice > li:nth-child(1) ~ li > .notice_box').hide();
$('.notice_title').click(function () {
  $(this).addClass('active');
  $(this).parent().siblings().children('.notice_title').removeClass('active');
  $(this).siblings('.notice_box').show();
  $(this).parent().siblings().children('.notice_box').hide();
});

$('.con2_gallery1,.con2_gallery2,.con2_gallery4').hide();
$('.con2_tab_title > li:nth-child(1)').click(function () {
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
  $('.con2_gallery1').show();
  $('.con2_gallery1').siblings().hide();
});
$('.con2_tab_title > li:nth-child(2)').click(function () {
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
  $('.con2_gallery2').show();
  $('.con2_gallery2').siblings().hide();
});
$('.con2_tab_title > li:nth-child(3)').click(function () {
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
  $('.con2_gallery3').show();
  $('.con2_gallery3').siblings().hide();
});
$('.con2_tab_title > li:nth-child(4)').click(function () {
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
  $('.con2_gallery4').show();
  $('.con2_gallery4').siblings().hide();
});

// let con3_slide = new Swiper('.con3_slide .swiper-container', {
//   pagination: {
//     el: '.con3 .swiper-pagination',
//     type: 'fraction',
//   },
//   navigation: {
//     nextEl: '.con3 .con3_next',
//     prevEl: '.con3 .con3_prev',
//   },
//   autoplay: {
//     delay: 2000,
//   },
//   loop: true,
// });



// 1. 윈도우 창 사이즈를 감지,계산 할 수 있는 코드를 만들어서 변수에 저장
// 2. if else 조건문을 이용해서 윈도우 창이 일정 크기 이상 커지거나 작아질때
// 반응하는 슬라이드를 작성

let a = window.matchMedia('(max-width:1399px)').matches;
// matchMedia -> css에서 사용하는 미디어쿼리문을 그대로 사용할 수 있고
// css 미디어쿼리처럼 미디어쿼리의 조건을 그대로 사용할 수 있다.
// matches -> 현재 화면이 미디어쿼리의 범위에 들어가면 true를 반환하고
// 그렇지 않으면 false를 반환한다.
if (a) {
  let con3_slide = new Swiper('.con3_slide .swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    pagination: {
      el: '.con3 .swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.con3 .con3_next',
      prevEl: '.con3 .con3_prev',
    },
    autoplay: {
      delay: 2000,
    },
    loop: true,
  });
} else {
  let con3_slide = new Swiper('.con3_slide .swiper-container', {
    pagination: {
      el: '.con3 .swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.con3 .con3_next',
      prevEl: '.con3 .con3_prev',
    },
    autoplay: {
      delay: 2000,
    },
    loop: true,
  });
}


$('.con3_play').hide();
$('.con3_stop').click(function () {
  con3_slide.autoplay.stop();
  $('.con3_stop').hide();
  $('.con3_play').show();
});
$('.con3_play').click(function () {
  con3_slide.autoplay.start();
  $('.con3_play').hide();
  $('.con3_stop').show();
});


let con4_slide = new Swiper('.con4 .swiper-container', {
  slidesPerView: 'auto',
  navigation: {
    prevEl: '.con4 .con4_prev_btn',
    nextEl: '.con4 .con4_next_btn',
  },
  loop: true,
});


$('.family_list').hide();
$('.site_box button').click(function () {
  $(this).siblings('.family_list').toggle();
  $(this).parent().siblings().children('.family_list').hide();
  $(this).parent().toggleClass('site_active');
  $(this).parent().siblings().removeClass('site_active');
});


$('.scroll_top').hide();
$(window).scroll(function () {
  let scTop = $('html').scrollTop(); //html의 scrollTop을 계산해서 변수 scTop에 저장
  /* if (조건) {
    참일때의 결과
  } else {
    거짓일때의 결과
  } */
  if (scTop > 50) {
    $('.scroll_top').fadeIn(500);
  } else {
    $('.scroll_top').fadeOut(500);
  }
}); //scroll() -> 스크롤을 하는 행동에서 효과를 넣는 함수


// 스크롤을 맨 위로 올려주는 코드
$('.scroll_top').click(function () {
  // $('html').scrollTop(0);
  // scrollTop() -> 위쪽을 기준으로 해서 스크롤바의 위치값이 계산되는 함수
  $('html').animate({ scrollTop: 0 }, 500);
});
