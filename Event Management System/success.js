document.addEventListener('DOMContentLoaded', function () {
    const grandTotalElement = document.getElementById('grand-total');
    const continueShoppingButton = document.getElementById('continue-shopping-button');

    // Retrieve order details from localStorage (you can replace this with your actual order data)
    const orderDetails = JSON.parse(localStorage.getItem('orderDetails'));

    // Display order details on the success page
    if (orderDetails) {
        document.getElementById('grand-total').textContent = `$${orderDetails.grandTotal}`;
        document.getElementById('name').textContent = orderDetails.name;
        document.getElementById('address').textContent = orderDetails.address;
        document.getElementById('pincode').textContent = orderDetails.pincode;
        document.getElementById('total-payment').textContent = `$${orderDetails.totalPayment}`;
        document.getElementById('email').textContent = orderDetails.email;
        document.getElementById('phone').textContent = orderDetails.phone;
        document.getElementById('city').textContent = orderDetails.city;
        document.getElementById('state').textContent = orderDetails.state;
    }

    // Handle "Continue Shopping" button click
    continueShoppingButton.addEventListener('click', function () {
        // Redirect or navigate to the shopping page or any other desired page
        // Replace 'shopping_page.html' with the actual page URL
        window.location.href = 'shopping_page.html';
    });
});
