const addButton = document.getElementById(`add-item`);
const mainInput = addButton.previousElementSibling;
const list = document.getElementById(`list`);
let count = 0;
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