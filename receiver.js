// Example array of image URLs
const imageUrls = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/250',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/350',
    // Add more placeholder image URLs as needed
];

window.onload = function () {
    const imageContainer = document.getElementById('imageContainer');

    // Display each image in the array
    imageUrls.forEach(imageUrl => {
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.alt = 'Placeholder Image';
        imageContainer.appendChild(imgElement);
    });
};
