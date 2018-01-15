/**
  * Navigation
  */
$(".ezslide-wrapper .arrows > .prev").on("click", function(){
	if ($('.ezslide').find('li.current').prev().length) {
    	$('.ezslide').find('li.current').prev().addClass('current');
    	$('.ezslide').find('li.current').next().removeClass('current');
	} else {
		$('.ezslide li').last().addClass('current');
		$('.ezslide li').first().removeClass('current');
	}	
});

$(".ezslide-wrapper .arrows > .next").on("click", function(){
	if ($('.ezslide').find('li.current').next().length) {
    	$('.ezslide').find('li.current').next().addClass('current');
    	$('.ezslide').find('li.current').prev().removeClass('current');
	} else {
		$('.ezslide li').first().addClass('current');
		$('.ezslide li').last().removeClass('current');
	}
});