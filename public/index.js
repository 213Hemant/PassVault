// Get references to forms
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

const loginbtn = document.getElementById("submit-login");
const signupbtn = document.getElementById("submit-signup");

// Check if the forms exist in the DOM
if (!loginForm || !signupForm) {
    console.error("Forms not found in the DOM. Ensure both login and signup forms are present.");
} else {
    console.log("Forms found: login-form and signup-form");
}

// Get the current state from localStorage
const isLoggedIn = localStorage.getItem("isLoggedIn");
console.log("Current login state from localStorage:", isLoggedIn);

// Page load logic: Determine which form to display
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded. Checking user login state...");

    if (isLoggedIn === "true") {
        console.log("User had signed up. Showing login form.");
        signupForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    } else {
        console.log("User has not signup. Showing signup form.");
        signupForm.classList.remove("hidden");
        loginForm.classList.add("hidden");
    }
});

// Handle signup form submission
signupbtn.addEventListener("click", (e) => {
    console.log("Signup form submitted.");

    e.preventDefault(); // Prevent the default form submission
    console.log("Signup form submission prevented.");

    // Simulate signup (state update)
    localStorage.setItem("isLoggedIn", "false"); // User has signed up but not logged in yet
    console.log("User signup successful. Setting isLoggedIn to 'false' in localStorage.");

    alert("Signup successful! Please log in.");

    // Show login form after signup
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    console.log("Signup form hidden, login form shown.");
});

// Handle login form submission
loginbtn.addEventListener("click", (e) => {
    console.log("Login form submitted.");

    e.preventDefault(); // Prevent the default form submission
    console.log("Login form submission prevented.");

    // Simulate login (state update)
    localStorage.setItem("isLoggedIn", "true"); // User is now logged in
    console.log("User login successful. Setting isLoggedIn to 'true' in localStorage.");

    alert("Login successful! Redirecting...");

    // Redirect to the protected page (uncomment the next line for actual redirection)
    console.log("Redirecting to pass.html...");
    // window.location.href = "pass.html"; // Uncomment this line to redirect to a protected page after login
});
