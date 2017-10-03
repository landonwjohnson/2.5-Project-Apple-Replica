import React from 'react';
import ReactDOM from 'react-dom';
import '../css/content2.css';
import LargeMacPro from '../img/content2/imac_pro_large.jpg';
import LargeiMac from '../img/content2/imac_large.jpg';
import LargeMacBookPro from '../img/content2/macbookpro_tb_large.jpg';



export default class Content2 extends React.Component {
    render() {
        return (
            <div>
            <div className="product-section1 theme-dark">
                <div className="titleContainer">
                    <h2 className="product-headline">iMac Pro</h2>
                    <h2 className="typography-headline"> Power to the pro </h2>
                    <h2 className="check-me-out"> Learn More > </h2>

                </div>
                <div className="LargeMacPro"><img src={LargeMacPro} /></div>
            </div>
            <div className="product-section2 theme-light">
                <div className="titleContainer">
                        <h2 className="product-headline">iMac</h2>
                        <h2 className="typography-headline"> The vision is brighter than ever </h2>
                        <h2 className="check-me-out"> Learn More > Buy> </h2>
                </div>
                <div className="LargeiMac"><img src={LargeiMac} /> </div>
            </div>
            <div className="product-section3 theme-light">
                <div className="titleContainer">
                        <h2 className="product-headline">MacBook Pro</h2>
                        <h2 className="typography-headline"> A touch of genius </h2>
                        <div className="LargeMacBookPro"><img src={LargeMacBookPro} /> </div>
                </div>
            </div>
            <div className="product-section3 theme-light">
                <div className="titleContainer">
                        <h2 className="product-headline">MacBook</h2>
                        <h2 className="typography-headline"> Light. Years ahead </h2>
                </div>
                
            </div>
            </div>
        );
    }
}