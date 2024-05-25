function promptPassword() {
    var password = prompt("Please enter the admin password:");
    if (password === "Nazar@786") {
        document.getElementById("adminForm").style.display = "block";
    } else {
        alert("Incorrect password. Access denied.");
        // Reload the page to prompt for the password again
        location.reload();
    }
}

// Call the function to prompt for the password when the page loads
window.onload = promptPassword;