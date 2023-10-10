// Get references to the buttons by their IDs
const maintainUserButton = document.getElementById('maintain-user-button');
const logoutButton = document.getElementById('logout-button');
const homeButton = document.getElementById('home-button');
const maintainVendorButton = document.getElementById('maintain-vendor-button');

// Add click event listeners to the buttons
maintainUserButton.addEventListener('click', function () {
    // Redirect to the "Maintain User" page when the button is clicked
    window.location.href = 'maintain.html'; // Replace with the actual URL
});

logoutButton.addEventListener('click', function () {
    // Perform logout action here or redirect to the logout page
    alert('Logout clicked.'); // Replace with your logout logic
});

homeButton.addEventListener('click', function () {
    // Redirect to the home page when the button is clicked
    window.location.href = 'home.html'; // Replace with the actual URL
});

maintainVendorButton.addEventListener('click', function () {
    // Redirect to the "Maintain Vendor" page when the button is clicked
    window.location.href = 'maintain_vendor.html'; // Replace with the actual URL
});
