$(function(){
	/*$(window).resize(function(){
		if($(window).innerWidth() < 568) {
			$('.member-card-holder.active').each(function(i, el){
				if($(this).hasClass('active')) {
					$(this).addClass('col-8').removeClass('col-4 col-2');
				}else {
					$(this).addClass('col-2').removeClass('col-8 col-2');
				}
			});
		}
	});*/

	$('.details-toggler').click(function(){
		console.log("called");
		$(this).parent().next().addClass('seen');
		console.log($(this).parent().next());
	});

	$('.member-card .later').mouseout(function(){
		$(this).removeClass('seen');
	});

});