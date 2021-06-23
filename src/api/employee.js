import axios from 'axios';
const url = 'http://localhost/react-construction-company/api/';

export async function getEmployeeData (){
    const response = await axios.get('/data/app.json');
    return response
}


export async function getEmployees(){
    try{
        const response = await axios.get(url + 'employees');
        return response;
    }catch(error){
        console.log(error);
    }
}

export async function getEmployee(id){
    try{
        const response = await axios.get(url + 'employee/' + id);
        return response;
    }catch(error){
        console.log(error);
    }
}