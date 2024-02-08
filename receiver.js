window.onload = function () {
    const imageContainer = document.getElementById('imageContainer');

    // Example array of image URLs
    const imageUrls = [
        'https://nutthiwut.github.io/FLL-comp2/'
        // Add more image URLs as needed
    ];

    // Display each image in the array
    imageUrls.forEach(imageUrl => {
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.alt = 'Image';
        imageContainer.appendChild(imgElement);
    });
};
