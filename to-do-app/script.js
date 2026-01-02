const addButton = document.getElementById(`add-item`);
const mainInput = addButton.previousElementSibling;
const list = document.getElementById(`list`);
const footer = document.getElementById(`footer`);
let count = 0;
if (window.innerWidth > 660) setInterval(getSelectedText, 50);

if (window.innerWidth <= 660) {
	mainInput.placeholder = "write something";
}

mainInput.addEventListener(`keydown`, event => {
	if (event.key === "Enter") {
		addItem();
	}
});

function addItem() {
	if (mainInput.value !== "") {
		count++;
		const element = document.createElement("li");
		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.id = `to-do-${count}`;
		const label = document.createElement("label");
		label.htmlFor = `to-do-${count}`;
		label.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="transparent"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>`
		const span = document.createElement("span");
		span.textContent = mainInput.value;
		const button = document.createElement("button");
		button.onclick = deleteItem;
		button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>`
		element.appendChild(checkbox);
		element.appendChild(label);
		element.appendChild(span);
		element.appendChild(button);
		list.appendChild(element);
		mainInput.value = "";
	}
}

function deleteItem(element) {
	let target = element.target
	if (target.nodeName == "path") {
		target = target.parentNode;
	}
	target = target.parentNode.parentNode;
	target.classList.add("fade");
	setTimeout(() => target.remove(), 500);
}

function getSelectedText() {
	const selection = window.getSelection().toString();
	if(selection.length > 0) {
		// console.log(window.getSelection().getRangeAt(0).getBoundingClientRect());
		const element = window.getSelection().focusNode.parentNode;
		if (element.nodeName === `SPAN`) showMenu();
	} else {
		footer.style.display = `none`;
	}
}

function applyStyle(style) {
	const selection = window.getSelection().toString();
	const element = window.getSelection().focusNode.parentNode;
	console.log(element);
	if(selection.length > 0 && element.nodeName === `SPAN`) {
		const elementText = element.innerText;
		const span = document.createElement("span");;
		switch (style) {
		case `bold`:
			span.style.fontWeight = `bold`;
			break;
		case `italic`:
			span.style.fontStyle = `italic`;
			break;
		case `underline`:
			span.style.textDecoration = `underline`;
			break;
		case `hightlight`:
			span.style.backgroundColor = `#12F6CE`;
			break; 
		}
		span.innerHTML = selection;
		const originalPart = elementText.split(selection);
		element.innerHTML = originalPart[0];
		element.appendChild(span);
		element.innerHTML += originalPart[1];
		console.log(element.innerHTML);
	}
}

function showMenu() {
	const textPos = window.getSelection().getRangeAt(0).getBoundingClientRect();
	footer.style.display = `block`;
	footer.style.top = window.getSelection().getRangeAt(0).getBoundingClientRect().top + `px`;
	footer.style.left = (textPos.width / 2 + textPos.left) + "px";
	// footer.style.left = window.getSelection().getRangeAt(0).getBoundingClientRect().right + `px`;
	footer.style.translate = `-50% -110%`;
}