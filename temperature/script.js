const userInput = document.getElementById('degrees');
const farenheit = document.getElementById('farenheit');
const celsius = document.getElementById('celsius');
const submitButton = document.getElementById('submit');
const resultLabel = document.getElementById('result');

submitButton.onclick = function(){
	console.log('started');
	if (isNaN(Number(userInput.value))) {
		resultLabel.textContent = `Enter a number!`;
	} else {
		if (farenheit.checked) {
			let value = Number(userInput.value);
			let result = value * 9 / 5 + 32;
			result = result.toFixed(1);
			resultLabel.textContent = `${result}°C`;
		} else if (celsius.checked) {
			let value = Number(userInput.value);
			let result = (value - 32) * 5 / 9;
			result = result.toFixed(1);
			resultLabel.textContent = `${result}°F`;
		}
	}
}