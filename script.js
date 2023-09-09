<script>
    document.addEventListener("DOMContentLoaded", function () {
        const pointsElement = document.getElementById("points");
        const userStatusElement = document.getElementById("userStatus");
        const loginBtn = document.getElementById("loginBtn");
        const signupBtn = document.getElementById("signupBtn");
        const logoutBtn = document.getElementById("logoutBtn");
        const loginForm = document.getElementById("loginForm");
        const signupForm = document.getElementById("signupForm");
        const submitLogin = document.getElementById("submitLogin");
        const submitSignup = document.getElementById("submitSignup");
        const viewBookBtn = document.getElementById("viewBookBtn");
        const premiumBook = document.getElementById("premiumBook");

        // Mock user data
        let isLoggedIn = false;
        let userPoints = 10;

        // Initial state
        updateUI();

        // Show/hide login and signup forms
        loginBtn.addEventListener("click", function () {
            loginForm.style.display = "block";
            signupForm.style.display = "none";
        });

        signupBtn.addEventListener("click", function () {
            signupForm.style.display = "block";
            loginForm.style.display = "none";
        });

        // Login functionality
        submitLogin.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent form submission
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Mock login logic (replace with your actual login logic)
            if (username === "your_username" && password === "your_password") {
                isLoggedIn = true;
                userPoints = 10; // You can set the user's points here
                updateUI();
            } else {
                alert("Login failed. Please check your credentials.");
            }
        });

        // Signup functionality
        submitSignup.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent form submission
            const newUsername = document.getElementById("newUsername").value;
            const newPassword = document.getElementById("newPassword").value;

            // Mock signup logic (replace with your actual signup logic)
            // Here, we assume a successful signup
            isLoggedIn = true;
            userPoints = 10; // You can set the user's points here
            updateUI();
        });

        // Logout functionality
        logoutBtn.addEventListener("click", function () {
            isLoggedIn = false;
            userPoints = 0;
            updateUI();
        });

        // View premium book functionality
        viewBookBtn.addEventListener("click", function () {
            if (isLoggedIn && userPoints >= 5) {
                userPoints -= 5;
                updateUI();
                premiumBook.style.display = "block"; // Show the premium book content
            } else {
                alert("You need at least 5 points to view the premium book.");
            }
        });

        // Function to update the UI based on login and points status
        function updateUI() {
            if (isLoggedIn) {
                userStatusElement.innerHTML = `<p>Welcome, you have <span id="points">${userPoints}</span> points.</p>`;
                loginBtn.style.display = "none";
                signupBtn.style.display = "none";
                logoutBtn.style.display = "block";
                loginForm.style.display = "none";
                signupForm.style.display = "none";
            } else {
                userStatusElement.innerHTML = `<p>You are not logged in.</p>`;
                loginBtn.style.display = "block";
                signupBtn.style.display = "block";
                logoutBtn.style.display = "none";
            }
            pointsElement.textContent = userPoints;
        }
    });
</script>
