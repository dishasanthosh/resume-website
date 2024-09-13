document.getElementById("contactForm").addEventListener("submit", function(event) {
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (!email || !message) {
        alert("Please fill in both fields.");
        event.preventDefault();
    }
});
