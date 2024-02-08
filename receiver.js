document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('imageContainer');

  // Retrieve stored images from localStorage
  const storedImages = JSON.parse(localStorage.getItem('images')) || [];

  // Display images
  storedImages.forEach(function (imageUrl) {
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    container.appendChild(imageElement);
  });
});
