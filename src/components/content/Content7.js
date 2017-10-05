import React from 'react';
import ReactDOM from 'react-dom';
import '../../css//content/content7.css';
import AppleMusic from '../../img/svg/Apple-Music-Logo.svg';
import MusicNote from '../../video/content/content7/music-note.mp4';




export default class Content7 extends React.Component {

    test(){
        document.getElementsByClassName(MusicNote).controls=false;
    }

    render() {
        return (
            <div>
                <div className="section1">
                    <div className="card-hero">
                        <div className="copy-wrapper">
                             <img className="apple-music-logo" src={AppleMusic} />
                            <h1 className="typography-headline-elevated">Know what's next. Now.</h1>
                            <p className="intro"> Discover your next favorite song, album, or artist — without ever hearing an ad. Play anything in the vast 40-million-song catalog, along with your entire iTunes library. </p>
                            <button className="try-me"> Try it free for three months </button>
                            <p className="learn-more"> Learn more about Apple Music </p>
                        </div>
                        <video autoPlay className="MusicNote" src = {MusicNote}  />
                    </div>
                </div>
            </div>
        );
    }
}