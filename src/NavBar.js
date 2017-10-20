import React from 'react';
import PropTypes from 'prop-types';
import * as constans from './constants';

const NavBar = (props) => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="">
                    <span className="icon is-small">
                        <i className="fa fa-home"></i>
                    </span>
                    <span>Weather</span>
                </a>

                <a className="navbar-item" onClick={() => props.onClick(constans.KANTO)}>関東</a>
                <a className="navbar-item" onClick={() => props.onClick(constans.KANSAI)}>関西</a>
            </div>
        </nav>
    )
}

NavBar.propType = {
    onClick: PropTypes.func.required
}

export default NavBar;