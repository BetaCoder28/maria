export const sendChatMessage = async (content) => {
    try{
        const response = await fetch('http://127.0.0.1:8000/api/chat/',{
            method : 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                role : 'user',
                content : content,
            })
        });

        if(!response.ok) throw new Error('Error at Server Response');
        return await response.text();
    }
    catch(error){
        console.error("Error sending message: ", error )
        throw error;
    }

};