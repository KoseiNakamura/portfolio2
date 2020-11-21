$(window).on('load',function(){
　if(document.URL.match('works.html')) {
　}
});

var pos = 0;
$(window).on('load scroll', function(){
  var windowHeight = window.innerHeight;
  var scrollTop =  document.documentElement.scrollTop;
  var navHeight = $("#nav").height();
  if(document.URL.match('index.html')) {
    changeColor(windowHeight, scrollTop, navHeight);
    hideNav(navHeight, pos, windowHeight);
  } else {
    hideNav(navHeight, pos, 5);
    $('.nameicon').css('display', 'block');
  }
});

var navflag = 0;
$('#burger').on('click',function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $('nav').slideUp();
    navflag = 0;
  } else {
    $(this).addClass('active');
    $('nav').slideDown();
    navflag = 1;
  }
});

$(function(){
  var btn = $('#work-type [data-filter]'),
  list = $('#works [data-category]'),
  wta = $('.wtc');

  btn.on('click', function(e) {
    e.preventDefault();
    var $tag = $(this).attr('data-filter');
    if ($tag == 'all'){
      list.hide().promise().done(function() {
        list.show();
      });
    } else {
      list.hide().promise().done(function() {
        list.filter('[data-category *= "' + $tag + '"]').show();
      });
    }
  });

  wta.on('click', function(e) {
    wta.css('opacity', '1');
    $(this).css('opacity', '.2');
  });


});

function changeColor(windowHeight, scrollTop, navHeight) {
  var wn = windowHeight-navHeight;
  if (scrollTop < wn) {
    $('.nameicon').fadeOut();
  } else {
    $('.nameicon').fadeIn('fast');
  }
}

function hideNav(navHeight, scrollTop, windowHeight) {
  var currentPos = $(this).scrollTop();
  if (currentPos > pos) {
    if(scrollTop >= windowHeight && navflag == 0) {
      $("#nav").css("top", "-" + navHeight + "px");
    }
  } else {
    $("#nav").css("top", 0 + "px");
  }
  pos = currentPos;
}

$(function() {
  $('a[href^="#"]').on("click", function() {
    var speed = 600;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});
