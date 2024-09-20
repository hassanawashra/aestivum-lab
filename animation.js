// Function to apply dark mode
function applyDarkMode() {
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.getElementById('dark-mode-toggle').checked = isDarkMode;
}

// Function to toggle dark mode
function toggleDarkMode() {
    const checkbox = document.getElementById('dark-mode-toggle');
    document.body.classList.toggle('dark-mode', checkbox.checked);
    localStorage.setItem('darkMode', checkbox.checked ? 'enabled' : 'disabled');
}

// Function to trigger the animation
function animateHeading() {
    const heading = document.getElementById('main-heading');
    heading.style.animation = 'none';
    heading.offsetHeight; // Trigger reflow
    heading.style.animation = null;
}

// Function to toggle the menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// Apply dark mode and animate heading on page load
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const cards = document.querySelectorAll('.card'); // Select all card elements

    // Check for saved user preference
    if (localStorage.getItem('dark-mode') === 'enabled') {
        setTimeout(() => {
            body.classList.add('dark-mode');
            cards.forEach(card => card.classList.add('dark-mode')); // Add dark mode to cards
            toggle.checked = true;
        }, 0); // Delay to allow transition
    } else {
        // Ensure light mode is the default
        body.classList.remove('dark-mode');
        cards.forEach(card => card.classList.remove('dark-mode')); // Remove dark mode from cards
        toggle.checked = false;
    }

    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            setTimeout(() => {
                body.classList.add('dark-mode');
                cards.forEach(card => card.classList.add('dark-mode')); // Add dark mode to cards
            }, 0); // Delay to allow transition
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
            cards.forEach(card => card.classList.remove('dark-mode')); // Remove dark mode from cards
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});