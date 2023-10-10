document.addEventListener('DOMContentLoaded', function () {
    const yourItemsButton = document.getElementById('your-items');
    const addNewItemButton = document.getElementById('add-new-item');
    const transactionsButton = document.getElementById('transactions');
    const logoutButton = document.getElementById('logout');

    youritems.addEventListener('click', function () {
        // Redirect or navigate to the "Your Items" page
        // Replace 'your_items.html' with the actual page URL
        window.location.href = 'cart.html';
    });

    addnewitem.addEventListener('click', function () {
        // Redirect or navigate to the "Add New Item" page
        // Replace 'add_new_item.html' with the actual page URL
        window.location.href = 'add_items.html';
    });

    transactions.addEventListener('click', function () {
        // Redirect or navigate to the "Transactions" page
        // Replace 'transactions.html' with the actual page URL
        window.location.href = 'transactions.html';
    });

    logout.addEventListener('click', function () {
        // Perform logout actions here (e.g., clear session data, redirect to the login page)
        // For now, let's just navigate back to the login page (assuming "login.html" is the login page)
        window.location.href = 'visit.html';
    });
});
