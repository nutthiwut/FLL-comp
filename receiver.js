async function fetchData() {
  try {
    const response = await fetch('http://localhost:3000');
    const data = await response.json();

    // Assuming data is an array of image URLs
    displayImages(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    alert('Failed to fetch images. Please try again.');
  }
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
