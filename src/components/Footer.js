import React from 'react';
import classnames from 'classnames'
import LocaleFlag from './../img/USflag.png';


export default class Content extends React.Component {

    constructor(){
        super();
        this.state ={
            footerMenuOpen: false,
        }
    }
    

    render() {
        return (
            <div>
                <div className="footer">
                    {/* NORMAL FOOTER} */}
                        <div className="footerList">
                            <ul> 
                                <h4>Shop and Learn</h4>
                                <li> Mac </li>
                                <li> iPad </li>
                                <li> iPhone </li>
                                <li> Watch </li>
                                <li> TV </li>
                                <li> Music </li>
                                <li> iTunes </li>
                                <li> HomePod </li>
                                <li> iPod touch </li>
                                <li> Accessories </li>
                                <li> Gift Cards </li>
                            </ul>
                        </div>
                        <div className="footerList">
                            <ul> 
                                <h4> Apple Store </h4> 
                                <li> Find a Store </li>
                                <li> Genius Bar </li>
                                <li> Today at Apple </li>
                                <li> Apple Camp </li>
                                <li> Field Trip </li>
                                <li> Apple Store App </li>
                                <li> Refurbished and Clearance </li>
                                <li> Financing </li>
                                <li> Reuse and Recycling </li>
                                <li> Order Status </li>
                                <li> Shopping Help </li>
                            </ul>
                        </div>
                        <div className="footerList">
                            <ul> 
                                <h4> For Education </h4> 
                                <li> Apple and Education</li>
                                <li> Shop for College </li>
                            </ul>
                            <ul> 
                                <h4> For Business </h4> 
                                <li> Apple and Business </li>
                                <li> Shop for Business </li>
                            </ul>
                        </div>
                        <div className="footerList">
                            <ul> <h4> Account </h4> 
                                <li> Manage Your Apple ID </li>
                                <li> Apple Store Account </li>
                                <li> iCloud.com </li>
                            </ul>

                            <ul> 
                                <h4>Apple Values</h4>
                                <li> Accessibility  </li>
                                <li> Education </li>
                                <li> Environment </li>
                                <li> Inclusion and Diversity </li>
                                <li> Privacy </li>
                                <li> Supplier Responsibility </li>
                            </ul>
                        </div>
                        <div className="footerList">
                            <ul> <h4> About Apple </h4>
                                <li> Newsroom </li>
                                <li> Apple Leadership </li>
                                <li> Job Opportunities </li>
                                <li> Investors </li> 
                                <li> Events </li>
                                <li> Contact Apple </li>
                            </ul>
                        </div>

                    {/* MOBILE FOOTER */}
                        <div className="footerList-mobile">
                            <ul> 
                                <h4 className="column-title">Shop and Learn</h4>
                                <li> Mac </li>
                                <li> iPad </li>
                                <li> iPhone </li>
                                <li> Watch </li>
                                <li> TV </li>
                                <li> Music </li>
                                <li> iTunes </li>
                                <li> HomePod </li>
                                <li> iPod touch </li>
                                <li> Accessories </li>
                                <li> Gift Cards </li>
                            </ul>
                        </div>

                        <div className="footerList-mobile">
                            <ul> 
                                <h4 className="column-title"> Apple Store </h4> 
                                <li> Find a Store </li>
                                <li> Genius Bar </li>
                                <li> Today at Apple </li>
                                <li> Apple Camp </li>
                                <li> Field Trip </li>
                                <li> Apple Store App </li>
                                <li> Refurbished and Clearance </li>
                                <li> Financing </li>
                                <li> Reuse and Recycling </li>
                                <li> Order Status </li>
                                <li> Shopping Help </li>
                            </ul>
                        </div>
                        <div className="footerList-mobile">
                            <ul> 
                                <h4 className="column-title"> For Education </h4> 
                                <li> Apple and Education</li>
                                <li> Shop for College </li>
                            </ul>
                        </div>
                        <div className="footerList-mobile">
                            <ul> 
                                <h4 className="column-title"> For Business </h4> 
                                <li> Apple and Business </li>
                                <li> Shop for Business </li>
                            </ul>
                        </div>
                        <div className="footerList-mobile">
                            <ul> 
                                <h4 className="column-title"> Account </h4> 
                                <li> Manage Your Apple ID </li>
                                <li> Apple Store Account </li>
                                <li> iCloud.com </li>
                            </ul>
                        </div>
                        <div className="footerList-mobile">
                            <ul> 
                                <h4 className="column-title">Apple Values</h4>
                                <li> Accessibility  </li>
                                <li> Education </li>
                                <li> Environment </li>
                                <li> Inclusion and Diversity </li>
                                <li> Privacy </li>
                                <li> Supplier Responsibility </li>
                            </ul>
                        </div>
                        <div className="footerList-mobile">
                            <ul> 
                                <h4 className="column-title"> About Apple </h4>
                                <li> Newsroom </li>
                                <li> Apple Leadership </li>
                                <li> Job Opportunities </li>
                                <li> Investors </li> 
                                <li> Events </li>
                                <li> Contact Apple </li>
                            </ul>
                        </div>
                    <div className="footerBottom">
                        <p>More ways to shop: Visit an <a href="#">Apple Store</a>, call 1-800-MY-APPLE, or <a href ="#">find a reseller</a></p>
                        <span className = "split" />
                        <div className="legal-copyright"> Copyright © 2017 Apple Inc. All rights reserved. </div>
                        <div className="legal-link"> Privacy Policy </div>
                        <div className="legal-link"> Terms of Use </div>
                        <div className="legal-link"> Sales and Refunds </div>
                        <div className="legal-link"> Legal </div>
                        <div className="legal-link"> Site Map </div> 
                        <div className="locale-link"><img src={LocaleFlag}/>  United States </div>
                    </div>

                 </div>
            

                
            </div>

        );
    }
}