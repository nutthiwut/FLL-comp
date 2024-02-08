// receiver.js

document.addEventListener('DOMContentLoaded', function () {
  function fetchData() {
    fetch('http://localhost:3000/api/data')  // Adjust the URL to your Node.js server endpoint
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        displayImages(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }

  function displayImages(images) {
    const container = document.getElementById('imageContainer');
    container.innerHTML = '';

    images.forEach(function (imageUrl) {
      const imageElement = document.createElement('img');
      imageElement.src = imageUrl;
      container.appendChild(imageElement);
    });
  }

  // Fetch data when the page loads
  fetchData();
});
