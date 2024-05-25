// share.js

function shareJPG(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form element
    var formElement = document.querySelector('form');

    // Use html2canvas to capture the form as a screenshot
    html2canvas(formElement).then(canvas => {
        // Convert the canvas to a data URL (base64 encoded image)
        var imgData = canvas.toDataURL('image/jpeg');

        // Create an anchor element to download the image
        var link = document.createElement('a');
        link.href = imgData;
        link.download = 'form_screenshot.jpg';
        link.click();

        // Submit the form programmatically after capturing the screenshot
        formElement.submit();
    }).catch(error => {
        console.error('Error capturing the form:', error);
    });
}
