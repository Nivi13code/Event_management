// JavaScript for the "Maintain User" page

// Check if the user is logged in as an admin (you can replace this with your authentication logic)
const isAdmin = true; // Example: Assuming the user is an admin

// Get references to the buttons by their IDs
const homeButton = document.getElementById('home-button');
const logoutButton = document.getElementById('logout-button');
const addMemberButton = document.getElementById('add-member-button');
const updateMemberButton = document.getElementById('update-member-button');
const addUserButton = document.getElementById('add-user-button');
const updateUserButton = document.getElementById('update-user-button');

// Add click event listeners to the buttons
homeButton.addEventListener('click', function () {
    // Redirect to the home page when the Home button is clicked
    window.location.href = 'index.html'; // Replace with the actual URL
});

logoutButton.addEventListener('click', function () {
    // Perform logout action here or redirect to the logout page
    alert('Logout clicked.'); // Replace with your logout logic
});

addMemberButton.addEventListener('click', function () {
    // Redirect to the "Add Member" page when the button is clicked
    window.location.href = 'add_member.html'; // Replace with the actual URL
});

updateMemberButton.addEventListener('click', function () {
    // Redirect to the "Update Member" page when the button is clicked
    window.location.href = 'admin_signup.html'; // Replace with the actual URL
});

if (isAdmin) {
    // If the user is an admin, enable the "User Management" section
    addUserButton.addEventListener('click', function () {
        // Redirect to the "Add User" page when the button is clicked
        window.location.href = 'buttons.html'; // Replace with the actual URL
    });

    updateUserButton.addEventListener('click', function () {
        // Redirect to the "Update User" page when the button is clicked
        window.location.href = 'maintain.html'; // Replace with the actual URL
    });
} else {
    // If the user is not an admin, disable the "User Management" section
    document.getElementById('user-management-section').style.display = 'none';
}
