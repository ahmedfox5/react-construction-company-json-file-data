import axios from 'axios';

export async function getEmployeeData (){
    const response = await axios.get('/data/app.json');
    return response
}