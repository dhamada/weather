import React, {Component} from 'react';
import * as api from './api';
import * as util from './util';
import * as constants from './constants';
import NavBar from './NavBar';
import Tab from './Tab'
import WeatherTable from './WeatherTable';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import 'mdi/css/materialdesignicons.min.css';
import 'mdi/css/materialdesignicons.min.css.map';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      regions: {
        kanto: [
          constants.TOKYO,
          constants.KANAGAWA,
          constants.SAITAMA,
          constants.CHIBA,
          constants.IBARAKI,
          constants.TOCHIGI,
          constants.GUNMA,
          constants.YAMANASHI,
          constants.NAGANO
        ],
        kansai: [
          constants.OSAKA,
          constants.KYOTO,
          constants.HYOGO,
          constants.NARA,
          constants.WAKAYAMA,
          constants.SHIGA
        ]
      },
      weatherForecast: [],
      currentArea: constants.KANTO,
      currentRegion: constants.TOKYO
    }

    this.handleNavBarOnClick = this
      .handleNavBarOnClick
      .bind(this);
    this.handleTabOnClick = this
      .handleTabOnClick
      .bind(this);
    this.getTodaysWeatherForecast = this
      .getTodaysWeatherForecast
      .bind(this);
    this.getWeatherForecast = this
      .getWeatherForecast
      .bind(this);
  }

  componentWillMount() {
    const {currentRegion} = this.state;
    // this.getTodaysWeatherForecast(currentRegion);
    this.getWeatherForecast(currentRegion);
  }

  render() {

    return (
      <div className="App">
        <NavBar onClick={this.handleNavBarOnClick}/>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">{this.state.currentRegion}</h1>
        </header>

        <Tab
          onClick={this.handleTabOnClick}
          area={this.state.currentArea}
          regions={this.state.currentArea === constants.KANTO
          ? this.state.regions.kanto
          : this.state.regions.kansai}/>

        <div className="parent">
          <div className="inner">
            <div className="tablecell">
              <div className="box">
                <div className="media-content">
                  <div className="content">
                    <WeatherTable weatherForecast={this.state.weatherForecast}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleNavBarOnClick(area) {
    this.setState({
      currentArea: area,
      currentRegion: area === constants.KANTO
        ? constants.TOKYO
        : constants.OSAKA
    });

    this.getWeatherForecast(this.state.currentRegion);
  }

  handleTabOnClick(region) {
    this
      .getWeatherForecast(region)
      .then(() => this.setState({currentRegion: region}));
  }

  async getTodaysWeatherForecast(region) {
    const url = util.getRegionUrl(region);
    const response = await api.getJapanMetrogicalAgency(url.tenki);
    const forecast = await util.parseJPM(response.data);
  }

  async getWeatherForecast(region) {
    const url = util.getRegionUrl(region);
    const response = await api.getWeatherNews(url.weathernews);
    const weatherForecast = await util.parseWeatherNews(response.data);

    this.setState({weatherForecast})
  }
}