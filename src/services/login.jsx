export const LoginService = async (email, password ) => {
    try{
        const response = await fetch('http://127.0.0.1:8000/api/login/',{
            method : 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                email : email,
                password : password
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