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
	});

	// tab
	$('.price-tab-list').on('click', 'a', function (e) {
		e.preventDefault();

		var id = $(this).attr('data-id');

		$('.price-tab-list a').removeClass('active');
		$(this).addClass('active');

		$('.tab-content').removeClass('active');
		$('#' + id).addClass('active');
	});

	// video
	$('.play').on('click', function (e) {
		e.preventDefault();

		$('.video-popup').addClass('active');
		$('.man').addClass('hide');
	});

	// fancybox
	 $(".fancybox").fancybox();

	// mask
	$("#phone,#phone2").mask("+7(999) 999-9999");


	// counter
	function timer(f) {
        var date = new Date(f);
		var f_time = Date.parse(date);
	
		function timer_go() {
			var n_time = Date.now();
			var diff = f_time - n_time;
			if(diff <= 0) return false;
			var left = diff % 1000;
	
			//секунды
			diff = Math.floor(diff / 1000);
			var s = diff % 60;
			if(s < 10) {
				$(".seconds_1").html(0);
				$(".seconds_2").html(s);
			}else {
				$(".seconds_1").html(Math.floor(s / 10));
				$(".seconds_2").html(s % 10);
			}
			//минуты
			diff = Math.floor(diff / 60);
			var m = diff % 60;
			if(m < 10) {
				$(".minutes_1").html(0);
				$(".minutes_2").html(m);
			}else {
				$(".minutes_1").html(Math.floor(m / 10));
				$(".minutes_2").html(m % 10);
			}
			//часы
			diff = Math.floor(diff / 60);
			var h = diff % 24;
			if(h < 10) {
				$(".hours_1").html(0);
				$(".hours_2").html(h);
			}else {
				$(".hours_1").html(Math.floor(h / 10));
				$(".hours_2").html(h % 10);
			}
			//дни
			var d = Math.floor(diff / 24);
			if(d < 10) {
				$(".days_1").html(0);
				$(".days_2").html(d);
			}else {
				$(".days_1").html(Math.floor(d / 10));
				$(".days_2").html(d % 10);
			}
			setTimeout(timer_go, left);
		}
		setTimeout(timer_go, 0);
	}
	
	var time = $(".timer").attr("data-finish");
		timer(time);

})