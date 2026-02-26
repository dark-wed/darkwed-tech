function signup() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "" || password === "") {
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
