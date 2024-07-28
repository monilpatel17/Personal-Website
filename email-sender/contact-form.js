document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value,
    };
  
    fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.text())
    .then(data => {
      alert('Email sent successfully: ' + data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
  