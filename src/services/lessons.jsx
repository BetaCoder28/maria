export const LessonsService = async () => {
    try {
        const token = localStorage.getItem('access_token');
        
        const response = await fetch('http://127.0.0.1:8000/api/lessons/', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) throw new Error('Error en la respuesta del servidor');
        return await response.json();
    }
    catch(error) {
        throw error;
    }
};