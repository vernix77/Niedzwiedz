
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

// slajder produktowy

const counterProduct = document.querySelectorAll(
	".recomendations__products-prod-couter-input"
);
const counterMinusProduct = document.querySelectorAll(
	".recomendations__products-prod-minus"
);
const counterPlusProduct = document.querySelectorAll(
	".recomendations__products-prod-plus"
);

let count = 1;

updateProducts();

for (let i = 0, len = counterPlusProduct.length; i < len; i++) {
	counterPlusProduct[i].addEventListener("click", () => {
		counterProduct[i].value++;
	});
}

for (let i = 0, len = counterMinusProduct.length; i < len; i++) {
	counterMinusProduct[i].addEventListener("click", () => {
		if (counterProduct[i].value > 1) {
			count = counterProduct[i].value--;
		}
	});
}

function updateProducts() {
	for (let i = 0, len = counterProduct.length; i < len; i++) {
		counterProduct[i].value++;
	}
}

