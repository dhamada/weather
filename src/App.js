import React, {Component} from 'react';
import * as api from './api';
import * as util from './util';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherReports: []
    }
  }

  componentWillMount() {
    this.process();
  }

  render() {
    let tableBody = [];
    if (this.state.weatherReports) {
      this
        .state
        .weatherReports
        .forEach((element, i) => {
          tableBody.push(
            <tr key={i}>
              <td>{element.date}</td>
              <td>{element.highest}℃</td>
              <td>{element.lowest}℃</td>
              <td>{element.rainyPercent}%</td>
              <td>
                <span
                  class={element.status === '中止'
                  ? 'tag is-danger is-medium'
                  : 'tag is-primary is-medium'}>
                  {element.status}
                </span>
              </td>
            </tr>
          )
        })
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">東京都</h1>
        </header>

        <div class="parent">
          <div class="inner">
            <div class="tablecell">
              <div class="box">
                <div class="media-content">
                  <div clas="content">
                    <table class="table">
                      <thead>
                        <th>日時</th>
                        <th>最高気温</th>
                        <th>最低気温</th>
                        <th>降水確率</th>
                        <th>ステータス</th>
                      </thead>
                      <tbody>
                        {tableBody}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  async process() {
    const response = await api.getWeatherReport();
    const weatherReports = await util.parseWeatherNews(response.data);

    this.setState({weatherReports})
    this.forceUpdate()
  }
}