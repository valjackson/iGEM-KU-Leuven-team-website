document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    
    function showNotification(message, type = 'success') {
        // Remove existing notification if present
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <span class="notification-message">${message}</span>
            <span class="notification-close">&times;</span>
        `;

        // Add to document
        document.body.appendChild(notification);

        // Show notification
        requestAnimationFrame(() => {
            notification.classList.add('show');
        });

        // Add close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 400);
        });

        // Auto hide after 5 seconds
        setTimeout(() => {
            if (document.body.contains(notification)) {
                notification.classList.remove('show');
                setTimeout(() => notification.remove(), 400);
            }
        }, 5000);
    }

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = form.querySelector('.submit-btn');
            submitBtn.classList.add('loading');

            try {
                // Send email using EmailJS
                await emailjs.send(
                    "service_qb4qpqa", // Replace with your EmailJS service ID
                    "template_lsfiw75", // Replace with your EmailJS template ID
                    {
                        name: form.name.value,
                        email: form.email.value,
                        title: form.subject.value,
                        message: form.message.value,
                        to_email: "info@igemleuven.be"

                    }
                );

                showNotification('Message sent successfully!', 'success');
                form.reset();
            } catch (error) {
                console.error('Error sending email:', error);
                showNotification('Failed to send message. Please try again.', 'error');
            } finally {
                submitBtn.classList.remove('loading');
            }
        });
    }
});
