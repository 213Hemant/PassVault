// Show the correct form (Login/Signup)
document.getElementById("signup-link").addEventListener("click", function () {
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("signup-form").classList.remove("hidden");
   
});
document.getElementById("login-link").addEventListener("click", function () {
    document.getElementById("signup-form").classList.add("hidden");
    document.getElementById("login-form").classList.remove("hidden");
});
