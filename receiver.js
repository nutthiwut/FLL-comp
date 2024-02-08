// Example array of image URLs
const imageUrls = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
    // Add more image URLs as needed
];

window.onload = function () {
    const imageContainer = document.getElementById('imageContainer');

    // Display each image in the array
    imageUrls.forEach(imageUrl => {
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.alt = 'Image';
        imageContainer.appendChild(imgElement);
    });
};
