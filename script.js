let users = [];

function signup() {
    let username = document.getElementById("signup-username").value;
    let password = document.getElementById("signup-password").value;
    let secretCode = document.getElementById("secret-code").value;

    if (secretCode !== "Blues") {
        alert("Invalid Secret Code! Access Denied.");
        return;
    }

    users.push({ username, password });
    alert("Signup Successful! Now login.");
    showLogin();
}

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    } else {
        alert("Invalid Credentials! Try again.");
    }
}

function showLogin() {
    document.getElementById("signup-container").style.display = "none";
    document.getElementById("login-container").style.display = "block";
}

function showSignup() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("signup-container").style.display = "block";
}

function revealLogo() {
    document.querySelector('.hidden-logo').style.display = 'block';
}

function sendMessage() {
    let inputField = document.getElementById("chat-input");
    let messageBox = document.getElementById("chat-messages");

    if (inputField.value.trim() !== "") {
        let newMessage = document.createElement("p");
        newMessage.innerHTML = `<strong>You:</strong> ${inputField.value}`;
        messageBox.appendChild(newMessage);

        inputField.value = "";
        messageBox.scrollTop = messageBox.scrollHeight;
    }
}
