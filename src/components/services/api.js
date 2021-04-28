import axios from 'axios';


const URL= 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY= '8a5f042ad59df1c91bdd3669d0cea72f'

export const getData = () => {
    return axios.get(`${URL}?q=mumbai,india&appid=${API_KEY}`);
}