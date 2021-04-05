import axios from 'axios';

export async function getProjectsDtata(){
    try{
        const response = await axios.get('/data/app.json');
        return response;
    }catch(error){
        console.log(error);
    }
}


export async function getProjectData(id){
    try{
        const response = await axios.get('/data/app.json');
        return response.data.projects[id]
    }catch(error){
        console.log(error);
    }
}