document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === '1234') {
        window.location.href = 'home.html';
    } else {
        alert('Invalid login credentials!');
    }
});

const is_user_logged_in = () => {
    return new Promise((resolve) => {
        customer_id = localStorage.getItem("logged_in_as_user_id") || "";
        resolve();
    })
}