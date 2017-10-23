import axios from 'axios';

export const getJapanMetrogicalAgency = (url) => {
    return axios.get(url, {});
}

export const getWeatherNews = (url) => {
    return axios.get(url)
}