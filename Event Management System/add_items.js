document.addEventListener('DOMContentLoaded', function () {
    const productStatusButton = document.getElementById('product-status');
    const requestItemButton = document.getElementById('request-item');
    const viewProductsButton = document.getElementById('view-products');
    const addProductButton = document.getElementById('add-product');
    const logoutButton = document.getElementById('logout');

    productStatusButton.addEventListener('click', function () {
        // Implement product status functionality here
        alert('Product Status clicked');
    });

    requestItemButton.addEventListener('click', function () {
        // Implement request item functionality here
        alert('Request Item clicked');
    });

    viewProductsButton.addEventListener('click', function () {
        // Redirect or navigate to the "View Products" page
        // Replace 'view_products.html' with the actual page URL
        window.location.href = 'view_products.html';
    });

    addProductButton.addEventListener('click', function () {
        // Implement add product functionality here
        alert('Add Product clicked');
    });

    logoutButton.addEventListener('click', function () {
        // Perform logout actions here (e.g., clear session data, redirect to the login page)
        // For now, let's just navigate back to the login page (assuming "login.html" is the login page)
        window.location.href = 'login.html';
    });
});
