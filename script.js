const carousel = document.getElementById(`carousel`);
let scrollValue;
let intervalId;

function prevCard() {
	scrollValue = carousel.scrollLeft - window.innerWidth * 33 / 100 + 5;
	document.getElementById(`prev_button`).disabled = true;
	if (scrollValue > 0) {
		intervalId = setInterval(() => {
			if (carousel.scrollLeft > scrollValue) {carousel.scrollLeft -= 10;}
			else {
				clearInterval(intervalId);
				document.getElementById(`prev_button`).removeAttribute(`disabled`);
			}
		}, 1);
	} else {
		intervalId = setInterval(() => {
			if (carousel.scrollLeft > 0) {carousel.scrollLeft -= 10;}
			else {
				clearInterval(intervalId);
				carousel.scrollLeft = 0;
				document.getElementById(`prev_button`).removeAttribute(`disabled`);
			}
		}, 1);
	}
}

function nextCard() {
	scrollValue = carousel.scrollLeft + window.innerWidth * 33 / 100;
	document.getElementById(`next_button`).disabled = true;
	if (scrollValue < window.innerWidth) {
		intervalId = setInterval(() => {
			if (carousel.scrollLeft < scrollValue) {carousel.scrollLeft += 10;}
			else {
				clearInterval(intervalId);
				document.getElementById(`next_button`).removeAttribute(`disabled`);
			}
		}, 1);
	} else {
		intervalId = setInterval(() => {
			if (carousel.scrollLeft <= window.innerWidth * 33 / 100 * 4 - 30) {
				carousel.scrollLeft += 10;
			}
			else {
				clearInterval(intervalId);
				carousel.scrollLeft = window.innerWidth * 33 / 100 * 4 - 29;
				document.getElementById(`next_button`).removeAttribute(`disabled`);
			}
		}, 1);
	}
}