const baseUrl = {
    weathernews: 'https://weathernews.jp/onebox',
    tenki: 'https://tenki.jp/forecast'
}

export const url = {
    tokyo: {
        weathernews: `${baseUrl.weathernews}/35.689876/139.691670/temp=c&q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%BA%81`,
        tenki: `${baseUrl.tenki}/3/16/4410/13104/`
    },
    kanagawa: {
        weathernews: `${baseUrl.weathernews}/35.447676/139.642450/temp=c&q=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C`,
        jpm: `${baseUrl.tenki}/3/17/4610/14103/`
    },
    saitama: {
        weathernews: `${baseUrl.weathernews}/35.857242/139.649015/temp=c&q=%E5%9F%BC%E7%8E%89%E7%9C%8C`,
        jpm: `${baseUrl.tenki}/3/14/4310/11107/`
    },
    chiba: {
        weathernews: `${baseUrl.weathernews}/35.604580/140.123209/temp=c&q=%E5%8D%83%E8%91%89%E7%9C%8C`,
        jpm: `${baseUrl.tenki}/3/15/4510/12101/`
    },
    ibaraki: {
        weathernews: `${baseUrl.weathernews}/36.342522/140.446268/temp=c&q=%E8%8C%A8%E5%9F%8E%E7%9C%8C`,
        jpm: `${baseUrl.tenki}/3/11/4010/8201/`
    },
    tochigi: {
        weathernews: `${baseUrl.weathernews}/36.565314/139.883474/temp=c&q=%E6%A0%83%E6%9C%A8%E7%9C%8C`,
        jpm: `${baseUrl.tenki}/3/12/4110/9201/`
    },
    gunma: {
        weathernews: `${baseUrl.weathernews}/36.391201/139.060874/temp=c&q=%E7%BE%A4%E9%A6%AC%E7%9C%8C`,
        jpm: `${baseUrl.tenki}/3/13/4210/10201/`
    },
    yamanashi: {
        weathernews: `${baseUrl.weathernews}/35.664155/138.568452/temp=c&q=%E5%B1%B1%E6%A2%A8%E7%9C%8C`,
        jpm: `${baseUrl.tenki}/3/22/4910/19201/`
    },
    nagano: {
        weathernews: `${baseUrl.weathernews}/36.651273/138.180901/temp=c&q=%E9%95%B7%E9%87%8E%E7%9C%8C`,
        jpm: `${baseUrl.tenki}/3/23/4810/20201/`
    },
    osaka: {
        weathernews: `${baseUrl.weathernews}/34.686288/135.519732/temp=c&q=%E5%A4%A7%E9%98%AA%E5%BA%9C`,
        jpm: `${baseUrl.tenki}/6/30/6200/27100/`
    },
    kyoto: {
        weathernews: `${baseUrl.weathernews}/35.021761/135.755700/temp=c&q=%E4%BA%AC%E9%83%BD%E5%BA%9C`,
        jpm: `${baseUrl.tenki}/333.html`
    },
    hyogo: {
        weathernews: `${baseUrl.weathernews}/34.691551/135.183348/temp=c&q=%E5%85%B5%E5%BA%AB%E7%9C%8C`,
        jpm: `${baseUrl.tenki}/332.html`
    },
    nara: {
        weathernews: `${baseUrl.weathernews}/34.685269/135.832824/temp=c&q=%E5%A5%88%E8%89%AF%E7%9C%8C`,
        jpm: `${baseUrl.tenki}/335.html`
    },
    wakayama: {
        weathernews: `${baseUrl.weathernews}/34.226021/135.167189/temp=c&q=%E5%92%8C%E6%AD%8C%E5%B1%B1%E7%9C%8C`,
        jpm: `${baseUrl.tenki}/336.html`
    },
    shiga: {
        weathernews: `${baseUrl.weathernews}/35.004302/135.868479/temp=c&q=%E6%BB%8B%E8%B3%80%E7%9C%8C`,
        jpm: `${baseUrl.tenki}/334.html`
    }
}