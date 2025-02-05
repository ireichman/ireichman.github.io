interface ApiResponse {
    // The key here is the same as in the JSON received from the API.
    text: string;
    image: string;
}

// Asynchroous function for retrieving data from the API.
async function updateContentFromApi(endpoint: string, value: number, dataType: keyof ApiResponse, elementId: string): Promise<void> {
    try {
        const response = await fetch(`http://localhost:5000/api/v1/${endpoint}/${value}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: ApiResponse = await response.json();
        console.log('Data received:', data)
        console.log('Data message:', data[dataType])
        
        const element = document.getElementById(elementId);
        console.log('Found element:', element)
        if (element) {
            element.textContent = data[dataType];
        } else {
            console.error(`Element with id '${elementId}' not found`);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


async function initializeContent(): Promise<void> {
    await Promise.all([
        updateContentFromApi('texts', 2, "text", "home-button")
    ]);
}


document.addEventListener('DOMContentLoaded', initializeContent)