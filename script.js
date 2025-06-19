// Ensure the DOM is fully loaded before running the script
        document.addEventListener('DOMContentLoaded', function() {
            // Get references to the form and the feedback display division
            const form = document.getElementById('registration-form');
            const feedbackDiv = document.getElementById('form-feedback');

            // Add an event listener for the form submission
            form.addEventListener('submit', function(event) {
                // Prevent the default form submission behavior
                event.preventDefault();

                // Retrieve and trim the values from the input fields
                const username = document.getElementById('username').value.trim();
                const email = document.getElementById('email').value.trim();
                const password = document.getElementById('password').value.trim();

                // Initialize validation variables
                let isValid = true; // Overall validation status
                const messages = []; // Array to store validation error messages

                // --- Username Validation ---
                // Check if username length is less than 3 characters
                if (username.length < 3) {
                    isValid = false; // Set overall status to false
                    messages.push('Username must be at least 3 characters long.'); // Add error message
                }

                // --- Email Validation ---
                // Check if email includes both '@' and '.' characters
                if (!email.includes('@') || !email.includes('.')) {
                    isValid = false; // Set overall status to false
                    messages.push('Please enter a valid email address.'); // Add error message
                }

                // --- Password Validation ---
                // Check if password length is at least 8 characters
                if (password.length < 8) {
                    isValid = false; // Set overall status to false
                    messages.push('Password must be at least 8 characters long.'); // Add error message
                }

                // --- Displaying Feedback ---
                // Make the feedback division visible
                feedbackDiv.style.display = 'block';

                if (isValid) {
                    // If all validations pass, display a success message
                    feedbackDiv.textContent = 'Registration successful!';
                    feedbackDiv.style.color = '#28a745'; // Green color for success
                    feedbackDiv.style.backgroundColor = '#d4edda'; // Light green background
                    feedbackDiv.style.borderColor = '#c3e6cb'; // Border color
                } else {
                    // If any validations fail, display error messages
                    // Join messages with <br> to display each message on a new line
                    feedbackDiv.innerHTML = messages.join('<br>');
                    feedbackDiv.style.color = '#dc3545'; // Red color for errors
                    feedbackDiv.style.backgroundColor = '#f8d7da'; // Light red background
                    feedbackDiv.style.borderColor = '#f5c6cb'; // Border color
                }
            });
        });