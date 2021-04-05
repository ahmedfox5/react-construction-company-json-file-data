import axios from 'axios';

export async function getAboutData(){
    try{
        const response = await axios.get('/data/app.json');
        return response;
    }catch(error){
        console.log(error);
    }
}