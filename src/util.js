import cheerio from 'cheerio';

export const parseWeatherNews = async(html) => {
    const $ = cheerio.load(html);
    const weatherTable = $('table.fcst-table-weekly');
    const cells = weatherTable.find('tbody');
    const rows = cells.find('tr');

    const weatherReports = [];
    rows.each(function (i, tr) {
        const weather = {}

        $(this).find('td').each(function (i, td) {
            const text = $(this).text();
            switch (i) {
                case 0:
                    weather.date = text;
                    break;
                case 2:
                    weather.highest = Number(text);
                    break;
                case 3:
                    weather.lowest = Number(text);
                    break;
                case 4:
                    const rainyPercent = Number(text)
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