import axios from 'axios';
const url = 'http://localhost/react-construction-company/api/';

export async function getAboutData(){
    try{
        const response = await axios.get('/data/app.json');
        return response;
    }catch(error){
        console.log(error);
    }
}

export async function getAbout(){
    try{
        // api_token = sessionStorage('api_token');
        // const response = await axios.get(url + 'about', { api_token });
        const response = await axios.get(url + 'about');
        return response;
    }catch(error){
        console.log(error);
    }
}