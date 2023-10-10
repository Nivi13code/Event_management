document.addEventListener('DOMContentLoaded', function () {
    const homeButton = document.getElementById('homebutton');
    const logoutButton = document.getElementById('logoutbutton');
    const shopItemsButtons = document.querySelectorAll('.shopitemsbutton');

    homeButton.addEventListener('click', function () {
        // Redirect or navigate to the home page
        // Replace 'home.html' with the actual page URL
        window.location.href = 'index.html';
    });

    logoutButton.addEventListener('click', function () {
        // Perform logout actions here (e.g., clear session data, redirect to the login page)
        // For now, let's just navigate back to the login page (assuming "login.html" is the login page)
        window.location.href = 'login.html';
    });

    shopitemsbutton.forEach(function (button) {
        button.addEventListener('click', function () {
            // Implement shop items functionality here
            // You can navigate to a page that shows the vendor's shop items
            alert('Shop Items clicked');
        });
    });
    b1.addEventListener('click', function () {
        // Redirect or navigate to the home page
        // Replace 'home.html' with the actual page URL
        window.location.href = 'product.html';
    });
    b4.addEventListener('click', function () {
        // Redirect or navigate to the home page
        // Replace 'home.html' with the actual page URL
        window.location.href = 'product.html';
    });
    b2.addEventListener('click', function () {
        // Redirect or navigate to the home page
        // Replace 'home.html' with the actual page URL
        window.location.href = 'product.html';
    });
    b3.addEventListener('click', function () {
        // Redirect or navigate to the home page
        // Replace 'home.html' with the actual page URL
        window.location.href = 'product.html';
    });

});
