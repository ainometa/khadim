function validateStartMonth() {
    const startMonthInput = document.getElementById('startMonth');
    const startMonth = new Date(startMonthInput.value);
    const currentMonth = new Date();

    if (startMonth > currentMonth) {
        // If start month is in the future, show a warning
        startMonthInput.setCustomValidity('Start month cannot be in the future');
        startMonthInput.reportValidity();

        // Reset the calendar
        startMonthInput.value = '';
    } else {
        // Clear any previous validation messages
        startMonthInput.setCustomValidity('');
    }
}

function validateEndMonth() {
    const endMonthInput = document.getElementById('endMonth');
    const endMonth = new Date(endMonthInput.value);
    const currentMonth = new Date();

    if (endMonth.getFullYear() < currentMonth.getFullYear() ||
        (endMonth.getFullYear() === currentMonth.getFullYear() && endMonth.getMonth() < currentMonth.getMonth())) {
        // If end month is in the past, show a warning
        endMonthInput.setCustomValidity('End month cannot be in the past');
        endMonthInput.reportValidity();

        // Reset the calendar
        endMonthInput.value = '';
    } else {
        // Clear any previous validation messages
        endMonthInput.setCustomValidity('');
    }
}

// Function to set the default value to current month for start month input
function setDefaultStartMonth() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0');
    document.getElementById('startMonth').value = `${currentYear}-${currentMonth}`;
}

// Function to set the default value to current month for end month input
function setDefaultEndMonth() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0');
    document.getElementById('endMonth').value = `${currentYear}-${currentMonth}`;
}

// Call setDefaultStartMonth() and setDefaultEndMonth() when the document is loaded
window.onload = function() {
    setDefaultStartMonth();
    setDefaultEndMonth();
};
