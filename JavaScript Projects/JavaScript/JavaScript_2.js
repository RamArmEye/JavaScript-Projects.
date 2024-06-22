//Contact Form Challenge

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && message) {
        // Display the message sent confirmation
        document.getElementById('formMessage').textContent = 'MESSAGE SENT';
        document.getElementById('formMessage').style.color = 'green';

        // Clear the form
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('formMessage').textContent = 'Please fill in all fields.';
        document.getElementById('formMessage').style.color = 'red';
    }
});
