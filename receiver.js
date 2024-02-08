function fetchData() {
  // Simulating a server response with stored images
  const storedImages = JSON.parse(localStorage.getItem('images')) || [];

  // Display images
  const container = document.getElementById('imageContainer');
  container.innerHTML = ''; // Clear existing content

  storedImages.forEach(function (imageUrl) {
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    container.appendChild(imageElement);
  });
}
