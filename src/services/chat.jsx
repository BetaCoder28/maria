export const sendChatMessage = async (content) => {
    const conversation_uid = crypto.randomUUID();

    try{

        const token = localStorage.getItem('access_token')

        const response = await fetch('http://127.0.0.1:8000/api/chat/',{
            method : 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
            },
            body : JSON.stringify({
                role : 'user',
                content : content,
                conversation_id : 'uuid2802'
            })
        });

        if(!response.ok) throw new Error('Error at Server Response');
        return await response.json();
    }
    catch(error){
        console.error("Error sending message: ", error )
        throw error;
    }

};