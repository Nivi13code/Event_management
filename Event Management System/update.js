document.addEventListener('DOMContentLoaded', function () {
    const homeButton = document.getElementById('home-button');
    const logoutButton = document.getElementById('logout-button');
    const updateForm = document.getElementById('status-update-form');

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

    updateForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(updateForm);
        const selectedStatus = formData.get('status');

        // You can implement the status update logic here
        alert(`Status updated to: ${selectedStatus}`);
    });
});
