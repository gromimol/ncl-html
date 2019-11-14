$(document).ready(function () {
	

	// Демонстрация работы шапки при скролле. 

	$(window).scroll(function(){
		if($(window).scrollTop() > 200){
			$('body').addClass('header-fixed');
		}else{
			$('body').removeClass('header-fixed');
		}
	});

	// Menu
	$('.menu-btn').on('click',function () {
		$('body').addClass('noscroll');
		$('.mobile-menu').addClass('active');
		$('#overlay').show();
	});

	$('#overlay, .close').on('click',function () {
		$('body').removeClass('noscroll');
		$('.mobile-menu').removeClass('active');
		$('#overlay').hide();
	})


})