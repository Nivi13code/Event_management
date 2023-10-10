document.addEventListener('DOMContentLoaded', function () {
    const logoutButton = document.getElementById('logout-button');
    const updateButtons = document.querySelectorAll('.update-button');
    const deleteButtons = document.querySelectorAll('.delete-button');
    const updateButton = document.getElementById('update-button');

    logoutButton.addEventListener('click', function () {
        // Perform logout actions here (e.g., clear session data, redirect to the login page)
        // For now, let's just navigate back to the login page (assuming "login.html" is the login page)
        window.location.href = 'login.html';
    });

    // Handle click events for individual update buttons (each row)
    updateButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Implement the update action for a specific product status here
            alert('Update button clicked for a product.');
            window.location.href='update.html';
        });
    });

    // Handle click events for individual delete buttons (each row)
    deleteButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Implement the delete action for a specific product status here
            alert('Delete button clicked for a product.');
        });
    });

    // Handle click event for the "Update" button at the bottom of the table
    updateButton.addEventListener('click', function () {
        // Implement a bulk update action for all selected product statuses here
        alert('Bulk update action performed.');
    });
});
