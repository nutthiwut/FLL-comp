function fetchData() {
  // Replace 'https://nutthiwut.github.io/FLL-comp2/' with the actual API or server endpoint
  const apiUrl = 'https://example.com/api/images';

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Assuming data is an array of image URLs, you can display them or perform further actions
      displayImages(data);
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
}
