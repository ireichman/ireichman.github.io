interface ApiResponse {
    message: string;
}

async function updateContentFromApi(endpoint: string, elementId: string): Promise<void> {
    try {
        const response = await fetch(`/api/${endpoint}`);
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


