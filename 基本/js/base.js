$(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.globalMenuSp').addClass('active');
    } else {
      $('.globalMenuSp').removeClass('active');
    }
  });
});

// swiper
var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  autoplay: {
    delay: 3000, //表示時間
    disableOnInteraction: true //操作中の自動再生停止
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  speed: 1000, //切り替わる時間
  effect: 'fade',
  crossFade: true,
});

objectFitImages('.photo-ofi img');

// AOS
$(function () {
  AOS.init({
    easing: 'easeInSine',
  });
});
// スクロールでナビ表示
$(function () {
  // スクロール途中から表示したいメニューバーを指定
  var navBox = $(".cb-header");
  // メニューバーは初期状態では消しておく
  navBox.hide();
  // 表示を開始するスクロール量を設定(px)
  var TargetPos = 190;
  // スクロールされた際に実行
  $(window).scroll(function () {
    // 現在のスクロール位置を取得
    var ScrollPos = $(window).scrollTop();
    // 現在のスクロール位置と、目的のスクロール位置を比較
    if (ScrollPos > TargetPos) {
      // 表示(フェイドイン)
      navBox.slideDown();
    } else {
      // 非表示(フェイドアウト)
      navBox.slideUp();
    }
  });
});

// < !--▲▲▲スクロールでナビ表示▲▲▲-->


// < !--↓↓↓スムーズscroll↓↓↓-->

$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});

// お問い合わせ
$(function () {
  $(document).ready(function () {
    $("form input[type!=image][type!=button][type!=submit][type!=reset],form select").keypress(function (e) {
      if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
        return false;
      } else {
        return true;
      }
    });
  });
});
