import './less/index.less'

// Your code goes here!

// DECLARATIONS

// Navigation
const navigation = document.querySelector('nav');
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

// Destinations
const destinations = document.querySelectorAll('.destination');
const destinationsArray = Array.from(destinations);

// Destination: Fun in the Sun
const firstDestTitle = destinationsArray[0].querySelector('h4');
const firstDestPara = destinationsArray[0].querySelector('p');
const firstDestButton = destinationsArray[0].querySelector('button');

// Destination: Mountain Excursion
const secondDestTitle = destinationsArray[1].querySelector('h4');
const secondDestPara = destinationsArray[1].querySelector('p');
const secondDestButton = destinationsArray[1].querySelector('button');

// Destination: Island Getaway
const thirdDestTitle = destinationsArray[2].querySelector('h4');
const thirdDestPara = destinationsArray[2].querySelector('p');
const thirdDestButton = destinationsArray[2].querySelector('button');

// Footer
const footer = document.querySelector('footer');
const copyright = footer.querySelector('p');


// EVENT LISTENERS
secondTitle.addEventListener('click', function(event) {
	event.target.style.color = 'blue';
})

// Hover