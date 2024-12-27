// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust to add some spacing from top
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.querySelector("form").addEventListener("submit", function(e) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const motivation = document.getElementById("motivation").value;

    if (name === "" || email === "" || motivation === "") {
        alert("Please fill out all fields.");
        e.preventDefault(); // Prevent form submission if any field is empty
    }
});

// Button Hover Animation
const buttons = document.querySelectorAll('.cta-btn');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = '0.3s';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});