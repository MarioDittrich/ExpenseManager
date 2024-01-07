document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get form data
    let formData = new FormData(this);
  
    // Send form data to the server
    fetch('/submit', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        // Handle success
        console.log('Form submitted successfully');
        // You can add further actions here upon successful submission
      } else {
        // Handle errors
        console.error('Form submission failed');
      }
    })
    .catch(error => {
      // Handle network errors
      console.error('Error:', error);
    });
  });
  