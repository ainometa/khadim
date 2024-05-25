document.addEventListener("DOMContentLoaded", function() {
    // Get the input elements
    var startMonthInput = document.getElementById("startMonth");
    var endMonthInput = document.getElementById("endMonth");
    var totalMonthsInput = document.getElementById("totalMonths");
    var totalAmountInput = document.getElementById("totalAmount");

    // Function to calculate the total number of months and total amount
    function calculateTotalMonthsAndAmount() {
        var startDate = new Date(startMonthInput.value);
        var endDate = new Date(endMonthInput.value);
        
        // Calculate the difference in months
        var diffMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12;
        diffMonths -= startDate.getMonth(); // adjust start month
        diffMonths += endDate.getMonth() + 1; // adjust end month and include the end month itself

        // Update the value of totalMonths input field
        totalMonthsInput.value = diffMonths <= 0 ? 0 : diffMonths;

        // Calculate total amount only if totalMonths is a valid number
        var totalMonths = parseInt(totalMonthsInput.value);
        if (!isNaN(totalMonths)) {
            var totalAmount = 500 * totalMonths;
            totalAmountInput.value = totalAmount;
        } else {
            // If totalMonths is NaN or empty, set totalAmount to empty
            totalAmountInput.value = "";
        }
    }

    // Call the function initially and whenever the inputs change
    calculateTotalMonthsAndAmount();
    startMonthInput.addEventListener("change", calculateTotalMonthsAndAmount);
    endMonthInput.addEventListener("change", calculateTotalMonthsAndAmount);
});
