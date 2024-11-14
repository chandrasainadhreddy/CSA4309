 <script>
        function handleLogin(event) {
            event.preventDefault(); // Prevent the form from submitting normally
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Here you can add your validation logic (e.g., checking username/password)

            // If validation passes, redirect to homepage.html
            if (username && password) {
                window.location.href = 'home.html'; // Redirect to homepage
            } else {
                document.getElementById('error-message').innerText = 'Please enter both username and password.';
            }
        }
    </script>
