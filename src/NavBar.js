import React from 'react';
import PropTypes from 'prop-types';
import * as constans from './constants';

const NavBar = (props) => {
    return (
        <nav className="navbar is-light" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="">
                    <span className="icon is-large">
                        <i className="mdi mdi-weather-partlycloudy"></i>
                    </span>
                    <span>Weather</span>
                </a>

                <a className="navbar-item" onClick={() => props.onClick(constans.KANTO)}>
                    関東
                </a>

                <a className="navbar-item" onClick={() => props.onClick(constans.KANSAI)}>
                    関西
                </a>
            </div>
        </nav>
    )
}

NavBar.propType = {
    onClick: PropTypes.func.required
}

export default NavBar;