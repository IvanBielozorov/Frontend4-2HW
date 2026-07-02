const box = document.querySelector("#box");
const button = document.querySelector(".toggleTaskTwo");
button.addEventListener("click", onButtonClick);

function onButtonClick(e) {
    box.classList.toggle("on");
}

function moveBox(event) {
  box.style.left = `${event.clientX -25}px`;
  box.style.top = `${event.clientY -25}px`;
}

const debounceMoveBox = _.debounce(moveBox, 100);

window.addEventListener("mousemove", debounceMoveBox);