import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PageLayout from './pageLayout';
import profilePicture from '../kevin.jpeg';

export default function About({ navLinkHandler }) {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <PageLayout>
            <div className="about-hero">
                <img className="about-profile-pic" src={profilePicture} alt="kevin" />
                <div className="about-bio">
                    <h3 className="about-name">Kevin Wilson</h3>
                    <p className="about-intro">14+ years in software development, specializing in microservices, AI development, APIs, and integrations. Industries include telecommunications, real estate, hospitality and social media.</p>
                    <p>Learned to code with PHP, Javascript &amp; MySQL. These days my favorite stack is Python, Django, PostgreSQL and React. I'm constantly pushing myself to explore new software technologies, languages and frameworks.</p>
                    <p>When I'm not working on <a href="/onward-code" onClick={(e) => navLinkHandler && navLinkHandler(e, 'onwardCode')}>Onward Code</a>, I immerse myself in <a href="https://carcritical.com" target="_blank" rel="noopener noreferrer">car culture</a>, movies &amp; music, <a href="https://stockory.com" target="_blank" rel="noopener noreferrer">investing</a>, and the <a href="https://mtbdash.com" target="_blank" rel="noopener noreferrer">great outdoors</a>.</p>
                </div>
            </div>

            <div className="about-divider" />

            <div className="about-video-section">
                <h3>About this Website</h3>
                { !showVideo ? (
                    <button className="video-toggle" onClick={() => setShowVideo(true)}>
                        ▶ Watch Intro
                    </button>
                ) : (
                    <div className="about-video-wrapper">
                        <iframe title="intro" src="https://www.youtube.com/embed/gqOrZ2lxcX0" style={{ border: 0 }} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                )}
            </div>
        </PageLayout>
    )
}

About.propTypes = {
    navLinkHandler: PropTypes.func
}
