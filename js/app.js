/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

	let navbar = document.querySelector("#navbar__list");
	let header = document.querySelector("header");
	let sections = document.querySelectorAll('section');
	let navbarList;
	let sectionID;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

	function createNav(section){
		navbarList = document.createElement("li");
		navbarList.textContent = section.getAttribute("data-nav");
		sectionID = section.getAttribute("id");
		navbarList.setAttribute("data-section-id", `#${sectionID}`);
		navbarList.classList.add("menu__link");
		navbar.appendChild(navbarList);		
	};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
	sections.forEach(createNav);
	

// Add class 'active' to section when near top of viewport
	function addActiveClass(section){
		let sectionRect = section.getBoundingClientRect();
		if(sectionRect.top >=-10 &&
			sectionRect.top <10){
			section.classList.add("your-active-class");
		} else if (sectionRect.top > window.innerHeight ||
					  sectionRect.bottom <= 0){
			section.classList.remove("your-active-class");
		}
	}

// Scroll to anchor ID using scrollTO event
	function scrollToSection(){
		document.querySelector(this.getAttribute("data-section-id")).scrollIntoView({behavior:"smooth"});
		header.classList.add("hide");
	};

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu - Place an item for menu
// Expand the nav upon click
	let menuButton = document.querySelector("#menu");
	menuButton.addEventListener("click", function(){
		header.classList.remove("hide");
	})

// Scroll to section on link click
	let navbarLinks = document.querySelectorAll('li');
	console.log("navbarLInks called");
	navbarLinks.forEach(function(link){
		link.addEventListener("click", scrollToSection);
	});

// Set sections as active
	window.addEventListener("scroll", () => {
		sections.forEach(addActiveClass);
	});