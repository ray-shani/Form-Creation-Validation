  async function fetchUserData() {
                // Define the API URL
                const apiUrl = 'https://jsonplaceholder.typicode.com/users';

                // Select the data container element
                const dataContainer = document.getElementById('api-data');

                try {
                    // Fetch data asynchronously
                    const response = await fetch(apiUrl);

                    // Check if the response is successful (status code 200-299)
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }

                    // Convert the response to JSON
                    const users = await response.json();

                    // Clear the loading message
                    dataContainer.innerHTML = '';

                    // Create a <ul> element to hold the user list
                    const userList = document.createElement('ul');
                    userList.className = 'list-disc list-inside text-left mx-auto'; // Tailwind classes for styling

                    // Loop through the users array and append each user's name to the list
                    users.forEach(user => {
                        const listItem = document.createElement('li');
                        listItem.textContent = user.name;
                        listItem.className = 'py-1 border-b border-gray-200 last:border-b-0'; // Add some styling
                        userList.appendChild(listItem);
                    });

                    // Append the user list to the data container
                    dataContainer.appendChild(userList);

                } catch (error) {
                    // Handle errors during fetching
                    console.error('Error fetching user data:', error);
                    dataContainer.innerHTML = ''; // Clear existing content
                    dataContainer.textContent = 'Failed to load user data.';
                    dataContainer.classList.add('text-red-600', 'font-semibold'); // Style error message
                }
            }

            // Invoke fetchUserData on DOMContentLoaded
            fetchUserData();
        });