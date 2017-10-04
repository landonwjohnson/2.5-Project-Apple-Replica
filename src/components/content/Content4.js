import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/content/content4.css';
import CompareLarge from '../../img/content/content4/compare_large.jpg';
import CompareMed from '../../img/content/content4/compare_medium.jpg';
import CompareSmall from '../../img/content/content4/compare_small.jpg';

export default class Content4 extends React.Component {
    render() {
        return (
            <div>
                <div className="Section-Blocks">
                    <div className="section-compare">
                        <div className="title-block-compare">
                            <div className="titleContainer-compare">
                                <h2 className="typography-headline-compare">Compare <br/> iPhone Models</h2>
                                <h2 className="check-me-out-compare"> Learn More > </h2>
                            </div>
                        </div>
                        <div className="CompareLarge"> <img src={CompareLarge}/></div>  
                        <div className="CompareMed"> <img src={CompareMed}/></div>     
                        <div className="CompareSmall"> <img src={CompareSmall}/></div>
                    </div>
                </div>    
            </div>
        );
    }
}