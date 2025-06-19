document.addEventListener('DOMContentLoaded', function() {
    // Define the asynchronous function to fetch user data
    async function fetchUserData() {
        // Define the API URL
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';

        // Select the data container element where the API data will be displayed
        const dataContainer = document.getElementById('api-data');

        try {
            // Use the await keyword with the fetch function to asynchronously get data
            const response = await fetch(apiUrl);

            // Check if the response is successful (status code 200-299)
            if (!response.ok) {
                // If the response is not OK, throw an error
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Convert the response to JSON format
            const users = await response.json();

            // Clear the existing content (e.g., "Loading user data...") from the data container
            dataContainer.innerHTML = '';

            // Create an unordered list (<ul>) element to hold the user names
            const userList = document.createElement('ul');
            // Add Tailwind CSS classes for basic list styling
            userList.className = 'list-disc list-inside text-left mx-auto';

            // Loop through the 'users' array and create a list item for each user
            users.forEach(user => {
                const listItem = document.createElement('li');
                // Set the text content of the list item to the user's name
                listItem.textContent = user.name;
                // Add Tailwind CSS classes for list item styling
                listItem.className = 'py-1 border-b border-gray-200 last:border-b-0';
                // Append the list item to the unordered list
                userList.appendChild(listItem);
            });

            // After the loop, append the completed user list to the data container
            dataContainer.appendChild(userList);

        } catch (error) {
            // Handle any errors that occur during the fetch operation
            console.error('Error fetching user data:', error); // Log the error to the console
            dataContainer.innerHTML = ''; // Clear any existing content
            dataContainer.textContent = 'Failed to load user data.'; // Display a user-friendly error message
            // Add Tailwind CSS classes to style the error message
            dataContainer.classList.add('text-red-600', 'font-semibold');
        }
    }

    // Invoke the fetchUserData function when the DOM content is fully loaded
    fetchUserData();
});
