import axios from 'axios';

export const getWeatherReport = () => {
    return axios.get('https://weathernews.jp/onebox/35.689876/139.691670/temp=c&q=%E6%9D%B1%E4%BA%AC%E' +
            '9%83%BD%E5%BA%81')
}