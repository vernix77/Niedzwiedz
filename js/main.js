// main banner

const arrow_left = document.querySelector(".banner__control-left");
const arrow_right = document.querySelector(".banner__control-right");
const main_img = document.querySelector(".main__img");
const main_img_second = document.querySelector(".main__img__second");
const one = document.querySelectorAll(".one");
const two = document.querySelectorAll(".two");

function PhotoSwap() {
	main_img.classList.toggle("see");
	main_img_second.classList.toggle("saw");
	one.forEach((x) => x.classList.toggle("active__banner--one"));
	two.forEach((x) => x.classList.toggle("active__banner--two"));
}

arrow_left.addEventListener("click", PhotoSwap);
arrow_right.addEventListener("click", PhotoSwap);

//swipe
const slider = document.querySelector(".main__banner");
//add touch-action: pan-y; if browser is Chrome

if (navigator.appVersion.indexOf("Chrome/") != -1) {
	document.querySelector(".main__banner").style.touchAction = "pan-y";
}

let xDown = null;
let yDown = null;

let swiped = false;

slider.addEventListener("touchstart", handleTouchStart, false);
slider.addEventListener("touchmove", handleTouchMove, false);

function getTouches(event) {
	return event.touches;
}

function handleTouchStart(event) {
	const firstTouch = getTouches(event)[0];
	xDown = firstTouch.clientX;
	yDown = firstTouch.clientY;
	swiped = false;
}

function handleTouchMove(event) {
	if (!swiped) {
		//check if already scrolled
		if (!xDown || !yDown) {
			return;
		}

		let xUp = event.touches[0].clientX;
		let yUp = event.touches[0].clientY;

		let xDiff = xDown - xUp;
		let yDiff = yDown - yUp;

		if (Math.abs(xDiff) > Math.abs(yDiff)) {
			//check if swipe is horizontal
			if (xDiff > 0) {
				//check if swipe is left or right
				PhotoSwap();
			} else {
				PhotoSwap();
			}
		} else {
			if (yDiff > 0) {
				//check if swipe is up or down
				//console.log('down');
			} else {
				//console.log('up');
			}
		}
		swiped = true;
	}
}

//products arrows

(() => {
	"use strict";

	const slideer = document.querySelector(".recomendations__products"),
		slideerItems = document.querySelectorAll(".recomendations__products-prod"),
		buttonLeft = document.querySelector(".recomendations__control-left"),
		buttonRight = document.querySelector(".recomendations__control-right");

	let currentScrollPosition = 0,
		tileWidth = slideerItems[0].offsetWidth,
		slideerStyle = window.getComputedStyle(slideer),
		gap = parseInt(slideerStyle.getPropertyValue("gap"), 10);

	//cant execute function with parameter in eventListener ;/
	function scrollLeft() {
		scrollProducts("left");
	}

	function scrollRight() {
		scrollProducts("right");
	}

	function scrollProducts(direction) {
		let maxScrollPosition =
			slideerItems.length * tileWidth +
			(slideerItems.length - 1) * gap -
			slideer.offsetWidth;

		let newScrollPosition;

		//update
		tileWidth = slideerItems[0].offsetWidth;
		slideerStyle = window.getComputedStyle(slideer);
		gap = parseInt(slideerStyle.getPropertyValue("gap"), 10);

		if (window.innerWidth > 767) {
			buttonLeft.style.display = "flex";
			buttonRight.style.display = "flex";
			updateButtons();
		}

		if (window.innerWidth < 767) {
			buttonLeft.style.display = "none";
			buttonRight.style.display = "none";
		}

		updateButtons();

		setTimeout(() => {
			if (direction === "left") {
				newScrollPosition = currentScrollPosition - tileWidth - gap;

				if (newScrollPosition <= 0) {
					newScrollPosition = 0;
					buttonLeft.style.opacity = "0";

					setTimeout(() => {
						buttonLeft.style.display = "none";
					}, 300);
				}
			} else {
				newScrollPosition = currentScrollPosition + tileWidth + gap;

				if (newScrollPosition >= maxScrollPosition) {
					newScrollPosition = maxScrollPosition;
					buttonRight.style.opacity = "0";

					setTimeout(() => {
						buttonRight.style.display = "none";
					}, 300);
				}
			}

			currentScrollPosition = newScrollPosition;
			slideer.scrollTo(newScrollPosition, 0);
		}, 2);
	}

	buttonLeft.addEventListener("click", scrollLeft);
	buttonRight.addEventListener("click", scrollRight);

	function updateButtons() {
		if (
			slideer.offsetWidth <
			slideerItems.length * tileWidth + (slideerItems.length - 1) * gap
		) {
			setTimeout(() => {
				buttonLeft.style.opacity = "1";
				buttonRight.style.opacity = "1";
			}, 1);
		} else {
			setTimeout(() => {
				buttonLeft.style.opacity = "0";
				buttonRight.style.opacity = "0";
			}, 1);
		}
	}
	updateButtons();

	setTimeout(() => {
		buttonLeft.style.opacity = "0";
	}, 3);

	window.addEventListener("resize", updateButtons);
})();
