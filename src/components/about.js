import React, {Component} from 'react';
import profilePicture from '../kevin.jpeg';

export default class About extends Component {

    render() {

        return(
            <div className="main-section">
                <div className="sub-section">
                    <div className="text-area">
                        <p>About Kevin</p>
                        <img id="profile-pic" src={profilePicture} alt="kevin"></img>
                        <p>I've been in software development for 7+ years.  I'm most experienced in LAMP stack technologies, APIs and Integrations.</p>
                        <p>PHP is my strongest language, but I'm really enjoying working with Python and React.  In my spare time I like to work on app ideas and trying new technologies.</p>
                        <p>I grew up in the southwest suburbs of Chicago, and have lived in the city 10+ years.  I enjoy music, investing and the great outdoors.</p>
                    </div>
                </div>
            </div>
        )

    }

}