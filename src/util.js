import cheerio from 'cheerio';
import * as constans from './constants';
import {url} from './settings';

export const parseJPM = async(html) => {
    const $ = cheerio.load(html);
    const forecastTable = $('table.forecast');
    const tbody = forecastTable.find('tbody');
    const rows = tbody.find('tr');

    rows.forEach(function (element, i) {
        console.log(element);
    }, this);
}

export const parseWeatherNews = async(html) => {
    const $ = cheerio.load(html);
    const forecastTable = $('table.fcst-table-weekly');
    const tbody = forecastTable.find('tbody');
    const rows = tbody.find('tr');

    const weatherReports = [];
    rows.each(function (i, tr) {
        const weather = {}

        $(this)
            .find('td')
            .each(function (i, td) {
                const text = $(this).text();
                switch (i) {
                    case 0:
                        weather.date = text;
                        break;
                    case 1:
                        const img = $($(this).html()).attr('src');
                        weather.img = img;
                        break;

                    case 2:
                        weather.highest = Number(text);
                        break;
                    case 3:
                        weather.lowest = Number(text);
                        break;
                    case 4:
                        const rainyPercent = Number(text);
                        weather.rainyPercent = rainyPercent;
                        if (rainyPercent >= 60) {
                            weather.status = '中止';
                        } else {
                            weather.status = '通常';
                        }

                        break;
                    default:
                        break;
                }
            })

        weatherReports.push(weather);
    });

    return weatherReports;
}

export const getRegionUrl = (region) => {
    switch (region) {
        case constans.TOKYO:
            return url.tokyo

        case constans.KANAGAWA:
            return url.kanagawa

        case constans.SAITAMA:
            return url.saitama

        case constans.CHIBA:
            return url.chiba

        case constans.IBARAKI:
            return url.ibaraki

        case constans.TOCHIGI:
            return url.tochigi

        case constans.GUNMA:
            return url.tochigi

        case constans.YAMANASHI:
            return url.yamanashi

        case constans.NAGANO:
            return url.nagano

        case constans.OSAKA:
            return url.osaka

        case constans.KYOTO:
            return url.kyoto

        case constans.HYOGO:
            return url.hyogo

        case constans.NARA:
            return url.nara

        case constans.WAKAYAMA:
            return url.wakayama

        case constans.SHIGA:
            return url.shiga

        default:
            return ""
    }
}