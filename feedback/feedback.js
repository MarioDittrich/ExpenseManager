document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    
    let formData = new FormData(this);
  
    
    fetch('/submit', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        
        console.log('Form submitted successfully');
        
      } else {
        
        console.error('Form submission failed');
      }
    })
    .catch(error => {
      
      console.error('Error:', error);
    });
  });
  



 