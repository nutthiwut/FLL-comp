// receiver.js

function fetchData() {
    // Replace 'https://your-cloud-server.com/api/data' with the actual URL of your cloud server endpoint
    fetch('https://your-cloud-server.com/api/data')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Display the retrieved data on the webpage
            const dataDisplay = document.getElementById('dataDisplay');
            dataDisplay.innerHTML = '<p>Received Data: ' + JSON.stringify(data) + '</p>';
        })
        .catch(error => {
            console.error('Error:', error);
        });
}