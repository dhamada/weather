import React, {Component} from 'react';
import * as api from './api';
import * as util from './util';
import * as constants from './constants';
import NavBar from './NavBar';
import Tab from './Tab'
import WeatherTable from './WeatherTable';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
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
      weatherReports: [],
      currentArea: constants.KANTO,
      currentRegion: constants.TOKYO
    }

    this.handleNavBarOnClick = this
      .handleNavBarOnClick
      .bind(this);
    this.handleTabOnClick = this
      .handleTabOnClick
      .bind(this);
    this.process = this
      .process
      .bind(this);
  }

  componentWillMount() {
    this.process(this.state.currentRegion);
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
                    <WeatherTable weatherReports={this.state.weatherReports}/>
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

    this.process(this.state.currentRegion);
  }

  handleTabOnClick(region) {
    this
      .process(region)
      .then(() => this.setState({currentRegion: region}));
  }

  async process(region) {
    const url = util.getRegionUrl(region);
    const response = await api.getWeatherReport(url);
    const weatherReports = await util.parseWeatherNews(response.data);

    this.setState({weatherReports})
  }
}