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
            mobileNavOpen: false,
            searchOpen: false,
            navLinkShow: false,
        }
        this.handleCartClick = this.handleCartClick.bind(this);
        this.handleMobileNavClick = this.handleMobileNavClick.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleNavLink = this.handleNavLink.bind(this);

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

    handleSearchClick(){
        console.log('search click test')
        this.setState({cartMenuOpen: false})
        
        if(this.state.searchOpen) {
            this.setState({searchOpen: false})
            this.setState({navLinkShow: false})
        }
        else {
            this.setState({searchOpen: true})
            this.setState({navLinkShow: true})
            
            
        }
    }

    handleNavLink(){
        if(this.state.navLinkShow) {
            this.setState({navLinkShow: false})
        }
        else{ this.setState({navLinkShow: true})
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

        var searchClasses = classnames({
            "searchform-wrapper--show": this.state.searchOpen,
            "searchform-wrapper": true
        })

        var navLink = classnames({
            "MenuItem--hide": this.state.navLinkShow,
            "MenuItem": false
        })
        return (
            <div>
                <div className="ac-gn-header">
                    
                    <ul className="nav">
                        <li className ="menuicon-bread" onClick={this.handleMobileNavClick}> <span className = "menuicon-bread-crust-top"/> <span className = "menuicon-bread-crust-bottom"/> </li>
                        <li className="appleIcon"><img src={AppleIcon}/></li>
                        <div className={searchClasses} >
                        <img className="searchform-icon" src={SearchIcon}/><input className="searchform-input" placeholder="Search apple.com" /><span className="close-search" onClick={this.handleSearchClick}/>
                        </div> 
                        <li className={navLink}>Mac</li>
                        <li className={navLink}>iPad</li>
                        <li className={navLink}>iPhone</li>
                        <li className={navLink}>Watch</li>
                        <li className={navLink}>TV</li>
                        <li className={navLink}>Music</li>
                        <li className={navLink}>Support</li>
                        <li className={navLink} onClick={this.handleSearchClick}><img className="searchIcon" src={SearchIcon} /></li>
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
