function generateTokenNumber() {
    var today = new Date();
    var year = today.getFullYear();
    var month = (today.getMonth() + 1).toString().padStart(2, '0'); // Jan = 0, Feb = 1, etc.
    var day = today.getDate().toString().padStart(2, '0');
    var hour = today.getHours().toString().padStart(2, '0');
    var minute = today.getMinutes().toString().padStart(2, '0');
    var second = today.getSeconds().toString().padStart(2, '0');

    var receiptNumber = "TC/" + year + "/" + month + "/" + day + "/" + hour + "/" + minute + "/" + second;
    return receiptNumber;
  }

  // Set the value of the input field with id "tokenNumber" to the generated token number
  document.getElementById("tokenNumber").value = generateTokenNumber();