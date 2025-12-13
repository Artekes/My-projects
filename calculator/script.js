const display = document.getElementById('display');

function appendItem(symbol) {
	if (display.value === 'Error') {
		clearDisplay();
	}
	display.value += symbol;
}

function clearDisplay() {
	display.value = "";
}

function calculate() {
	try {
		display.value = eval(display.value);
	}
	catch(error) {
		display.value = 'Error';
	}
}

function deleteItem() {
	display.value === 'Error' ? clearDisplay() : display.value = display.value.slice(0, -1);
}