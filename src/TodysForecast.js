import React from 'react';
import PropTypes from 'prop-types';

class TodaysForecast extends React.Component {
    render() {
        const cards = [];
        this
            .props
            .data
            .forEach(function (element, i) {
                if (element['6-12'] === '--%') {
                    element.morningStatus = '--'
                } else if (/^([6-9][0]|100)%$/.test(element['6-12'])) {
                    element.morningStatus = (
                        <span className='tag is-danger is-medium'>
                            中止
                        </span>
                    )
                } else {
                    element.morningStatus = (
                        <span className='tag is-info is-medium'>
                            通常
                        </span>
                    )
                }

                if (element['12-18'] === '--%') {
                    element.eveningStatus = '--'
                } else if (/^([6-9][0]|100)%$/.test(element['12-18'])) {
                    element.eveningStatus = (
                        <span className='tag is-danger is-medium'>
                            中止
                        </span>
                    )
                } else {
                    element.eveningStatus = (
                        <span className='tag is-info is-medium'>
                            通常
                        </span>
                    )
                }

                cards.push(
                    <div className="box" key={i}>
                        <div className="media">
                            <div className="media-content">
                                <span className="title is-4">{element.region}</span>
                                <span className="subtitle is-6">&nbsp;{element.date}</span>
                            </div>
                        </div>

                        <div className="content">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>時間帯</th>
                                        <th>降水確率</th>
                                        <th>ステータス</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>6-12</td>
                                        <td>{element['6-12']}</td>
                                        <td>{element.morningStatus}</td>
                                    </tr>
                                    <tr>
                                        <td>12-18</td>
                                        <td>{element['12-18']}</td>
                                        <td>{element.eveningStatus}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            })

        return (
            <div style={{
                margin: "0 24px 24px"
            }}>
                {cards}
            </div>
        )
    }
}

TodaysForecast.propType = {
    data: PropTypes.array.required
}

export default TodaysForecast;