$(function(){
    // #で始まるアンカーをクリックした場合に処理
        $('a[href^="#"]').click(function() {
            // スクロールの速度
            var speed = 500; // ミリ秒
            // 移動先を取得
            var href= $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            // 移動先を数値で取得
            var position = target.offset().top;
            // スムーススクロール
            $('body,html').animate({scrollTop:position}, speed, 'swing');
            return false;
        });
    });
$(function () {
    $('.Toggle').click(function () {
      $(this).toggleClass('active');
  
      if ($(this).hasClass('active')) {
          $('.header_nav').addClass('active');
          $('.header_nav').fadeIn(500);
      } else {
          $('.header_nav').removeClass('active');
          $('.header_nav').fadeOut(500);
      }
    });
  
    $('.header_nav a').click(function () {
      $('.header_nav').removeClass('active');
      $('.header_nav').fadeOut(1000);
      $('.Toggle').removeClass('active');
    });
  });

  
  $(function() {
    var h = $(window).height();
     $('#svg-animation').css('display','none');
     $('.mainvisual_text').css('display','none');
     $('header ,.scroll-text ,.link-box_top').css('display','none');
     
     $('#is-loading ,#loading').height(h).css('display','block');
    });
   
    $(function(){
     setTimeout('stopload()',100);/*2500*/
     });
   
     function stopload(){

        setTimeout(function(){
      $('#svg-animation').css('display','block');
      },3000);
      setTimeout(function(){
        $('.mainvisual_text').fadeIn(1200).css('display','block');
        },6000);
      setTimeout(function(){
        $('header ,.scroll-text ,.link-box_top').fadeIn(800).css('display','block');
        },8000);

      $('#is-loading').delay(1200).fadeOut(1000);
      $('#loading').delay(600).fadeOut(300);
    }


/*
  $(function() {
    $.scrollify({
      section : ".section",
    });
  });
  */
  
 





 $(function () {
    $(".slider_wrap").slick({
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000,
      centerMode: true,
      prevArrow:'<div class="prev">矢</div>',
      nextArrow:'<div class="next">次へ</div>',  
      dots: true,
      // fade: true,
      slidesToShow: 2,
      speed: 1000,
      variableWidth: true,
      centerPadding: '30%',
      cssEase: 'linear',
      prevArrow: '<img src="img/prev-btn.png" class="slide-arrow prev-arrow">',
      nextArrow: '<img src="img/next-btn.png" class="slide-arrow next-arrow">',    
    });
  });
  