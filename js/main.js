const arrow_left = document.querySelector(".banner_control-left");
const arrow_right = document.querySelector(".banner_control-right");
const main_img = document.querySelector(".main_img");
const main_img_second = document.querySelector(".main_img_second");
const main_p = document.getElementById("main_p");
const main_p_second = document.getElementById("main_p_second");
const main_p_third = document.getElementById("main_p_third");

function PhotoSwap() {
	main_img.classList.toggle("see");
	main_img_second.classList.toggle("saw");
	if (main_img.classList.contains("see")) {
		main_p.innerHTML = "Philips HUE";
		main_p_second.innerHTML = "Oświetl swój dom";
		main_p_third.innerHTML =
			"Wyobraź sobie, że jednym dotknięciem wyłączasz wszystkie światła.";
	} else {
		main_p.innerHTML = "Poznaj SEDNA";
		main_p_second.innerHTML = "Schneider Electric";
		main_p_third.innerHTML =
			"Sedna to osprzęt elektroinstalacyjny o wyrazistym kształcie oraz unikalnej formie.";
	}
}

arrow_left.addEventListener("click", PhotoSwap);
arrow_right.addEventListener("click", PhotoSwap);
