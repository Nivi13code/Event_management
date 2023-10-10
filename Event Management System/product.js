document.addEventListener('DOMContentLoaded', function () {
    const homeButton = document.getElementById('home-button');
    const logoutButton = document.getElementById('logout-button');
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');

    homeButton.addEventListener('click', function () {
        // Redirect or navigate to the home page
        // Replace 'home.html' with the actual page URL
        window.location.href = 'home.html';
    });

    logoutButton.addEventListener('click', function () {
        // Perform logout actions here (e.g., clear session data, redirect to the login page)
        // For now, let's just navigate back to the login page (assuming "login.html" is the login page)
        window.location.href = 'login.html';
    });

    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const product = button.getAttribute('data-product');
            // Implement adding the selected product to the cart here
            alert(`Added ${product} to the cart`);
        });
    });
});
