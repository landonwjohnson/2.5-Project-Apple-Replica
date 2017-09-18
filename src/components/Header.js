import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="ac-gn-header">
                    <ul className="nav">
                        <li className="appleIcon"></li>
                        <li>Mac</li>
                        <li>iPad</li>
                        <li>iPhone</li>
                        <li>Watch</li>
                        <li>TV</li>
                        <li>Music</li>
                        <li>Support</li>
                    </ul>
                </div>
            </div>
        );
    }
}
