import React from 'react';
import ReactDOM from 'react-dom';
import Content1 from './Content1';
// import Content2 from './Content2';

export default class Body extends React.Component {
    render() {
        return(
            <div>
                <Content1 />
                {/* <Content2 /> */}
            </div>
        )
    }
}