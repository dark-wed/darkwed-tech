function signup() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("user", username);
    localStorage.setItem("pass", password);

    window.location.href = "dashboard.html";
}

function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}

window.onload = function () {
    let currentUser = localStorage.getItem("user");
    let welcome = document.getElementById("welcomeText");

    if (welcome) {
        if (!currentUser) {
            window.location.href = "login.html";
        } else {
            welcome.innerText = "Welcome " + currentUser + " 👋";
        }
    }
};
