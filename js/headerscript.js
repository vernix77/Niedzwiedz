const burgerbtn = document.querySelector(".header__menu");
const hamburger = document.querySelector(".nav__items");
const menuWrapper = document.querySelector(".menu__wrapper");
const Logo = document.querySelector(".header__logo-mobile");
const LogoBGC = document.querySelector(".nav__logo-second");
const WindowSize1 = window.matchMedia("(max-width: 600px)");

function Menu() {
	if (WindowSize.matches) {
		hamburger.classList.toggle("active");
		Logo.classList.toggle("js__logo--fixed");
		LogoBGC.classList.toggle("js__logo--fixed");
		hamburger.classList.toggle("deactive");
		menuWrapper.classList.toggle("active--menu");
		menuWrapper.classList.toggle("deactive--menu");
	} else {
		hamburger.classList.remove("active");
		hamburger.classList.remove("deactive");
		menuWrapper.classList.remove("active--menu");
		menuWrapper.classList.remove("deactive--menu");
		Logo.classList.remove("js__logo--fixed");
		LogoBGC.classList.remove("js__logo--fixed");
	}
}

function NavWindow() {
	if (WindowSize1.matches) {
		hamburger.classList.add("deactive");
		menuWrapper.classList.add("deactive--menu");
	} else {
		hamburger.classList.remove("active");
		hamburger.classList.remove("deactive");
		menuWrapper.classList.remove("active--menu");
		menuWrapper.classList.remove("deactive--menu");
		Logo.classList.remove("js__logo--fixed");
		LogoBGC.classList.remove("js__logo--fixed");
	}
}

burgerbtn.addEventListener("click", Menu);

NavWindow(WindowSize1);
WindowSize1.addListener(NavWindow);
