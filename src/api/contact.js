import axios from 'axios';
const url = 'http://localhost/react-construction-company/api/';

export async function sendMessage(data){
    try{
        const response = await axios.put(url + 'message' ,data);
        return response;
    }catch(error){
        console.log(error);
    }
}