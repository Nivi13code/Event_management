document.addEventListener('DOMContentLoaded', function () {
    const grandTotalElement = document.getElementById('grand-total');
    const orderNowButton = document.getElementById('ordernowbutton');
    const checkoutForm = document.getElementById('checkout-form');

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

    // Handle form submission (you can implement the actual submission logic)
    checkoutForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // You can process the form data and complete the order here
        alert('Order submitted successfully!');
        // You can redirect to a confirmation page or perform other actions as needed
    });
    orderNowButton.addEventListener('click', function () {
        // Perform logout actions here (e.g., clear session data, redirect to the login page)
        // For now, let's just navigate back to the login page (assuming "login.html" is the login page)
        window.location.href = 'success.html';
    });
    
});
