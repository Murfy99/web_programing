var loginContainer = document.getElementById('loginContainer');
var isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
var modal = document.getElementById('myModal');
var openModalBtn = document.getElementById('headerButtonLogin');
var closeModalBtn = document.getElementById('closeModalBtn');
var submitBtn = document.getElementById('submitBtn');
var profileContainer = document.getElementById('profileContainer');
var usernameDisplay = document.getElementById('usernameDisplay');
var exitBtn = document.getElementById('exitBtn');

if (isLoggedIn) {
    var username = document.getElementById('modalUsername').value;
    loginContainer.style.display = 'none';
    profileContainer.style.display = 'block';
    usernameDisplay.textContent  = username;
} else {
    loginContainer.style.display = 'block';
    profileContainer.style.display = 'none';
}

openModalBtn.onclick = function() {
    modal.style.display = 'block';
};

closeModalBtn.onclick = function() {
    modal.style.display = 'none';
};

exitBtn.onclick = function() {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('username')
    localStorage.removeItem('password')

    loginContainer.style.display = 'block';
    profileContainer.style.display = 'none';
}

submitBtn.onclick = function() {
    var username = document.getElementById('modalUsername').value;
    var password = document.getElementById('modalPassword').value;

    if (username === 'example' && password === 'password') {
        alert('شما با موفقیت وارد');
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username); 
        localStorage.setItem('password', password);

        modal.style.display = 'none';
        loginContainer.style.display = 'none';
        profileContainer.style.display = 'block';

        usernameDisplay.innerText = username

        window.location.href = 'home.html';
    } else {
        alert('نام کاربری یا رمز عبور نامعتبر');
    }
};