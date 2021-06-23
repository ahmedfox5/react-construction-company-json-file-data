import axios from 'axios';

const url = 'http://localhost/react-construction-company/api/';

// get home data
export async function getHomeData(){
    try{
        const response = await axios.get("data/app.json");
        return response;
    }catch(error){
        console.log(error);
    }
}

export async function getHomeData2(){
    try{
        const response = await axios.get(url + 'home');
        return response;
    }catch(error){
        console.log(error);
    }
}


export async function getStatistics(){
    try{
        const response = await axios.get(url + 'statistics');
        return response;
    }catch(error){
        console.log(error);
    }
}

export async function getBest(){
    try{
        return await axios.get(url + 'best');
    }catch(error){
        console.log(error);
    }
}

