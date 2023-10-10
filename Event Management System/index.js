document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const cancelButton = document.getElementById('cancel-button');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // You can add your login logic here
        // For example, send the username and password to a server for authentication

        // Display a success message or handle errors based on the server response
        // For now, let's just display an alert for demonstration purposes
        alert(`Logged in as ${username}`);
    });

    cancelButton.addEventListener('click', function () {
        // Redirect or take any other action when the Cancel button is clicked
        // For now, let's just navigate back to the homepage (assuming "index.html" is the homepage)
        window.location.href = 'index.html';
    });
    loginbtn.addEventListener('click', function () {
        // Redirect or take any other action when the Cancel button is clicked
        // For now, let's just navigate back to the homepage (assuming "index.html" is the homepage)
        window.location.href = 'user_portal.html';
    });

});
