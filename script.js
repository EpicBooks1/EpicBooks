// Initialize simulated user points and logged-in user
let userPoints = 0;
let loggedInUser = null;

// Update the points display
function updatePointsDisplay() {
    document.getElementById("points").textContent = userPoints;
}

// Function to earn points
document.getElementById("earnPointsBtn").addEventListener("click", function () {
    userPoints += 1; // Simulate earning 1 point
    updatePointsDisplay();
});

// Function to show the login form
document.getElementById("loginBtn").addEventListener("click", function () {
    document.getElementById("loginForm").style.display = "block";
});

// Function to handle login form submission
document.getElementById("submitLogin").addEventListener("click", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulated user authentication (replace with your authentication logic)
    if (username === "user" && password === "password") {
        loggedInUser = username;
        document.getElementById("userStatus").innerHTML = `<p>Welcome, ${loggedInUser}!</p>`;
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("logoutBtn").style.display = "block"; // Show "Log Out" button
        document.getElementById("earnPointsBtn").style.display = "block"; // Show "Earn Points" button after login
    } else {
        alert("Login failed. Please check your credentials.");
    }
});

// Function to handle signup form submission
document.getElementById("submitSignup").addEventListener("click", function (event) {
    event.preventDefault();
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;

    // Simulated user registration (replace with your registration logic)
    // For simplicity, this example allows any username and password.
    if (newUsername && newPassword) {
        alert("Sign up successful! You can now log in.");
        // Optionally, you can automatically log in the user here.
        document.getElementById("logoutBtn").style.display = "block"; // Show "Log Out" button
        document.getElementById("earnPointsBtn").style.display = "block"; // Show "Earn Points" button after signup
    } else {
        alert("Please fill in both username and password fields.");
    }
});

// Function to handle logout
document.getElementById("logoutBtn").addEventListener("click", function () {
    loggedInUser = null; // Clear the logged-in user
    document.getElementById("userStatus").innerHTML = "<p>You are not logged in.</p>";
    document.getElementById("logoutBtn").style.display = "none"; // Hide "Log Out" button
    document.getElementById("earnPointsBtn").style.display = "none"; // Hide "Earn Points" button after logout
});

// Function to handle image gallery navigation (replace with your image URLs and page URLs)
document.querySelectorAll(".view-button").forEach(function (button) {
    button.addEventListener("click", function () {
        const imageTitle = this.parentElement.querySelector("h3").textContent;
        alert(`You clicked on "${imageTitle}". Redirect to another page here.`);
        // Replace the alert with the actual redirection logic
    });
});
