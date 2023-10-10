document.addEventListener('DOMContentLoaded', function () {
    const vendorSelect = document.getElementById('vendor-select');
    const cartButton = document.getElementById('cart');
    const guestListButton = document.getElementById('guestlist');
    const orderStatusButton = document.getElementById('orderstatus');
    const logoutButton = document.getElementById('logout');

    cart.addEventListener('click', function () {
        // Implement cart functionality here
        alert('Cart clicked');
        window.location.href = 'cart.html'
    });

    guestListButton.addEventListener('click', function () {
        // Implement guest list functionality here
        alert('Guest List clicked');
    });

    orderStatusButton.addEventListener('click', function () {
        // Implement order status functionality here
        alert('Order Status clicked');
    });

    logoutButton.addEventListener('click', function () {
        // Perform logout actions here (e.g., clear session data, redirect to the login page)
        // For now, let's just navigate back to the login page (assuming "login.html" is the login page)
        window.location.href = 'login.html';
    });
    orderstatus.addEventListener('click', function () {
        // Redirect or take any other action when the Cancel button is clicked
        // For now, let's just navigate back to the homepage (assuming "index.html" is the homepage)
        window.location.href = 'product_stat.html';
    });
    vendor.addEventListener('click', function () {
        // Redirect or take any other action when the Cancel button is clicked
        // For now, let's just navigate back to the homepage (assuming "index.html" is the homepage)
        window.location.href = 'vendor_page.html';
    });
});
