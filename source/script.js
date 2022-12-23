let navMain = document.querySelector('.main-navigation__group');
let navToggle = document.querySelector('.main-navigation__toggle');

navMain.classList.remove('main-navigation__group--nojs');

navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('main-navigation__group--closed')) {
		navMain.classList.remove('main-navigation__group--closed');
		navMain.classList.add('main-navigation__group--opened');
	} else {
		navMain.classList.add('main-navigation__group--closed');
		navMain.classList.remove('main-navigation__group--opened');
	}
});
