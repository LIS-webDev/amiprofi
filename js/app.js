const reviewSlider = new Swiper('.review-slider', {
	slidesPerView: 1,
	spaceBetween: 47,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	breakpoints: {
		768: {
			slidesPerView: 3
		},
		480: {
			slidesPerView: 2
		}
	}
});

const certificateSlider = new Swiper('.certificate-slider', {
	slidesPerView: 3,
	spaceBetween: 47,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
});

// Menu
const menu = document.querySelector('.menu');
let menuLinks = menu.querySelectorAll('.menu__link');

let lastLink = document.createElement('div');
lastLink.className = 'menu__link';
let link = document.createElement('a');
link.innerText = '...';
link.setAttribute('href', '#');
lastLink.append(link);


let clientWidth = document.documentElement.clientWidth;
if (clientWidth < 1212) {
	menuLinks[menuLinks.length - 1].classList.add('hide');
	menuLinks[menuLinks.length - 2].classList.add('hide');
	menu.append(lastLink);
}

if (clientWidth < 992) {
	menuLinks[menuLinks.length - 3].classList.add('hide');
	menuLinks[menuLinks.length - 4].classList.add('hide');
	menu.append(lastLink);
}

let removedLinks = [];
menuLinks.forEach(link => {
	if (link.classList.contains('hide')) {
		link.classList.remove('hide');
		removedLinks.push(link);
		link.remove();
	}
});

window.addEventListener('resize', () => {
	if (document.documentElement.clientWidth < 1212) {
		menuLinks[menuLinks.length - 1].classList.add('hide');
		menuLinks[menuLinks.length - 2].classList.add('hide');
		if (lastLink.classList.contains('hide')) {
			lastLink.classList.remove('hide');
		}
		menu.append(lastLink);
	} else {
		menuLinks[menuLinks.length - 1].classList.remove('hide');
		menuLinks[menuLinks.length - 2].classList.remove('hide');
		menu.append(menuLinks[menuLinks.length - 2]);
		menu.append(menuLinks[menuLinks.length - 1]);
		lastLink.classList.add('hide');
	}

	if (document.documentElement.clientWidth < 992) {
		menuLinks[menuLinks.length - 3].classList.add('hide');
		menuLinks[menuLinks.length - 4].classList.add('hide');
	} else {
		menuLinks[menuLinks.length - 3].classList.remove('hide');
		menuLinks[menuLinks.length - 4].classList.remove('hide');
	}

});

// 
