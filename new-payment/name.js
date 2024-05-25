const API_KEY = 'AIzaSyAZtuBfZc27B30fU8NPnRB-jmZmcyYjt3o';
const SHEET_ID = '13nSSSaz46qAM0-11wbFeKCiMEGFYU3Uxw0mlzsdlV_E';
const SHEET_NAME = 'Member';

// Function to fetch data from Google Sheets
async function fetchData() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}!B:B?key=${API_KEY}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.values;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

// Function to populate dropdown with data from Google Sheets
async function populateDropdown() {
    const dropdown = document.getElementById('nameDropdown');
    const data = await fetchData();
    if (data.length === 0) {
        dropdown.innerHTML = '<option value="">No data available</option>';
        return;
    }
    dropdown.innerHTML = data.map(name => `<option value="${name}">${name}</option>`).join('');
}

// Populate dropdown on page load
populateDropdown();
