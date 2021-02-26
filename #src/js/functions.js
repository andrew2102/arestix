//  Menu
// let iconMenu = document.querySelector('.icon-menu');
// if (iconMenu != null) {
// 	let delay = 500;
// 	let body = document.querySelector('body');
// 	let menuBody = document.querySelector('.menu__body');
// 	iconMenu.addEventListener('click', () => {
// 		if (!body.classList.contains('_wait')) {
// 			body_lock(delay);
// 			iconMenu.classList.toggle('_active');
// 			menuBody.classList.toggle('_active');
// 		}
// 	});
// }

function ibg() {
	let ibg = document.querySelectorAll('._ibg');
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage =
				'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();
