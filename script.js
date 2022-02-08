const square = document.querySelector("div");
const buttons = document.querySelectorAll("button");
buttons[0].onclick = () => square.style.animationPlayState='paused'
buttons[1].onclick = () => square.style.animationPlayState='running'