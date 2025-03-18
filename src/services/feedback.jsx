export const getFeedback = async(content) => {
    try{

        const token = localStorage.getItem('access_item')

        const response = await fetch('http://127.0.0.1:8000/api/feedback/',{ 
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
            },
            body : JSON.stringify({
                conversation : content,
            })
        });

        if (!response.ok){
            const errorData = await response.text();
            throw new Error(`Server Error: ${response.status} - ${errorData}`);
        } 
        return await response.json();
    }
    catch(error){
        console.error('Error sending data', error.message)
        throw error;
    }
}

