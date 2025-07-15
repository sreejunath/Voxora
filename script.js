// Function to close the popup
function closePopup() {
    document.getElementById('popup').classList.remove('active');
}

// Show popup only once per session
window.onload = function () {
    if (!sessionStorage.getItem('popupShown')) {
        setTimeout(() => { // Add a slight delay for better UX
            document.getElementById('popup').classList.add('active');
            sessionStorage.setItem('popupShown', 'true');
        }, 1000); // Popup appears after 1 second
    } else {
        document.getElementById('popup').style.display = 'none'; // Directly hide if already shown
    }
};

// Form submission handler for "Under Construction" message
function showUnderConstruction(event) {
    event.preventDefault(); // Prevent the default form submission
    alert("This part is under construction. Please contact us via phone or WhatsApp for service requests.");
    // Optionally, you can clear the form after the alert
    document.getElementById('serviceRequestForm').reset();
}

// Header Collapse and Scroll to Top functionality
const header = document.querySelector('header');
const headerH1 = document.querySelector('header h1'); // Get the h1 element
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const scrollThreshold = 100; // Pixels scrolled before header collapses

// Store original h1 content
const originalH1Content = headerH1.innerHTML;
const scrolledH1Content = 'Voxora System'; // Text to display when scrolled

window.onscroll = function () {
    if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
        header.classList.add('scrolled');
        headerH1.innerHTML = scrolledH1Content; // Change h1 text when scrolled
        scrollToTopBtn.style.display = "block";
    } else {
        header.classList.remove('scrolled');
        headerH1.innerHTML = originalH1Content; // Revert h1 text when not scrolled
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});
document.querySelectorAll('.product').forEach(product => {
    observer.observe(product);
});
document.querySelectorAll('#testimonials .testimonial-card, #features .feature-item').forEach(item => {
    observer.observe(item);
});
// Observe new sections as well
document.querySelectorAll('#service-request .request-form-container, #amc-organization .amc-content, #amc-organization ul li').forEach(item => { // Changed ID in JS
    observer.observe(item);
});
// === GPU Carousel Manual Scroll Buttons ===
function scrollGPUs(direction) {
    const container = document.getElementById('gpuCarousel');
    const scrollAmount = 280; // Amount to scroll each time
    container.scrollBy({
        left: scrollAmount * direction,
        behavior: 'smooth'
    });
};
