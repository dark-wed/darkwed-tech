function signup() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    if (!username || !password) return;

    if (username.value === "" || password.value === "") {
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("user", username.value);
    localStorage.setItem("pass", password.value);

    window.location.href = "dashboard.html";
}

function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}

window.addEventListener("DOMContentLoaded", function () {
    var welcome = document.getElementById("welcomeText");

    if (welcome) {
        var currentUser = localStorage.getItem("user");

        if (!currentUser) {
            window.location.href = "login.html";
        } else {
            welcome.textContent = "Welcome " + currentUser + " 👋";
        }
    }
});
