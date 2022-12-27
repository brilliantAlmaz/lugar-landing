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

feedbackSliderNextBtn.addEventListener('click', function () {
	if (feedbackSliderCount < feedbackSliderItems.length - 1) {
		feedbackSliderCount++;
	}
	else {
		feedbackSliderCount = 0;
	}
	feedbackSlider.style.transform = `translateX(-${feedbackSliderCount * (feedbackSliderItems[0].clientWidth)}px)`
})

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

init()

