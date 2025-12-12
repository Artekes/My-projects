const myDiv = document.getElementById("div");

myDiv.addEventListener("mouseover", event => {
    event.target.textContent = "Don't click!!!";
    event.target.style.backgroundColor = "yellow";
});

myDiv.addEventListener("mouseout", event => {
    event.target.textContent = "Click me ._.";
    event.target.style.backgroundColor = "rgb(6, 247, 166)";
});

myDiv.addEventListener("click", event => {
    event.target.textContent = "Ouch!!!";
    event.target.style.backgroundColor = "tomato";
});
