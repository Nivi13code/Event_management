let signbtn = document.getElementById('signbtn');
document.addEventListener('signbtn', function () {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const category = document.getElementById('category').value;

        // Validate the form data as needed

        // You can send the form data to the server for further processing here
        // For example, send it as a JSON object to the server using fetch or an XMLHttpRequest

        // Display a success message or handle errors based on the server response
    });
});
