const arrow_left = document.querySelector(".banner_control-left");
const arrow_right = document.querySelector(".banner_control-right");
const main_img = document.querySelector(".main_img");
const main_img_second = document.querySelector(".main_img_second");
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
