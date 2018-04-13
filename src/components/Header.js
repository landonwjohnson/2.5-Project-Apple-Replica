import React from 'react';
import ReactDOM from 'react-dom';
import '../css/header.css';
import classnames from 'classnames';
import AppleIcon from '../img/svg/Apple-Icon.svg';
import SearchIcon from '../img/svg/Search-Icon.svg';
import CartIcon from '../img/svg/Cart-Icon.svg';
import BagIcon from '../img/svg/cart-menu/bag-icon.svg';
import FavIcon from '../img/svg/cart-menu/favorites-icon.svg';
import OrdersIcon from '../img/svg/cart-menu/orders-icon.svg';
import AccountIcon from '../img/svg/cart-menu/account-icon.svg';
import SignInIcon from '../img/svg/cart-menu/sign-in-icon.svg';
import { Link, Route } from 'react-router-dom';



export default class Header extends React.Component {


    constructor(){
        super();
        this.state ={
            cartMenuOpen: false,
            mobileNavOpen: false,
            searchOpen: false,
            navLinkShow: false,
            isHeaderBlack: false,
        }
        this.handleCartClick = this.handleCartClick.bind(this);
        this.handleMobileNavClick = this.handleMobileNavClick.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleAppleClick = this.handleAppleClick.bind(this);
    }

   

    handleCartClick(){
        console.log('Hi');
        this.setState({mobileNavOpen: false})
        this.setState({isHeaderBlack: false})
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
            this.setState({isHeaderBlack: false})
        }

        
        else {
            
            this.setState({mobileNavOpen: true})
            this.setState({isHeaderBlack: true})
        }
    }

    handleSearchClick(){
        console.log('search click test')
        this.setState({cartMenuOpen: false})
        
        if(this.state.searchOpen) {
            this.setState({isHeaderBlack: false})
            this.setState({searchOpen: false})
            this.setState({navLinkShow: false})
           
        }
        else {
            this.setState({searchOpen: true})
            this.setState({navLinkShow: true})
            this.setState({isHeaderBlack: true})
            
        }
    }

    handleAppleClick(){
        this.setState({cartMenuOpen: false})
        this.setState({mobileNavOpen: false})
        this.setState({isHeaderBlack: false})
    }


    render() {

        let mobileNavX = function() {
            document.getElementById("nav-toggle").classList.toggle("active");
        }

        let searchCloseX = function() {
            document.getElementById("close-search-toggle").classList.toggle("active");
        }

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

        var headerColor = classnames({
            "ac-gn-header--black": this.state.isHeaderBlack,
            "ac-gn-header": true
        })
        

        return (
            <div>
                <div className={headerColor}>
                    
                    <ul className="nav">
                        <li className="menuicon-bread" onClick={this.handleMobileNavClick}><div id="nav-toggle" onClick={mobileNavX} href="#"  ><div className="bread-menu"><span className="top"></span><span className="bottom"> </span></div></div> </li>
                        <li className="appleIcon"><Link to="/" onClick={this.handleAppleClick}><img src={AppleIcon}/> </Link></li>
                        <div className={searchClasses} >
                        <img className="searchform-icon" src={SearchIcon}/><input className="searchform-input" placeholder="Search apple.com" maxLength={70} />
                        <div id="close-search-toggle" onClick={this.handleSearchClick}> <div className="close-search" /> <span className="left"></span> <span className="right"> </span></div></div> 
                        <li className={navLink}><Link to="/Mac"> Mac</Link></li>
                        <li className={navLink}>iPad</li>
                        <li className={navLink}><Link to="/iPhone"> iPhone </Link></li>
                        <li className={navLink}>Watch</li>
                        <li className={navLink}>TV</li>
                        <li className={navLink}><Link to="/Music"> Music </Link></li>
                        <li className={navLink}>Support</li>
                        <li className={navLink} onClick={this.handleSearchClick}><img className="searchIcon" src={SearchIcon} /></li>
                        <li className="cartIcon" onClick={this.handleCartClick}  ><img src={CartIcon} /> </li>
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
                        <li className="m-nav-list" ><Link to="/Mac"   onClick={this.handleMobileNavClick}>Mac</Link></li>
                        <li className="m-nav-list">iPad</li>
                        <li className="m-nav-list"><Link to="/iPhone" onClick={this.handleMobileNavClick}>iPhone</Link></li>
                        <li className="m-nav-list">Watch</li>
                        <li className="m-nav-list">TV</li>
                        <li className="m-nav-list"><Link to="/Music"  onClick={this.handleMobileNavClick}> Music </Link></li>
                        <li className="m-nav-list">Support</li>
                    </ul>  
                </div>
           
            </div>
        );
    }
}
