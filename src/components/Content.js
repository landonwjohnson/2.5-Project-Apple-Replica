import React from 'react';
import ReactDOM from 'react-dom';
import iPhone8GoldLarge from '../img/iphone_8_largetall.jpg';
import iPhone10XLarge from '../img/iphone_x_largetall.jpg';
import watchTitleSVG from '../img/svg/watch_series_3_large.svg';
import watchLarge from './../img/watch_largetall.jpg';


export default class Content extends React.Component {
    render() {
        return (
            <div>
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
                    <img src ={watchLarge} />
                </div>

                <div className="tileContent">
                    <div className="tv4kTile">
                        
                    </div>
                </div>
              
            </div>
        );
    }
}