const burgerbtn = document.querySelector(".header_menu");
const hamburger = document.querySelector(".nav_items");
const WindowSize1 = window.matchMedia("(max-width: 600px)");

function Menu() {
	if (WindowSize.matches) {
		hamburger.classList.toggle("active");
		hamburger.classList.toggle("deactive");
	} else {
		hamburger.classList.remove("active");
		hamburger.classList.remove("deactive");
	}
}

function NavWindow() {
	if (WindowSize1.matches) {
		console.log(`wok`);
	} else {
		hamburger.classList.remove("active");
		hamburger.classList.remove("deactive");
	}
}

burgerbtn.addEventListener("click", Menu);

NavWindow(WindowSize1);
WindowSize1.addListener(NavWindow);
