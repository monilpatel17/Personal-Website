document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(form);
        formData.append("access_key", "fde682a2-5fba-4a27-878e-03c0273e3d66");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });
            const result = await response.json();

            if (result.success) {
                // Show success message
                alert("Your message has been sent successfully!");

                // Clear the form fields
                form.reset();

                // Optionally reload the page after 2 seconds to give the user time to read the message
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                // Show error message
                alert("There was an error sending your message. Please try again.");
            }
        } catch (error) {
            console.error('Error:', error);
            console.log(error);
        }
    });
});
