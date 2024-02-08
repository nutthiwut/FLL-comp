function fetchData() {
    fetch('https://nutthiwut.github.io/FLL-comp2/')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Process the data
            const imageContainer = document.getElementById('imageContainer');
            data.forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = image.url;
                imgElement.alt = image.name;
                imageContainer.appendChild(imgElement);
            });
        })
        .catch(error => {
            console.error('Fetch Error:', error.message);
        });
}

window.onload = function () {
    fetchData();
};
