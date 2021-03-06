/*********** Slider Starts here ****************/

// Get the images
var sliderImages = Array.from(document.querySelectorAll(".slider img"));

// Count the number of slides
const numberOfSlides = sliderImages.length;
var currentSlide = 1;

// create the slider bullets container
var ul = document.createElement("ul");
ul.setAttribute("class", "slider-bullets");

// create the slider bullets
for (let listItem = 1; listItem <= numberOfSlides; listItem++) {
	var li = document.createElement("li");
	li.setAttribute("data-store", listItem);

	// add li to ul
	ul.appendChild(li);
}

// add the sliders to page
var slidesContainer = document.getElementById("slidesContainer");
slidesContainer.appendChild(ul);

// get the slides bullets elements
var ulChildren = Array.from(ul.children);

function removeActive() {
	// remove active class from the images
	sliderImages.forEach(function removeActiveImg(img) {
		if (img.classList.contains("active")) {
			img.classList.remove("active");
		}
	});

	// remove the active class from slider bullets
	ulChildren.forEach(function removeActivebullets(bullet) {
		if (bullet.classList.contains("active")) {
			bullet.classList.remove("active");
		}
	});
}

// Set default slide number
function navSlides() {
	removeActive();
	// add active class to current slide image
	sliderImages[currentSlide - 1].classList.add("active");

	// add active class to current bullet
	ulChildren[currentSlide - 1].classList.add("active");
}
navSlides();

// set active slide & bullet
function setActive() {
	ul.addEventListener("click", e => {
		if (e.target.getAttribute("data-store") != null) {
			currentSlide = e.target.getAttribute("data-store");
			navSlides();
		} else {
			return; // do no thing
		}
	});
}

setActive();
/*********** Slider Ends here ****************/

/*********** Hamberger Menu Starts Here *********/
const hambergerMenu = document.getElementById("hamberger-menu");
const navbar = document.getElementById("navbar");
let menuStatus = false;
let navHeight = navbar.clientHeight;

hambergerMenu.addEventListener("click", function showAndHide() {
	const dropDown = setInterval(() => {
		if (!menuStatus) {
			navHeight += 20;
			Object.assign(navbar.style, {
				display: "block",
				height: navHeight + "px"
			});
			// Stop the height when reaching the max height of the nav menu
			if (navHeight > 298) {
				clearInterval(dropDown);
				menuStatus = true;
			}
		} else {
			navHeight -= 20;
			navbar.style.height = navHeight + "px";
			// Hide the menu 
			if (navHeight < 2) {
				clearInterval(dropDown);
				menuStatus = false;
				navbar.style.display = "none";
			}
		}
	}, 10);
});
/*********** Hamberger Menu Ends Here *********/
