var open = document.querySelector(".banner__button");
var popup = document.querySelector(".popup__main");
var close = document.querySelector(".popup__close");
var input = popup.querySelector("input");


open.addEventListener("click", function () {
	popup.classList.remove("popup__open");
    input.focus()
});

close.addEventListener("click", function () {
	popup.classList.add("popup__open");
	open.focus();
});

window.addEventListener("keydown", function (e) {
    console.log(e.code)
	if (e.code === "Escape") {
		popup.classList.add("popup__open");
		open.focus();
	}
});