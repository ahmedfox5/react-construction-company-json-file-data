import axios from 'axios';
const url = 'http://localhost/react-construction-company/api/';

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

/////////////////////////////
export async function getRecentProjects(){
    try{
        const response = await axios.get(url + 'recentProjects');
        return response;
    }catch(error){
        console.log(error);
    }
}

export async function getProject(id){
    try{
        const response = await axios.get(url + 'project/' + id);
        return response;
    }catch(error){
        console.log(error);
    }
}


export async function getProjecsPgDescription(){
    try{
        const response = await axios.get(url + 'home');
        return response.data.home[8];
    }catch(error){
        console.log(error);
    }
}