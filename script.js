document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');
    const errorMessage = document.getElementById('error-message');
    const loadingIndicator = document.getElementById('loading-indicator');
    const successMessage = document.getElementById('success-message');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission

        // Simulate loading state
        loadingIndicator.classList.add('show');
        errorMessage.classList.remove('show');
        successMessage.classList.remove('show');

        // In a real application, you would send the form data to a server here
        setTimeout(() => {
            loadingIndicator.classList.remove('show');
            const username = loginForm.username.value;
            const password = loginForm.password.value;

            // Basic client-side validation (replace with proper backend validation)
            if (username === 'test' && password === 'password') {
                successMessage.classList.add('show');
                // Redirect to dashboard or another page after successful login
                setTimeout(() => {
                    window.location.href = '/dashboard.html'; // Replace with your actual dashboard URL
                }, 1500);
            } else {
                errorMessage.textContent = 'Invalid username or password.';
                errorMessage.classList.add('show');
            }
        }, 2000); // Simulate a 2-second login process
    });

    // Add smooth transition on page load (optional)
    document.body.classList.add('loaded');
});