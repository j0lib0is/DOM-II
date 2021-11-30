import './less/index.less'

// Your code goes here!

// DECLARATIONS

// Navigation
const title = document.querySelector('.logo-heading');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');
const navLinksArray = Array.from(navLinks);

// Header
const header = document.querySelector('.intro');
const headerImg = header.querySelector('img');
const headerTitle = header.querySelector('h2');
const headerPara = header.querySelector('p');

// Main Content
const mainContent = document.querySelectorAll('.content-section');
const mainContentArray = Array.from(mainContent);

// Main Content: Let's Go
const firstImg = mainContentArray[0].querySelector('img');
const firstTitle = mainContentArray[0].querySelector('h2');
const firstPara = mainContentArray[0].querySelector('p');

// Main Content: Adventure Awaits
const secondImg = mainContentArray[1].querySelector('img');
const secondTitle = mainContentArray[1].querySelector('h2');
const secondPara = mainContentArray[1].querySelector('p');

// Pick Your Destination
const thirdImg = document.querySelector('.content-destination img');
const thirdTitle = document.querySelector('.content-destination h2');
const thirdPara = document.querySelector('.content-destination p');

// Form
const form = document.querySelector('form');
const formField = document.querySelector('input');

// Destinations
const destinations = document.querySelectorAll('.destination');
const destinationsArray = Array.from(destinations);
const destinationSection = document.querySelector('.content-destination');

// Destination: Fun in the Sun
const funInTheSun = destinationsArray[0];
const firstDestTitle = destinationsArray[0].querySelector('h4');
const firstDestPara = destinationsArray[0].querySelector('p');
const firstDestButton = destinationsArray[0].querySelector('.btn');

// Destination: Mountain Excursion
const mountainExcursion = destinationsArray[1];
const secondDestTitle = destinationsArray[1].querySelector('h4');
const secondDestPara = destinationsArray[1].querySelector('p');
const secondDestButton = destinationsArray[1].querySelector('.btn');

// Destination: Island Getaway
const islandGetaway = destinationsArray[2];
const thirdDestTitle = destinationsArray[2].querySelector('h4');
const thirdDestPara = destinationsArray[2].querySelector('p');
const thirdDestButton = destinationsArray[2].querySelector('.btn');

// Footer
const footer = document.querySelector('footer');
const copyright = footer.querySelector('p');


// EVENT LISTENERS

// Mouseover
firstImg.addEventListener('mouseover', function(event) {
	event.target.src = 'https://picsum.photos/600/450';
})
secondImg.addEventListener('mouseover', function(event) {
	event.target.src = 'https://picsum.photos/600/450';
})

// Key Down
document.addEventListener('keydown', function(event) {
	if (event.key === 'r') {
		title.style.color = 'red';
	} else if (event.key === 'o') {
		title.style.color = 'orange';
	} else if (event.key === 'y') {
		title.style.color = 'yellow';
	} else if (event.key === 'g') {
		title.style.color = 'green';
	} else if (event.key === 'b') {
		title.style.color = 'blue';
	} else if (event.key === 'i') {
		title.style.color = 'indigo';
	} else if (event.key === 'v') {
		title.style.color = 'violet';
	}
})

// Focus In & Focus Out
formField.addEventListener('focusin', function(event) {
	formField.style.background = 'lightGrey';
})
formField.addEventListener('focusout', function(event) {
	formField.style.background = '';
})

// Double Click
let secretLink = document.createElement('a');
secretLink.classList.add('nav-link');
secretLink.textContent = 'You win $1,000,000!';
secretLink.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
nav.prepend(secretLink);
secretLink.style.display = 'none';

headerImg.addEventListener('dblclick', function(event) {
	secretLink.style.display = 'flex';
})

// Click
firstDestButton.addEventListener('click', function(event) {
	const prevSibling = firstDestButton.previousElementSibling;
	console.log(`User is interested in ${prevSibling.previousElementSibling.textContent}`);
})
secondDestButton.addEventListener('click', function(event) {
	const prevSibling = secondDestButton.previousElementSibling;
	console.log(`User is interested in ${prevSibling.previousElementSibling.textContent}`);
})
thirdDestButton.addEventListener('click', function(event) {
	const prevSibling = thirdDestButton.previousElementSibling;
	console.log(`User is interested in ${prevSibling.previousElementSibling.textContent}`);
})

// Mouse Enter + Mouse Out
funInTheSun.addEventListener('mouseenter', function(event) {
	funInTheSun.style.color = 'red';
})
funInTheSun.addEventListener('mouseout', function(event) {
	funInTheSun.style.color = 'black';
})
mountainExcursion.addEventListener('mouseenter', function(event) {
	mountainExcursion.style.color = 'red';
})
mountainExcursion.addEventListener('mouseout', function(event) {
	mountainExcursion.style.color = 'black';
})
islandGetaway.addEventListener('mouseenter', function(event) {
	islandGetaway.style.color = 'red';
})
islandGetaway.addEventListener('mouseout', function(event) {
	islandGetaway.style.color = 'black';
})

// Select
formField.addEventListener('select', function(event) {
	let selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
	console.log(`User selected: ${selection}`);
})