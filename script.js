'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
	if (elem.length > 1) {
		for (let i = 0; i < elem.length; i++) {
			elem[i].addEventListener(type, callback);
		}
	} else {
		elem.addEventListener(type, callback);
	}
};

/**
 * navbar toggle
 */

const navbar = document.querySelector('[data-navbar]');
const navTogglers = document.querySelectorAll('[data-nav-toggler]');
const navLinks = document.querySelectorAll('[data-nav-link]');
const overlay = document.querySelector('[data-overlay]');

const toggleNavbar = function () {
	navbar.classList.toggle('active');
	overlay.classList.toggle('active');
};

addEventOnElem(navTogglers, 'click', toggleNavbar);

const closeNavbar = function () {
	navbar.classList.remove('active');
	overlay.classList.remove('active');
};

addEventOnElem(navLinks, 'click', closeNavbar);

/**
 * header active when scroll down t0 100px
 */

const header = document.querySelector('[data-header]');
const backTopBtn = document.querySelector('[data-back-top-btn]');

const activeElem = function () {
	if (window.scrollY >= 100) {
		header.classList.add('active');
		backTopBtn.classList.add('active');
	} else {
		header.classList.remove('active');
		backTopBtn.classList.remove('active');
	}
};

addEventOnElem(window, 'scroll', activeElem);

/**
 * newsletter subscription form submission
 */
document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('contact-form');

	if (form) {
		form.addEventListener('submit', async (e) => {
			e.preventDefault();
			const email = form.email.value.trim();

			if (!email) {
				alert('Please enter a valid email.');
				return;
			}

			try {
				const res = await fetch('http://localhost:5000/api/subscribe', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ email }),
				});

				const data = await res.json();
				alert(data.message || 'Subscribed successfully!');
				form.reset(); // clear input after submit
			} catch (err) {
				console.error(err);
				alert('Something went wrong. Please try again later.');
			}
		});
	}
});
