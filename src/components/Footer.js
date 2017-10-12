import React from 'react';
import classnames from 'classnames';
import '../css/footer.css';
import LocaleFlag from './../img/USflag.png';
import $ from 'jquery';


export default class Footer extends React.Component {

    componentDidMount() {
        $(".footerContainer h4").click(function(){
          $(this).parent(".footerNav").toggleClass("open");
          $('html, body').animate({ scrollTop: $(this).offset().top - 170 }, 0 );
        });
    }
    

    render() {

        
        return (
            <div>
                
                <div className="footerContainer">
                <div className="col-5">
                    <div className="footerNav footerList">
                    <h4>Shop and Learn</h4>
                    <ul>
                        
                        <li><a href="#">Mac</a></li>
                        <li><a href="#">iPad</a></li>
                        <li><a href="#">iPhone</a></li>
                        <li><a href="#">Watch</a></li>
                        <li><a href="#">TV</a></li>
                        <li><a href="#">Music</a></li>
                        <li><a href="#">iTunes</a></li>
                        <li><a href="#">HomePod</a></li>
                        <li><a href="#">iPod touch</a></li>
                        <li><a href="#">Accessories</a></li>
                        <li className ="list-end"><a href="#">Gift Cards</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-5">
                    <div className="footerNav footerList">
                    <h4>Apple Store</h4>
                    <ul>
                        <li><a href="#">Find a Store</a></li>
                        <li><a href="#">Genius Bar</a></li>
                        <li><a href="#">Today at Apple</a></li>
                        <li><a href="#">Apple Camp</a></li>
                        <li><a href="#">Field Trip</a></li>
                        <li><a href="#">Apple Store App</a></li>
                        <li><a href="#">Refurbished and Clearance</a></li>
                        <li><a href="#">Financing</a></li>
                        <li><a href="#">Reuse and Recycling</a></li>
                        <li><a href="#">Order Status</a></li>
                        <li className="list-end"><a href="#">Shopping Help</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-5">
                    <div className="footerNav footerList combined-col">
                    <h4>For Education</h4>
                    <ul>
                        <li><a href="#">Apple and Education</a></li>
                        <li className="list-end"><a href="#">Shop for College</a></li>
                    </ul>
                    </div>
                    <div className="footerNav footerList">
                    <h4>For Business</h4>
                    <ul>
                        <li><a href="#">Apple and Business</a></li>
                        <li className="list-end"><a href="#">Shop for Business</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-5">
                    <div className="footerNav footerList combined-col">
                    <h4>Account</h4>
                    <ul>
                        <li><a href="#">Manage Your Apple ID</a></li>
                        <li><a href="#">Apple Store Account</a></li>
                        <li className ="list-end"><a href="#">iCloud.com</a></li>
                    </ul>
                    </div>
                    <div className="footerNav footerList">
                    <h4>Apple Values</h4>
                    <ul>
                        <li><a href="#">Accessibility</a></li>
                        <li><a href="#">Education</a></li>
                        <li><a href="#">Environment</a></li>
                        <li><a href="#">Inclusion and Diversity</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li className ="list-end"><a href="#">Supplier Responsibility</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-5">
                    <div className="footerNav footerList">
                    <h4>About Apple</h4>
                    <ul>
                        <li><a href="#">Newsroom</a></li>
                        <li><a href="#">Apple Leadership</a></li>
                        <li><a href="#">Job Opportunities</a></li>
                        <li><a href="#">Investors</a></li>
                        <li><a href="#">Events</a></li>
                        <li className ="list-end"><a href="#">Contact Apple</a></li>
                    </ul>
                    </div>
                </div>
                <div id="footerBottom">
                    <p>More ways to shop: Visit an <a href="#">Apple Store</a>, call 1-800-MY-APPLE, or <a href="#">find a reseller</a></p>
                    <span className="split"> </span>
                    <div className="legal-copyright">Copyright © 2017 Apple Inc. All rights reserved.</div>
                    <div className="legal-container">
                    <div className="legal-link"> Privacy Policy </div>
                    <div className="legal-link"> Terms of Use </div>
                    <div className="legal-link"> Sales and Refunds </div>
                    <div className="legal-link"> Legal </div>
                    <div className="legal-link"> Site Map </div>
                </div>
                    <div className="country">
                        <img className ="usflag" src={LocaleFlag}/>
                        <div className="locale-link"> United States </div>
                    </div>
                    </div>
                    
                </div>
                
            </div>

        );
    }
}