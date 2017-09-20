import React from 'react';
import ReactDOM from 'react-dom';
import AppleIcon from '../img/svg/Apple-Icon.svg';
import SearchIcon from '../img/svg/Search-Icon.svg';
import CartIcon from '../img/svg/Cart-Icon.svg'

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="ac-gn-header">
                    <ul className="nav">
                        <li className="appleIcon"><img src={AppleIcon}/></li>
                        <li>Mac</li>
                        <li>iPad</li>
                        <li>iPhone</li>
                        <li>Watch</li>
                        <li>TV</li>
                        <li>Music</li>
                        <li>Support</li>
                        <li className="searchIcon"><img src={SearchIcon}/> </li>
                        <li className="cartIcon"><img src={CartIcon}/> </li>
                    </ul>
                </div>
            </div>
        );
    }
}
