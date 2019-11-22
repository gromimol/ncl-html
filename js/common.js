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

	$('.menu').on('click', 'a', function (e) {
		e.preventDefault();

		var menuId = $(this).attr('href'),
			top = $(menuId).offset().top,
			headerHeight = $('.header').height();
		$('body,html').animate({scrollTop: top - headerHeight}, 1000);

		$('#overlay').hide();
		$('body').removeClass('noscroll');
		$('.mobile-menu').removeClass('active');
	});

	$('#overlay, .close, .close-popup').on('click',function () {
		$('body').removeClass('noscroll');
		$('.mobile-menu').removeClass('active');
		$('.popup').removeClass('active');
		$('.main-popup').removeClass('active');
		$('#overlay').hide();
		$('.policy-popup').removeClass('active');
	});

	$('.js--popup').on('click',function (e) {
		e.preventDefault();

		var popupType = $(this).attr('data-popup');

		if(popupType === 'consult'){
			$('.popup__title').html('Получить консультацию<br> менеджера');
			$('.submit span').html('Получить консультацию');
		}else{
			$('.popup__title').html('Заказать обратный звонок');
			$('.submit span').html('отправить');
		}

		$('body').addClass('noscroll');
		$('.mobile-menu').removeClass('active');
		$('#overlay').show();
		$('.popup').addClass('active');
	});

	$('.js--main-popup').on('click',function (e) {
        e.preventDefault();
!
        $('.main-popup').addClass('active');
        $('body').addClass('noscroll');
    });

    $('.js--policy').on('click',function (e) {
   		e.preventDefault();

   		$('body').addClass('noscroll');
   		$('.policy-popup').addClass('active');
   		$('#overlay').show();
    })

	// review
	$('.js--more').on('click',function (e) {
		e.preventDefault();

		var count = $(this).attr('data-count');

		$(this).closest('.review-content').children('.review-row.hidden').first().removeClass('hidden');

		$(this).attr('data-count', parseInt(count + 4));

			console.log(count);
		if(count == '44'){
			$('.js--more').addClass('opacity');
		}

	})

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
	$("#phone,#phone2, #phone3, #phone4").mask("+7(999) 999-9999");

	// map
	(function () {
		var g = $('.map-body').find('g');

		$(g).each(function (i) {

			var gText = $(this).find('tspan').html();
			$(this).addClass('city-label');
			$(this).attr('data-city', gText);
			$(this).attr('data-id', 'city' + i);
			
		});

		// Простите за такой код. Пришлось!!

		$('.office-cities .city-label').each(function function_name() {
			var labelText = $(this).html();
			$(this).attr('data-city', labelText);
		})

		$('.city-label').on('click',function (e) {
			e.preventDefault();

			$('.city-label').removeClass('active');
			$(this).addClass('active');
			$('.office-data__city').html($(this).attr('data-city'));

			if($(this).attr('data-id') === 'city1'){
				$('.office-address').html('улица Грибакиных, д. 25 к. 3');
				$('.office-phone').html('8 (812) 407-30-24');
			} else if($(this).attr('data-id') === 'city2'){
				$('.office-address').html('ул. Батюшкова, дом 11');
				$('.office-phone').html('8 (800) 775-35-97');
			} else if($(this).attr('data-id') === 'city3'){
				$('.office-address').html('ул. 1-я Суворова, дом 1');
				$('.office-phone').html('8 (800) 775-35-97');
			} else if($(this).attr('data-id') === 'city4'){
				$('.office-address').html('ул. Меркулова, дом 32');
				$('.office-phone').html('8 (800) 775-35-97');
			} else if($(this).attr('data-id') === 'city5'){
				$('.office-address').html('ул. Кольцовская, дом 68');
				$('.office-phone').html('8 (800) 775-35-97');
			} else if($(this).attr('data-id') === 'city6'){
				$('.office-address').html('Ворошиловский пр., дом 46');
				$('.office-phone').html('8 (800) 775-35-97');
			} else if($(this).attr('data-id') === 'city7'){
				$('.office-address').html('пр. Дзержинского, дом 211');
				$('.office-phone').html('8 (800) 775-35-97');
			} else if($(this).attr('data-id') === 'city8'){
				$('.office-address').html('ул. Советская, дом 42');
				$('.office-phone').html('8 (800) 775-35-97');
			} else if($(this).attr('data-id') === 'city9'){
				$('.office-address').html('ул. Вокзальная, дом 3');
				$('.office-phone').html('8 (800) 775-35-97');
			} else if($(this).attr('data-id') === 'city10'){
				$('.office-address').html('ул. Красная площадь, дом 7');
				$('.office-phone').html('8 (800) 775-35-97');
			} else if($(this).attr('data-id') === 'city11'){
				$('.office-address').html('пр. Ленина, д. 50, офис 503');
				$('.office-phone').html('8 (343) 288-77-39');
			} else if($(this).attr('data-id') === 'city12'){
				$('.office-address').html('ул. Новострой, дом 2');
				$('.office-phone').html('8 (800) 775-35-97');
			} else if($(this).attr('data-id') === 'city13'){
				$('.office-address').html('ул. Луначарского, дом 7');
				$('.office-phone').html('8 (800) 775-35-97');
			} else if($(this).attr('data-id') === 'city14'){
				$('.office-address').html('ул. Парижской Коммуны, д. 20');
				$('.office-phone').html('8 (843) 203-93-26');
			} else if($(this).attr('data-id') === 'city15'){
				$('.office-address').html('ул. Варварская, дом 32');
				$('.office-phone').html('8 (800) 775-35-97');
			} else if($(this).attr('data-id') === 'city16'){
				$('.office-address').html('ул. Советской армии, дом 6');
				$('.office-phone').html('8 (800) 775-35-97');
			} else if($(this).attr('data-id') === 'city17'){
				$('.office-address').html('ул. Свердлова, дом 1б');
				$('.office-phone').html('8 (800) 775-35-97');
			} else if($(this).attr('data-id') === 'city18'){
				$('.office-address').html('ул. Карбышева, дом 61 «В»');
				$('.office-phone').html('8 (800) 775-35-97');
			} else if($(this).attr('data-id') === 'city19'){
				$('.office-address').html('ул. 7-я Автодорога, д.42А');
				$('.office-phone').html('8 (800) 775-35-97');
			} else if($(this).attr('data-id') === 'city20'){
				$('.office-address').html('ул. Достоевского, дом 52');
				$('.office-phone').html('8 (800) 775-35-97');
			} else if($(this).attr('data-id') === 'city21'){
				$('.office-address').html('ул. Пашковская, дом 41');
				$('.office-phone').html('8 (800) 775-35-97');
			} else if($(this).attr('data-id') === 'city22'){
				$('.office-address').html('ул. Бульварная, дом 7');
				$('.office-phone').html('8 (800) 775-35-97');
			} else if($(this).attr('data-id') === 'city23'){
				$('.office-address').html('ул. Мичурина, дом 13');
				$('.office-phone').html('8 (800) 775-35-97');
			} else if($(this).attr('data-id') === 'city24'){
				$('.office-address').html('ул. Ватутина, дом 1');
				$('.office-phone').html('8 (800) 775-35-97');
			} else if($(this).attr('data-id') === 'city25'){
				$('.office-address').html('пр. Салавата Юлаева, дом 59, 4 этаж, офис 408');
				$('.office-phone').html('8 (800) 775-35-97');
			} else if($(this).attr('data-id') === 'city26'){
				$('.office-address').html('ул. Автодорожная, дом 40');
				$('.office-phone').html('8 (800) 775-35-97');
			}

			$('.office-phone').attr('href', 'tel:' + $('.office-phone').html() );
		});

		
	})();


	// slider
	$('.price-slider').slick({
		prevArrow: '<span class="prev-arrow"></span>',
		nextArrow: '<span class="next-arrow"></span>',
		adaptiveHeight: true
	});


	

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
			// var d = Math.floor(diff / 24);
			// if(d < 10) {
			// 	$(".days_1").html(0);
			// 	$(".days_2").html(d);
			// }else {
			// 	$(".days_1").html(Math.floor(d / 10));
			// 	$(".days_2").html(d % 10);
			// }
			setTimeout(timer_go, left);
		}
		setTimeout(timer_go, 0);
	}
	
	var time = $(".timer").attr("data-finish");
		timer(time);

})





