import React from 'react';
import ReactDOM from 'react-dom';

export default class Content extends React.Component {
    render() {
        return (
            <div>
                <div className="content1">
                    <h2> iPhone 8 </h2>
                    <h3> A new generation of iPhone </h3>
                    <img/>
                </div>
                
                <div className="content2">
                    <h2> iPhone X </h2>
                    <h3> Say hello to the future </h3>
                    <img/>
                </div>
              
            </div>
        );
    }
}