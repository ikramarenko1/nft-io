/*=============== Show Menu ===============*/
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu')
	})
}

if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu')
	})
}

/*=============== Remove Menu by clicking on the link MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== Change Background Header ===============*/
const scrollHeader = () => {
	const header = document.getElementById('header')
	this.scrollY >= 50 ? header.classList.add('header-bg') : header.classList.remove('header-bg')
}

window.addEventListener('scroll', scrollHeader)

/*=============== Scroll Reveal Animation ===============*/
const sr = ScrollReveal({
	origin: 'bottom',
	distance: '60px',
	duration: 2500
})

sr.reveal(`.home__images`, {distance: '120px', delay: 400})
sr.reveal(`.home__title`, {delay: 1000})
sr.reveal(`.home__description`, {delay: 1200})
sr.reveal(`.home__button`, {delay: 1400})
sr.reveal(`.home__footer`, {delay: 1600})
sr.reveal(`.home__data div`, {origin: 'right', interval: 100, delay: 1800})

/*=============== Timer ===============*/
const timerHours = document.getElementById('hours')
const timerMinutes = document.getElementById('minutes')
const timerSeconds = document.getElementById('seconds')

setInterval(() => {
	let date = new Date()
	let hours = 23 - date.getHours()
	let minutes = 59 - date.getMinutes()
	let seconds = 59 - date.getSeconds()

	timerHours.innerHTML = hours

	if (minutes < 10 && seconds < 10) {
		timerMinutes.innerHTML = "0" + minutes
		timerSeconds.innerHTML = "0" + seconds
	} else if (minutes < 10 && seconds >= 10) {
		timerMinutes.innerHTML = "0" + minutes
		timerSeconds.innerHTML = seconds
	} else if (seconds < 10 && minutes >= 10) {
		timerMinutes.innerHTML = minutes
		timerSeconds.innerHTML = "0" + seconds
	} else {
		timerMinutes.innerHTML = minutes
		timerSeconds.innerHTML = seconds
	}
}, 1000)