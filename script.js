// script.js
// Define your JavaScript functions here

// Simulated user points (you would normally store this on the server)
let userPoints = 10;
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
    } else {
        alert("Please fill in both username and password fields.");
    }
});

// Function to view the premium book
document.getElementById("viewBookBtn").addEventListener("click", function () {
    if (loggedInUser) {
        if (userPoints >= 5) {
            userPoints -= 5; // Deduct 5 points for viewing the book
            updatePointsDisplay();
            document.getElementById("premiumBook").style.display = "block";
        } else {
            alert("You don't have enough points to view this book.");
        }
    } else {
        alert("Please log in to view this book.");
    }
});

// Add this to your existing script.js

// Example book data
const books = [
    { title: "Book 1", pdfUrl: "book1.pdf", cost: 5 },
    // Add more books with their details
];

// Function to create a pop-up window with a PDF
function openPdf(pdfUrl) {
    const pdfWindow = window.open(pdfUrl, "_blank", "width=600,height=400");
    if (pdfWindow) {
        pdfWindow.focus();
    } else {
        alert("Please allow pop-ups for this site to view the PDF.");
    }
}

// Add "Read" button click event listeners to each book
const readButtons = document.querySelectorAll(".read-button");
readButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        // Check if the user is logged in and has enough points
        if (loggedInUser && userPoints >= books[index].cost) {
            // Deduct points from the user (you would update this logic)
            userPoints -= books[index].cost;
            updatePointsDisplay();
            // Open the PDF in a pop-up window
            openPdf(books[index].pdfUrl);
        } else {
            alert("You must be logged in and have enough points to read this book.");
        }
    });
});
