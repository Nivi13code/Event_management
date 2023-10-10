document.addEventListener('DOMContentLoaded', function () {
    const homeButton = document.getElementById('home-button');
    const logoutButton = document.getElementById('logout-button');
    const productStatusButton = document.getElementById('product-status-button');
    const requestItemButton = document.getElementById('request-item-button');
    const viewProductButton = document.getElementById('view-product-button');
    const checkoutButton = document.getElementById('checkoutbutton');
    

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

    productStatusButton.addEventListener('click', function () {
        // Redirect or navigate to the product status page
        // Replace 'product_status.html' with the actual page URL
        window.location.href = 'product_stat.html';
    });

    requestItemButton.addEventListener('click', function () {
        // Redirect or navigate to the request item page
        // Replace 'request_item.html' with the actual page URL
        window.location.href = 'request_item.html';
    });

    viewProductButton.addEventListener('click', function () {
        // Redirect or navigate to the view product page
        // Replace 'view_product.html' with the actual page URL
        window.location.href = 'view_product.html';
    });

    // You can dynamically add cart items to the table tbody using JavaScript
    // Example:
    const tbody = document.querySelector('.cart-table tbody');
    const cartItems = [
        { name: 'Rose', price: '$5', quantity: 3, total: '$15' },
        { name: 'Marigold', price: '$3', quantity: 2, total: '$6' },
        // Add more items as needed
    ];

    cartItems.forEach((item) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.quantity}</td>
            <td>${item.total}</td>
        `;
        tbody.appendChild(row);
    });
});
// Existing code ...

document.addEventListener('DOMContentLoaded', function () {
    const homeButton = document.getElementById('home-button');
    const logoutButton = document.getElementById('logout-button');
    const productStatusButton = document.getElementById('product-status-button');
    const requestItemButton = document.getElementById('requestitembutton');
    const viewProductButton = document.getElementById('view-product-button');
    const grandTotalElement = document.getElementById('grand-total'); // New line


    checkoutButton.addEventListener('click', function () {
        // Implement the checkout functionality here
        window.location.href = 'checkout.html'
        // You can redirect to a checkout page or perform other actions as needed
    });
    requestItemButton.addEventListener('click', function () {
        // Implement the checkout functionality here
        window.location.href = 'request.html'
        // You can redirect to a checkout page or perform other actions as needed
    });

    // Example cart items
    const cartItems = [
        { name: 'Rose', price: 5, quantity: 3 },
        { name: 'Marigold', price: 3, quantity: 2 },
        // Add more items as needed
    ];

    // Calculate and display the grand total
    function calculateGrandTotal() {
        let grandTotal = 0;

        cartItems.forEach((item) => {
            const total = item.price * item.quantity;
            grandTotal += total;
        });

        grandTotalElement.textContent = `$${grandTotal}`;
    }

    calculateGrandTotal(); // Initial calculation

    // Existing code ...
});
