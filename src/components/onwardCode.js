import React from 'react';
import mtbdashScreenshot from '../images/mtbdash.jpg';
import carcriticalScreenshot from '../images/carcritical.jpg';

const SITES = [
    {
        title: 'MTBDASH.com',
        description: 'Mountain bike social media platform for finding videos, routes, and trail content.',
        link: 'https://mtbdash.com',
        image: mtbdashScreenshot,
    },
    {
        title: 'CarCritical.com',
        description: 'Video catalog, specs, shops and social media for the automotive community.',
        link: 'https://carcritical.com',
        image: carcriticalScreenshot,
    },
]

const OnwardCode = () => (
    <div className="main-section">
        <div className="sub-section">
            <div className="onward-code">
                <h2 className="onward-code-name">Onward Code LLC</h2>
                <p className="onward-code-tagline">
                    An independent software studio building data-driven sites for enthusiasts.
                </p>
                <div className="recent-projects-grid onward-code-sites">
                    {SITES.map((site) => (
                        <a
                            key={site.title}
                            href={site.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="recent-project-card onward-code-card"
                        >
                            <img src={site.image} alt={site.title} className="onward-code-screenshot" />
                            <span className="recent-project-title">{site.title}</span>
                            <p className="recent-project-description">{site.description}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default OnwardCode;
