// script3.js

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Select the search box
    const searchInput = document.querySelector('.search-box');
    const categories = document.querySelectorAll('.category');

    // Add input event listener to the search box
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        categories.forEach(category => {
            const categoryName = category.querySelector('p').innerText.toLowerCase();
            if (categoryName.includes(searchTerm)) {
                category.style.display = 'flex'; // Show matching category
            } else {
                category.style.display = 'none'; // Hide non-matching category
            }
        });
    });

    // Profile button click event
    const profileButton = document.querySelector('.profile-button');
    profileButton.addEventListener('click', () => {
        alert('Profile button clicked!');
    });
});
