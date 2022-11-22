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

