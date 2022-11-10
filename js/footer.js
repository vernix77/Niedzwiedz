const JsSliderclick1 = document.querySelector(".js__sliderclick--info1");
const FooterList1 = document.querySelector(".js__footerlist--first");
const JsSliderclick2 = document.querySelector(".js__sliderclick--info2");
const FooterList2 = document.querySelector(".js__footerlist--second");
const JsSliderclick3 = document.querySelector(".js__sliderclick--info3");
const FooterList3 = document.querySelector(".js__footerlist--third");
const JsSliderclick4 = document.querySelector(".js__sliderclick--info4");
const FooterList4 = document.querySelector(".js__footerlist--fourth");
const WindowSize = window.matchMedia("(max-width: 860px)");

function ToggleShowPopFooter1() {
	if (WindowSize.matches) {
		FooterList1.classList.toggle("ShowPop");
		JsSliderclick1.classList.toggle("ArrowRotate");
	} else {
		FooterList1.classList.add("ShowPop");
		JsSliderclick1.classList.add("ArrowRotate");
	}
}
function ToggleShowPopFooter2() {
	if (WindowSize.matches) {
		FooterList2.classList.toggle("ShowPop");
		JsSliderclick2.classList.toggle("ArrowRotate");
	} else {
		FooterList2.classList.add("ShowPop");
		JsSliderclick2.classList.add("ArrowRotate");
	}
}
function ToggleShowPopFooter3() {
	if (WindowSize.matches) {
		FooterList3.classList.toggle("ShowPop");
		JsSliderclick3.classList.toggle("ArrowRotate");
	} else {
		FooterList3.classList.add("ShowPop");
		JsSliderclick3.classList.add("ArrowRotate");
	}
}
function ToggleShowPopFooter4() {
	if (WindowSize.matches) {
		FooterList4.classList.toggle("ShowPop");
		JsSliderclick4.classList.toggle("ArrowRotate");
	} else {
		FooterList4.classList.add("ShowPop");
		JsSliderclick4.classList.add("ArrowRotate");
	}
}

JsSliderclick1.addEventListener("click", ToggleShowPopFooter1);
JsSliderclick2.addEventListener("click", ToggleShowPopFooter2);
JsSliderclick3.addEventListener("click", ToggleShowPopFooter3);
JsSliderclick4.addEventListener("click", ToggleShowPopFooter4);

ToggleShowPopFooter1(WindowSize);
WindowSize.addListener(ToggleShowPopFooter1);
ToggleShowPopFooter2(WindowSize);
WindowSize.addListener(ToggleShowPopFooter2);
ToggleShowPopFooter3(WindowSize);
WindowSize.addListener(ToggleShowPopFooter3);
ToggleShowPopFooter4(WindowSize);
WindowSize.addListener(ToggleShowPopFooter4);