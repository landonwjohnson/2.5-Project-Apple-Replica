import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import AppleIcon from '../img/svg/Apple-Icon.svg';
import SearchIcon from '../img/svg/Search-Icon.svg';
import CartIcon from '../img/svg/Cart-Icon.svg';
import BagIcon from '../img/svg/cart-menu/bag-icon.svg';
import FavIcon from '../img/svg/cart-menu/favorites-icon.svg';
import OrdersIcon from '../img/svg/cart-menu/orders-icon.svg';
import AccountIcon from '../img/svg/cart-menu/account-icon.svg';
import SignInIcon from '../img/svg/cart-menu/sign-in-icon.svg';


export default class Header extends React.Component {


    constructor(){
        super();
        this.state ={
            cartMenuOpen: false,
            mobileNavOpen: false
        }
        this.handleCartClick = this.handleCartClick.bind(this);
        this.handleMobileNavClick = this.handleMobileNavClick.bind(this);
    }
    handleCartClick(){
        console.log('Hi');
        this.setState({mobileNavOpen: false})
        if(this.state.cartMenuOpen){
            this.setState({cartMenuOpen: false})
        }
        else {
            this.setState({cartMenuOpen: true})
        }
    }

    handleMobileNavClick(){
        console.log('mobile click test')
        this.setState({cartMenuOpen: false})
        if(this.state.mobileNavOpen){
            this.setState({mobileNavOpen: false})
        }
        else {
            this.setState({mobileNavOpen: true})
        }
    }
    render() {
        var bagClasses = classnames({
            "bagview-content--show": this.state.cartMenuOpen,
            "bagview-content": true
        })

        var mobileNavClasses = classnames({
            "mobile-nav--show": this.state.mobileNavOpen,
            "mobile-nav": true
        })
        return (
            <div>
                <div className="ac-gn-header">
                    <ul className="nav">
                        <li className ="menuicon-bread" onClick={this.handleMobileNavClick}> <span className = "menuicon-bread-crust-top"/> <span className = "menuicon-bread-crust-bottom"/> </li>
                        <li className="appleIcon"><img src={AppleIcon}/></li>
                        <li>Mac</li>
                        <li>iPad</li>
                        <li>iPhone</li>
                        <li>Watch</li>
                        <li>TV</li>
                        <li>Music</li>
                        <li>Support</li>
                        <li className="searchIcon" ><img src={SearchIcon} /> </li>
                        <li className="cartIcon" onClick={this.handleCartClick} ><img src={CartIcon} /> </li>
                    </ul>
                    
                </div>
                <div className="bag-wrapper">
             
                <div className={bagClasses}>
                    <p> Your Bag is empty. </p>
                        <ul>
                            <li><img className="cart-menu-icons" src={BagIcon}/> Bag </li>
                            <li><img className="cart-menu-icons" src={FavIcon}/> Favorites </li>
                            <li><img className="cart-menu-icons" src={OrdersIcon}/> Orders </li>
                            <li><img className="cart-menu-icons" src={AccountIcon}/> Account </li>
                            <li><img className="cart-menu-icons" src={SignInIcon}/> Sign in </li>
                        </ul>
                </div>
               
                </div>
                <div className={mobileNavClasses}>
                    <ul>
                        <li className="m-nav-list">Mac</li>
                        <li className="m-nav-list">iPad</li>
                        <li className="m-nav-list">iPhone</li>
                        <li className="m-nav-list">Watch</li>
                        <li className="m-nav-list">TV</li>
                        <li className="m-nav-list">Music</li>
                        <li className="m-nav-list">Support</li>
                    </ul>  
                </div>
                    
            </div>
        );
    }
}
