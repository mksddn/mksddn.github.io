import '~/node_modules/slick-carousel/slick/slick.min.js'

document.addEventListener('DOMContentLoaded', () => {

	// NAVMENU

	// FUNCTIONS
	// назначаем поведение при наведении/уходе мыши на пункт меню с подменю
	function setHoverBahavior(nestedMenu, submenuToggler, submenu) {
		// если это не мобилка
		if (window.innerWidth > 991) {
			nestedMenu.addEventListener('mouseover', () => {
				// показываем подменю при наведении мыши
				openSubmenu(submenuToggler, submenu)
			})
			nestedMenu.addEventListener('mouseout', () => {
				// скрываем подменю при уходе мыши
				closeSubmenu(submenuToggler, submenu)
			})
		}
	}

	// по клику за пределами пункта меню с подменю закрываем подменю
	function closeSubmenuByClick(nestedMenu, submenuToggler, submenu) {
		document.addEventListener('click', function (e) {
			if (!nestedMenu.contains(e.target)) {
				closeSubmenu(submenuToggler, submenu)
			}
		});
	}

	// при нажатии на escape закрываем подменю
	function closeSubmenuByEscape(nestedMenu, submenuToggler, submenu) {
		document.addEventListener('keydown', evt => {
			if (evt.key === 'Escape') {
				closeSubmenu(submenuToggler, submenu);
			}
		});
	}

	// функция открытия подменю
	function openSubmenu(submenuToggler, submenu) {
		submenuToggler.classList.add('opened');
		submenu.classList.add('opened');
	}
	// функция закрытия подменю
	function closeSubmenu(submenuToggler, submenu) {
		submenuToggler.classList.remove('opened');
		submenu.classList.remove('opened');
	}

	// функция тоггла состояния бургера и мобильного меню
	function toggleMobileMenuAndBurger() {
		menuBurger.classList.toggle('active');
		navmenu.classList.toggle('opened');
	}

	// DEFINE VARIABLES
	// определяем меню, пункты меню, бургер
	const navmenu = document.querySelector('.navmenu-list');
	const menuLink = navmenu.querySelectorAll('.menu-item a');
	const menuButton = document.querySelector('.navmenu-button');
	const menuBurger = document.querySelector('.navmenu-burger');

	// создаем и оформляем тогглер для подменю
	const submenuTogglerElement = document.createElement('button');
	submenuTogglerElement.innerHTML = '<span class="screen-reader-text">Open menu</span>'
	submenuTogglerElement.classList.add('sub-menu-toggle');

	// определяем пункты меню с подменю
	const nestedMenus = document.querySelectorAll('.navmenu .menu-item-has-children');

	// к каждому пункту меню с подменю
	nestedMenus.forEach((nestedMenu) => {
		// вставляем тогглер для подменю
		nestedMenu.insertBefore(submenuTogglerElement.cloneNode(true), nestedMenu.querySelector('.sub-menu'));

		//определяем вставленный тогглер и соответсвтующий ему подменю
		const submenuToggler = nestedMenu.querySelector('.sub-menu-toggle');
		const submenu = nestedMenu.querySelector('.sub-menu');

		// назначаем поведение при наведении/уходе мыши на пункт меню с подменю
		setHoverBahavior(nestedMenu, submenuToggler, submenu);

		// по клику за пределами пункта меню с подменю закрываем подменю
		closeSubmenuByClick(nestedMenu, submenuToggler, submenu)

		// при нажатии на escape закрываем подменю
		closeSubmenuByEscape(nestedMenu, submenuToggler, submenu)
	});

	// определяем все тогглеры
	const submenuTogglers = document.querySelectorAll('.menu-item-has-children .sub-menu-toggle');

	// для каждого тогглера
	submenuTogglers.forEach(toggler => {
		// определяем подменю тогглера
		const submenu = toggler.parentNode.querySelector('.sub-menu');
		// по клику на тогглер
		toggler.addEventListener('click', () => {
			// тогглим состояние тогглера и подменю
			toggler.classList.toggle('opened');
			submenu.classList.toggle('opened');
		})
	});

	// по клику по бургеру тогглим состояние меню и бургера
	menuButton.addEventListener('click', () => toggleMobileMenuAndBurger());

	// для каждой сылки в меню
	menuLink.forEach(function (menuLink) {
		// по клику по ссылке тогглим состояние меню и бургера
		menuLink.addEventListener('click', () => toggleMobileMenuAndBurger());
	});

	// NAVMENU END


	// STICKY HEADER
	// When the user scrolls the page, execute myFunction
	window.onscroll = function () { myFunction() };

	// Get the header
	var header = document.querySelector(".site-header__bottom");

	// Get the offset position of the navbar
	var sticky = header.offsetTop;

	// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function myFunction() {
		if (window.pageYOffset > sticky) {
			header.classList.add("sticky");
		} else {
			header.classList.remove("sticky");
		}
	}
	// END STICKY HEADER


	const $slider = $('.products-carousel__wrapper');
	const $progressBar = $('.progress');
	const $progressBarLabel = $('.slider__label');

	$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		const calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

		$progressBar
			.css('background-size', calc + '% 100%')
			.attr('aria-valuenow', calc);

		$progressBarLabel.text(calc + '% completed');
	});

	$slider.slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 400,
		autoplay: true,
		// arrows: false,
		// prevArrow: '<button class="slide-arrow prev-arrow"></button>',
		// nextArrow: '<button class="slide-arrow next-arrow"></button>'
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 648,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.last-posts__wrapper').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 400,
		// arrows: false,
		// prevArrow: '<button class="slide-arrow prev-arrow"></button>',
		// nextArrow: '<button class="slide-arrow next-arrow"></button>'
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					centerMode: true,
					centerPadding: '100px',
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 771,
				settings: {
					centerMode: true,
					centerPadding: '60px',
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

})
