// main.js

// Wait for the DOM to load completely
document.addEventListener("DOMContentLoaded", function () {
	// Enable smooth scrolling for all anchor links that reference an ID in the page
	const links = document.querySelectorAll("a[href^='#']");
	links.forEach((link) => {
		link.addEventListener("click", function (e) {
			e.preventDefault();
			const targetId = this.getAttribute("href").substring(1);
			const targetElement = document.getElementById(targetId);
			if (targetElement) {
				targetElement.scrollIntoView({
					behavior: "smooth",
				});
			}
		});
	});

	// Handle the contact form submission
	const form = document.getElementById("contact-form");
	form.addEventListener("submit", function (e) {
		e.preventDefault();
		// For demonstration purposes, show an alert message.
		// In a real application, you would send the form data to a server.
		alert("Thank you for your message! I will get back to you soon.");
		form.reset();
	});
});
