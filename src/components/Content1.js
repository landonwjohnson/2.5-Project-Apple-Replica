import React from 'react';
import ReactDOM from 'react-dom';
import '../css/content1.css';
import iPhone8GoldLarge from '../img/iphone_8_largetall.jpg';
import iPhone8GoldMed from '../img/1064/iphone_8_mediumtall.jpg';
import iPhone8GoldSmall from '../img/735/iphone_8_small.jpg'
import iPhone10XLarge from '../img/iphone_x_largetall.jpg';
import iPhone10XMed from '../img/1064/iphone_x_mediumtall.jpg';
import iPhone10XSmall from '../img/735/iphone_x_small.jpg';
import watchTitleSVG from '../img/svg/watch_series_3_large.svg';
import watchLarge from './../img/watch_largetall.jpg';
import watchMed from './../img/1064/watch_mediumtall.jpg';
import watchSmall from './../img/735/watch_small.jpg';
import TVWonderWoman from './../img/tv_4k_large.jpg';
import TVWonderWomanMed from './../img/1064/tv_4k_medium.jpg';
import iOS11 from './../img/ios_large.jpg';
import iOS11Med from './../img/1064/ios_medium.jpg';
import watchOS4 from './../img/watchos_large.jpg';
import watchOS4Med from './../img/1064/watchos_medium.jpg';
import collegeDeal from './../img/bts_ipad_pro_large.jpg';
import handINhand from './../img/hand_in_hand_logo_large.jpg';
import appleTVlogo from './../img/tv_4k_logo_large.png';


export default class Content1 extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="content1">
                    <div className="unit-copy-wrapper">
                        <h2 className="headline1"> iPhone 8 </h2>
                        <h3 className="headline2"> A new generation of iPhone </h3>
                    </div>
                    <img className="iPhone8Large" src={iPhone8GoldLarge} />
                    <img className="iPhone8Med" src={iPhone8GoldMed} />
                    <img className="iPhone8Small" src={iPhone8GoldSmall} />
                </div>
                
                <div className="content2">
                    <div className="unit-copy-wrapper">
                        <h2 className="headline1"> iPhone X </h2>
                        <h3 className="headline2"> Say hello to the future </h3>
                    </div>
                    <img className="iPhone10XLarge" src={iPhone10XLarge} />
                    <img className="iPhone10XMed"   src={iPhone10XMed} />
                    <img className="iPhone10XSmall" src={iPhone10XSmall} />
                </div>

                <div className="content3">
                    <div className="unit-copy-wrapper">
                        <img className="watchSVG" src={watchTitleSVG} />
                        <h3 className="headline2"> Freedom calls </h3>
                    </div>
                        <img className="watchLarge" src={watchLarge} />
                        <img className="watchMed"   src={watchMed} />
                        <img className="watchSmall" src={watchSmall} />
                </div>

                <div className="tileContent">
                    <div className="tv4kTile">
                        <div className="unit-copy-header">
                            <div className="unit-header">
                                <img src={appleTVlogo} />
                                <div className="sub-header">
                                    <h5>The 4K HDR era. Now playing</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="iOS11Tile">
                        <div className="unit-copy-wrapper-tile">
                            <div className="unit-header">
                                <h4> iOS 11 </h4>
                                <div className="sub-header">
                                    <h5> Available now. </h5>
                                </div>
                            </div>
                            <img className="iOS11" src={ iOS11 } />
                            <img className="iOS11Med"src={ iOS11Med }/>
                        </div>
                    </div>
                    <div className="watchOSTile">
                        <div className="unit-copy-wrapper-tile">
                                <div className="unit-header">
                                    <h4> watchOS 4 </h4>
                                    <div className="sub-header">
                                            <h5> Available now. </h5>
                                    </div>
                                </div>
                                <img className="watchOS4" src={watchOS4} />
                                <img className="watchOS4Med" src={watchOS4Med} />
                        </div>
                    </div>
                    <div className="collegeTile">
                        <div className="unit-copy-wrapper-tile">
                            <div className="unit-header">
                                <h4> Last Chance. </h4>
                                <div className="sub-header">
                                    <h5> Buy iPad Pro for college.</h5>
                                    <h5> Get Beats.</h5>
                                </div>
                                
                            </div>
                        </div>
                        <img />
                    </div>
                </div>
                <div className="handINhand">
                    <img src={handINhand} />
                    
                    <p> Donate to support hurricane relief efforts </p>
                </div>
            </div>
        );
    }
}