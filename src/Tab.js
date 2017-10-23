import React from 'react';
import PropTypes from 'prop-types';

class Tab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            area: this.props.area,
            tabData: this.createTabData(this.props.regions)
        }

        this.handleOnClick = this
            .handleOnClick
            .bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.area !== nextProps.area) {
            this.setState({
                area: nextProps.area,
                tabData: this.createTabData(nextProps.regions)
            })
        }
    }

    render() {
        const tabs = []
        this
            .state
            .tabData
            .forEach(function (element, i) {
                tabs.push(
                    <li
                        className={element.isActive
                        ? "is-active"
                        : ""}
                        key={i}>
                        <a onClick={() => this.handleOnClick(element)}>
                            <span>{element.region}</span>
                        </a>
                    </li>
                )
            }, this);

        return (
            <div className="tabs is-centered is-boxed is-medium">
                <ul>
                    {tabs}
                </ul>
            </div>
        )
    }

    handleOnClick(tab) {
        this
            .props
            .onClick(tab.region);

        const index = this
            .state
            .tabData
            .indexOf(tab);
        const tabData = this
            .state
            .tabData
            .slice();
        tabData.map((element, i) => {
            if (i === index) {
                element.isActive = true;
            } else {
                element.isActive = false;
            }
            return element
        });

        this.setState({tabData})
    }

    createTabData(regions) {
        const tabData = [];
        regions.forEach((element, i) => {
            let isActive = i === 0
                ? true
                : false;
            tabData.push({region: element, isActive})
        })

        return tabData
    }
}

Tab.propType = {
    onClick: PropTypes.func.required,
    regions: PropTypes.array.required,
    area: PropTypes.string
}

export default Tab;