document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Mobile Navigation Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. FAQ Accordion Logic
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            // Toggle active class
            answer.classList.toggle('active');
            
            // Change the + to - sign
            const span = question.querySelector('span');
            if (answer.classList.contains('active')) {
                span.textContent = '-';
            } else {
                span.textContent = '+';
            }
        });
    });

    // 3. Booking Form Submission Alert
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevents page reload
            alert("Thank you! Your booking request has been sent to TevinSax. He will contact you shortly.");
            bookingForm.reset(); // Clears the form
        });
    }
});