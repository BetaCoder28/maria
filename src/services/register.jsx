export const RegisterService = async (email, name, lastname, password, age)=> {

    try{
        const response = await fetch('http://127.0.0.1:8000/api/user/',{
            method : 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                email: email,
                name: name,
                lastname: lastname,
                password: password,
                age: age
            })
        });

        if(!response.ok) throw new Error('Error at Server Response');
        return await response.json();
    }
    catch(error){
        console.error("Error sending message: ", error )
        throw error;
    }

}



