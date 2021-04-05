import axios from 'axios';

// get home data
export async function getHomeData(){
    try{
        const response = await axios.get("data/app.json");
        return response;
    }catch(error){
        console.log(error);
    }
}