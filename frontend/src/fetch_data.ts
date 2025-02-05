interface ApiResponse {
    message: string;
}

async function updateContentFromApi(endpoint: string, value: number, elementId: string): Promise<void> {
    try {
        const response = await fetch(`http://localhost:5000/api/v1/${endpoint}/${value}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: ApiResponse = await response.json();
        
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = data.message;
        } else {
            console.error(`Element with id '${elementId}' not found`);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


async function initializeContent(): Promise<void> {
    await Promise.all([
        updateContentFromApi('texts', 2, "button-home")
    ]);
}


document.addEventListener('DOMContentLoaded', initializeContent)