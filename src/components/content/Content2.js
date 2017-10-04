import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/content/content2.css';
import LargeMacPro from '../../img/content/content2/imac_pro_large.jpg';
import LargeiMac from '../../img/content/content2/imac_large.jpg';
import SmalliMac from '../../img/content/content2/imac_small_2x.jpg';
import LargeMacBookPro from '../../img/content/content2/macbookpro_tb_large.jpg';
import SmallMacPro from '../../img/content/content2/imac_pro_small_2x.jpg';




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
                <div className="LargeMacPro"><img src={LargeMacPro} /> </div>
                <div className="SmallMacPro"><img src={SmallMacPro} /> </div>
            </div>
            <div className="product-section2 theme-light">
                <div className="titleContainer">
                        <h2 className="product-headline">iMac</h2>
                        <h2 className="typography-headline"> The vision is brighter than ever </h2>
                        <h2 className="check-me-out"> Learn More > Buy> </h2>
                </div>
                <div className="LargeiMac"><img src={LargeiMac} /> </div>
                <div className="SmalliMac"><img src={SmalliMac} /> </div>
            </div>
            </div>
        );
    }
}