import React from 'react';
import propTypes from 'prop-types';

const WeatherTable = (props) => {
    let tableBody = [];
    if (props.weatherForecast) {
        props
            .weatherForecast
            .forEach((element, i) => {
                tableBody.push(
                    <tr key={i}>
                        <td>{element.date}</td>
                        <td>
                            <img
                                className="fcst_wxicon"
                                alt=""
                                src={element.img
                                ? element.img
                                : ""}/>
                        </td>
                        <td>{element.rainyPercent}%</td>
                        <td>
                            <span
                                className={element.status === '中止'
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
        <table className="table">
            <thead>
                <tr>
                    <th>日時</th>
                    <th>天気</th>
                    <th>降水確率</th>
                    <th>ステータス</th>
                </tr>
            </thead>
            <tbody>
                {tableBody}
            </tbody>
        </table>
    )
}

WeatherTable.propType = {
    weatherForecast: propTypes.array.required
}

export default WeatherTable;
