//products arrows

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

(() => {
	"use strict";

	const Slider = document.querySelector(".recomendations__products"),
		SliderItems = document.querySelectorAll(".recomendations__products-prod"),
		buttonLeft = document.querySelector(".recomendations__control-left"),
		buttonRight = document.querySelector(".recomendations__control-right");

	let currentScrollPosition = 0,
		tileWidth = SliderItems[0].offsetWidth,
		SliderStyle = window.getComputedStyle(Slider),
		gap = parseInt(SliderStyle.getPropertyValue("gap"), 10);

	//cant execute function with parameter in eventListener ;/
	function scrollLeft() {
		scrollProducts("left");
	}

	function scrollRight() {
		scrollProducts("right");
	}

	function scrollProducts(direction) {
		let maxScrollPosition =
			SliderItems.length * tileWidth +
			(SliderItems.length - 1) * gap -
			Slider.offsetWidth;

		let newScrollPosition;

		//update
		tileWidth = SliderItems[0].offsetWidth;
		SliderStyle = window.getComputedStyle(Slider);
		gap = parseInt(SliderStyle.getPropertyValue("gap"), 10);

		if (window.innerWidth > 767) {
			buttonLeft.style.display = "flex";
			buttonRight.style.display = "flex";
			buttonLeft.classList.remove("--js__arrowfixer");
			buttonRight.classList.remove("--js__arrowfixer");
			updateButtons();
			// SliderItems.forEach((x) => (x.style.animation = "ProducsAnimation .5s"));
			SliderItems.forEach((x) => x.classList.add("js__ProducsAnimation"));
			sleep(500).then(() => {
				SliderItems.forEach((x) => x.classList.remove("js__ProducsAnimation"));
			});
		}

		if (window.innerWidth < 767) {
			buttonLeft.style.display = "none";
			buttonRight.style.display = "none";
			buttonLeft.classList.add("--js__arrowfixer");
			buttonRight.classList.add("--js__arrowfixer");
		}

		updateButtons();

		setTimeout(() => {
			if (direction === "left") {
				newScrollPosition = currentScrollPosition - tileWidth - gap;

				if (newScrollPosition <= 0) {
					newScrollPosition = 0;
					buttonLeft.style.opacity = "0";
					buttonLeft.classList.add("--js__arrowfixer");

					setTimeout(() => {
						buttonLeft.style.display = "none";
						buttonLeft.classList.add("--js__arrowfixer");
					}, 300);
				}
			} else {
				newScrollPosition = currentScrollPosition + tileWidth + gap;

				if (newScrollPosition >= maxScrollPosition) {
					newScrollPosition = maxScrollPosition;
					buttonRight.style.opacity = "0";
					buttonRight.classList.add("--js__arrowfixer");

					setTimeout(() => {
						buttonRight.style.display = "none";
						buttonRight.classList.add("--js__arrowfixer");
					}, 300);
				}
			}

			currentScrollPosition = newScrollPosition;
			Slider.scrollTo(newScrollPosition, 0);
		}, 2);
	}

	buttonLeft.addEventListener("click", scrollLeft);
	buttonRight.addEventListener("click", scrollRight);

	function updateButtons() {
		if (
			Slider.offsetWidth <
			SliderItems.length * tileWidth + (SliderItems.length - 1) * gap
		) {
			setTimeout(() => {
				buttonLeft.style.opacity = "1";
				buttonRight.style.opacity = "1";
			}, 1);
		} else {
			setTimeout(() => {
				buttonLeft.style.opacity = "0";
				buttonRight.style.opacity = "0";
				buttonLeft.classList.remove("--js__arrowfixer");
				buttonRight.classList.remove("--js__arrowfixer");
			}, 1);
		}
	}
	updateButtons();

	setTimeout(() => {
		buttonLeft.style.opacity = "0";
		buttonLeft.classList.remove("--js__arrowfixer");
	}, 3);

	window.addEventListener("resize", updateButtons);

	const WindowSizeFixing = window.matchMedia("(max-width: 767px)");

	function ArrowFixer() {
		if (WindowSizeFixing.matches) {
			buttonLeft.style.display = "none";
			buttonRight.style.display = "none";
			buttonLeft.style.opacity = "0";
			buttonRight.style.opacity = "0";
		} else {
			buttonLeft.style.display = "Flex";
			buttonRight.style.display = "flex";
			buttonLeft.style.opacity = "1";
			buttonRight.style.opacity = "1";
		}
	}

	ArrowFixer(WindowSizeFixing);
	WindowSizeFixing.addListener(ArrowFixer);
})();
