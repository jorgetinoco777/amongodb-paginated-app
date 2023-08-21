import axios from 'axios';

const findUsers = async (functionName, page, limit) => {

    const params = {
        page,
        limit
    };
    
    return await axios.post(`http://localhost:3000/users/${functionName}`, 
    params, 
    { 
        headers: {
        "Content-Type": "application/json"
    }})
    .then((response) => {
        //console.log("service: ", response.data);
        
        return response.data;
    })
    .catch((e) => {
        console.log("Error: ", e)
    });
};

export {
    findUsers,
};