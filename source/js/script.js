let navMain = document.querySelector('.main-navigation');
let navToggle = document.querySelector('.main-navigation__toggle');
let slider = document.querySelector(".slider")

navMain.classList.remove('main-navigation--nojs');
navMain.classList.add('main-navigation--closed');

navToggle.addEventListener('click', function () {
	navMain.classList.toggle('main-navigation--closed');
});

if (slider) {
	let curtain = slider.querySelector(".slider__curtain")
	let sliderStyles = getComputedStyle(slider)
	let curtainPlaceStart
	let clientX

	function handleGrabCurtain (event) {
		curtainPlaceStart = +(sliderStyles.getPropertyValue("--curtain-place"))
		clientX = event.clientX
		window.addEventListener("pointermove", handleMoveCurtain)
	}

	function handleMoveCurtain (event) {
		let deltaX = event.clientX - clientX
		let cursorPlace = curtainPlaceStart + deltaX / slider.clientWidth
		let curtainPlace = Math.min(Math.max(cursorPlace, 0), 1)
		slider.style.setProperty("--curtain-place", `${curtainPlace}`)
	}

	function handleReleaseCurtaine () {
		window.removeEventListener("pointermove", handleMoveCurtain)
	}

	window.addEventListener("pointerup", handleReleaseCurtaine)

	curtain.addEventListener("pointerdown", handleGrabCurtain)
}
