const API_URL = 'https://chocolatre-pe.onrender.com/';

// Fetch the list of trufas from the backend
export async function getAllTrufas() {
    try {
        const response = await fetch(API_URL, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `Erro HTTP: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching trufas:', error);
        throw error;
    }
}

// Add a new trufa no banco
export async function addTrufa(sabor, quantidade) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                sabor, 
                quantidade                
            )
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `Erro HTTP: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error adding trufa:', error);
        throw error;
    }
}
