import axios from 'axios';

export const getWeatherReport = (url) => {
    return axios.get(url)
}