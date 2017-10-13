import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/content/content4.css';
import CompareLarge from '../../img/content/content4/compare_large.jpg';
import CompareMed from '../../img/content/content4/compare_medium.jpg';
import CompareSmall from '../../img/content/content4/compare_small.jpg';
import iOSLarge from '../../img/content/content4/ios_large.jpg';
import iOSMed from '../../img/content/content4/ios_medium.jpg';
import iOSSmall from '../../img/content/content4/ios_small.jpg';
import iOS11Icon from '../../img/content/content4/icon_ios_large.png';

export default class Content4 extends React.Component {
    render() {
        return (
            <div>
                <div className="Section-Blocks">
                    <div className="section-3">
                        <div className="title-block-3">
                            <div className="titleContainer-3">
                                <h2 className="typographyHeadline">Compare <br/> iPhone Models</h2>
                                <h2 className="checkMeOut"> Find the best iPhone for you </h2>
                            </div>
                        </div>                        
                        <div className="CompareLarge"> <img src={CompareLarge}/></div>  
                        <div className="CompareMed"> <img src={CompareMed}/></div>     
                        <div className="CompareSmall"> <img src={CompareSmall}/></div>
                    </div>
                    <div className="section-4">
                        <div className="title-block-4">
                            <div className="titleContainer-4">
                                <div className="iOS11Icon"><img className="iOS11L" src={iOS11Icon}/></div>
                                <h2 className="typographyHeadline">A giant step for iPhone.</h2>
                                <p className="description">iOS 11 makes iPhone so smart, it learns  from you. So capable, it helps you in more personal ways. And so useful, it's more powerful than ever.</p>
                                <h2 className="checkMeOut">Learn more about iOS 11 </h2>
                            </div>
                        </div>
                        <div className="iOSLarge"> </div>
                        <div className="iOSMed"> <img src={iOSMed}/></div>
                        <div className="iOSSmall"> <img src={iOSSmall}/></div>

                    </div>
                </div>    
            </div>
        );
    }
}