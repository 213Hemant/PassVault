// Show the correct form (Login/Signup)
document.getElementById("signup-link").addEventListener("click", function () {
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("signup-form").classList.remove("hidden");
    document.getElementById("login-tab").classList.remove("bg-gray-800", "text-white");
    document.getElementById("login-tab").classList.add("bg-gray-200", "text-gray-600");
    document.getElementById("signup-tab").classList.add("bg-gray-800", "text-white");
    document.getElementById("signup-tab").classList.remove("bg-gray-200", "text-gray-600");
});

document.getElementById("login-link").addEventListener("click", function () {
    document.getElementById("signup-form").classList.add("hidden");
    document.getElementById("login-form").classList.remove("hidden");
    document.getElementById("signup-tab").classList.remove("bg-gray-800", "text-white");
    document.getElementById("signup-tab").classList.add("bg-gray-200", "text-gray-600");
    document.getElementById("login-tab").classList.add("bg-gray-800", "text-white");
    document.getElementById("login-tab").classList.remove("bg-gray-200", "text-gray-600");
});

// Simulate successful login (Show notes section)
document.querySelector(".btn-custom.w-full.py-3").addEventListener("click", function () {
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("signup-form").classList.add("hidden");
    document.getElementById("notes-section").classList.remove("hidden");
});
