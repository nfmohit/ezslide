/**
  * Navigation
  */
$(".ezslide-wrapper .arrows > .prev").on("click", function(){
    $('.ezslide').find('li.current').prev().addClass('current');
    $('.ezslide').find('li.current').next().removeClass('current');
});

$(".ezslide-wrapper .arrows > .next").on("click", function(){
    $('.ezslide').find('li.current').next().addClass('current');
    $('.ezslide').find('li.current').prev().removeClass('current');
});