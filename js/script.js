const slider = document.querySelector('.slider');
const sliderItems = slider.querySelectorAll('.slider-item');
const sliderPrevBtn = document.querySelectorAll('.projects__arrow-item')[0];
const sliderNextBtn = document.querySelectorAll('.projects__arrow-item')[1];

let sliderCount = 0;

sliderNextBtn.addEventListener('click', function () {
	if (sliderCount < sliderItems.length - 1) {
		sliderCount++;
	}
	else {
		sliderCount = 0;
	}
	slider.style.transform = `translateX(-${sliderCount * (sliderItems[0].clientWidth + 30)}px)`
})

sliderPrevBtn.addEventListener('click', function () {
	if (sliderCount > 0) {
		sliderCount--;
	}
	else {
		sliderCount = sliderItems.length - 1;
	}
	slider.style.transform = `translateX(-${sliderCount * (sliderItems[0].clientWidth + 30)}px)`
})


const feedbackSlider = document.querySelector('.feedback .slider');
const feedbackSliderItems = feedbackSlider.querySelectorAll('.slider-item');
const feedbackSliderPrevBtn = document.querySelectorAll('.feedback .projects__arrow-item')[0];
const feedbackSliderNextBtn = document.querySelectorAll('.feedback .projects__arrow-item')[1];

let feedbackSliderCount = 0;

if (feedbackSliderNextBtn)
	feedbackSliderNextBtn.addEventListener('click', function () {
		if (feedbackSliderCount < feedbackSliderItems.length - 1) {
			feedbackSliderCount++;
		}
		else {
			feedbackSliderCount = 0;
		}
		feedbackSlider.style.transform = `translateX(-${feedbackSliderCount * (feedbackSliderItems[0].clientWidth)}px)`
	})

if (feedbackSliderPrevBtn)
	feedbackSliderPrevBtn.addEventListener('click', function () {
		if (feedbackSliderCount > 0) {
			feedbackSliderCount--;
		}
		else {
			feedbackSliderCount = feedbackSliderItems.length - 1;
		}
		feedbackSlider.style.transform = `translateX(-${feedbackSliderCount * (feedbackSliderItems[0].clientWidth)}px)`
	})



window.addEventListener('resize', init);

function init() {
	slider.style.width = sliderItems.length * sliderItems[0].clientWidth + sliderItems.length - 1 * 30 + 'px';
	feedbackSliderItems.forEach(function (i) {
		i.style.minWidth = document.querySelector('.feedback .container').clientWidth + 'px';
	});
}

init();



const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__menu');
const html = document.querySelector('html');

burger.addEventListener('click', function () {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	html.classList.toggle('lock');
})


const headerLinks = document.querySelectorAll('.header a');
headerLinks.forEach(i = () => {
	i.preventDefault;
})
headerLinks.forEach((item, index) => item.addEventListener('click', function () {
	item.preventDefault;
	burger.classList.remove('active');
	menu.classList.remove('active');
	html.classList.remove('lock');
	switch (index) {
		case 0:
			scrollToTargetAdjusted('home')
			break;
		case 1:
			scrollToTargetAdjusted('about')
			break;
		case 2:
			scrollToTargetAdjusted('projects')
			break;
		case 3:
			scrollToTargetAdjusted('contacts')
			break;
		default:
			break;

	}
}));

const footerLinks = document.querySelectorAll('.footer a');
footerLinks.forEach(i = () => {
	i.preventDefault;
})
footerLinks.forEach((item, index) => item.addEventListener('click', function () {
	switch (index) {
		case 0:
			scrollToTargetAdjusted('home')
			break;
		case 1:
			scrollToTargetAdjusted('about')
			break;
		case 2:
			scrollToTargetAdjusted('projects')
			break;
		case 3:
			scrollToTargetAdjusted('contacts')
			break;
		default:
			break;

	}
}));

function scrollToTargetAdjusted(e) {
	var element = document.getElementById(e);
	console.log(element)
	var headerOffset = document.querySelector('.header').clientHeight;
	var elementPosition = element.getBoundingClientRect().top;
	var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

	window.scrollTo({
		top: offsetPosition,
		left: 0,
		behavior: "smooth"
	});
}