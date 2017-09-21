import React from 'react';
import ReactDOM from 'react-dom';
import iPhone8GoldLarge from '../img/iphone_8_largetall.jpg';
import iPhone10XLarge from '../img/iphone_x_largetall.jpg';
import watchTitleSVG from '../img/svg/watch_series_3_large.svg';
import watchLarge from './../img/watch_largetall.jpg';
import TVWonderWoman from './../img/tv_4k_large.jpg';
import iOS11 from './../img/ios_large.jpg';
import watchOS4 from './../img/watchos_large.jpg';
import collegeDeal from './../img/bts_ipad_pro_large.jpg';
import handINhand from './../img/hand_in_hand_logo_large.jpg';


export default class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="content1">
                    <h2> iPhone 8 </h2>
                    <h3> A new generation of iPhone </h3>
                    <img src={iPhone8GoldLarge} />
                </div>
                
                <div className="content2">
                    <h2> iPhone X </h2>
                    <h3> Say hello to the future </h3>
                    <img src={iPhone10XLarge} />
                </div>

                <div className="content3">
                    <img className="watchSVG" src={watchTitleSVG} />
                    <h3> Freedom calls </h3>
                    <img src={watchLarge} />
                </div>

                <div className="tileContent">
                    <div className="tv4kTile">
                        <img src={TVWonderWoman} />
                    </div>
                    <div className="iOS11Tile">
                        <h4> iOS 11 </h4>
                        <h5> Available now. </h5>
                        <img src={ iOS11 } />
                    </div>
                    <div className="watchOSTile">
                        <h4> watchOS 4 </h4>
                        <h5> Avilable now. </h5>
                        <img src={watchOS4} />
                    </div>
                    <div className="collegeTile">
                        <h4> Last Chance. </h4>
                        <h5> Buy iPad Pro for college.
                        <br/>
                        Get Beats.
                        </h5>
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