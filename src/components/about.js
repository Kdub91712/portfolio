import React, {Component} from 'react';
import profilePicture from '../kevin.jpeg';

export default class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showVideo: false
        }
    }

    render() {

        return(
            <div className="main-section">
                <div className="sub-section">
                    <div className="about-hero">
                        <img className="about-profile-pic" src={profilePicture} alt="kevin" />
                        <div className="about-bio">
                            <h3 className="about-name">Kevin Wilson</h3>
                            <p className="about-intro">12+ years in software development, specializing in LAMP stack, APIs, and integrations.</p>
                            <p>PHP is my strongest language, but I'm really enjoying working with Python and React. In my spare time I like to work on app ideas and trying new technologies.</p>
                            <p>I also enjoy music, investing, and the great outdoors.</p>
                        </div>
                    </div>

                    <div className="about-divider" />

                    <div className="about-video-section">
                        <h3>About this Website</h3>
                        { !this.state.showVideo ? (
                            <button className="video-toggle" onClick={() => this.setState({ showVideo: true })}>
                                ▶ Watch Intro
                            </button>
                        ) : (
                            <div className="about-video-wrapper">
                                <iframe title="intro" src="https://www.youtube.com/embed/gqOrZ2lxcX0" style={{ border: 0 }} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )

    }

}
