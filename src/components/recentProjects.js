import React, {Component} from 'react';

const TOOLTIP_WIDTH = 180;
const PADDING = 10;

const IN_PROGRESS = [
    {
        title: 'MTBDASH.com',
        description: 'Mountain bike social media platform for finding videos, routes, and trail content with the riding community.',
        tech: ['React', 'Django', 'PostgreSQL', 'Docker'],
        link: 'https://mtbdash.com'
    }
]

const TECH_DESCRIPTIONS = {
    'Django':      'High-level Python web framework for rapid development',
    'PostgreSQL':  'Powerful open-source relational database system',
    'React':       'JavaScript library for building user interfaces',
    'PHP':         'Server-side scripting language for web development',
    'Laravel':     'PHP framework for elegant web application development',
    'Python':      'Versatile language for web, data, and automation',
    'AWS Lambda':  'Serverless compute — runs code without managing servers',
    'Node.js':     'JavaScript runtime for server-side development',
    'AWS':         'Amazon\'s cloud computing platform',
    'Docker':      'Platform for containerizing and deploying applications',
    'REST APIs':   'Architectural standard for designing networked APIs',
    'MySQL':       'Open-source relational database management system',
    'OAuth':       'Open standard for secure access delegation',
    'JavaScript':  'Dynamic programming language for the web',
}

const RECENT_PROJECTS = [
    {
        title: 'Portfolio Website',
        description: 'Personal portfolio built with React, served via Heroku with a PHP/Laravel API backend and AWS Lambda for form handling.',
        tech: ['React', 'PHP', 'Laravel', 'Python', 'AWS Lambda']
    },
    {
        title: 'Microservices Platform',
        description: 'Contributed to microservices architecture at Neighborhoods.com, building scalable API integrations and data pipelines.',
        tech: ['Node.js', 'Python', 'AWS', 'Docker']
    },
    {
        title: 'Analytics Integrations',
        description: 'Built partnerships integrations for DialogTech connecting call analytics data to major marketing platforms.',
        tech: ['PHP', 'REST APIs', 'MySQL', 'OAuth']
    },
    {
        title: 'Call Tracking Platform',
        description: 'Professional services work building custom call tracking and attribution solutions for enterprise clients.',
        tech: ['PHP', 'Laravel', 'JavaScript', 'MySQL']
    }
]

export default class RecentProjects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tooltip: null,
            tooltipLeft: 0,
            tooltipTop: 0,
            arrowLeft: '50%'
        }
    }

    showTooltip = (e, text) => {
        if (!text) return;
        const rect = e.target.getBoundingClientRect();
        const pillCenter = rect.left + rect.width / 2;

        // Clamp tooltip so it never goes off screen
        const rawLeft = pillCenter - TOOLTIP_WIDTH / 2;
        const clampedLeft = Math.max(PADDING, Math.min(rawLeft, window.innerWidth - TOOLTIP_WIDTH - PADDING));

        // Arrow points to pill center regardless of tooltip shift
        const arrowLeft = pillCenter - clampedLeft;

        this.setState({
            tooltip: text,
            tooltipLeft: clampedLeft,
            tooltipTop: rect.top,
            arrowLeft
        });
    }

    hideTooltip = () => {
        this.setState({ tooltip: null });
    }

    render() {
        const { tooltip, tooltipLeft, tooltipTop, arrowLeft } = this.state;

        return(
            <div className="main-section">
                <div className="sub-section">
                    <div className="text-area">
                        <div className="in-progress-section">
                            <h3 className="in-progress-heading">
                                <span className="in-progress-dot" />
                                In Progress
                            </h3>
                            { IN_PROGRESS.map((project, index) =>
                                <div key={index} className="in-progress-card">
                                    <a className="in-progress-title" href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
                                    <p className="recent-project-description">{project.description}</p>
                                    <div className="recent-project-tech">
                                        { project.tech.map((t, i) =>
                                            <span
                                                key={i}
                                                className="recent-project-pill"
                                                onMouseEnter={(e) => this.showTooltip(e, TECH_DESCRIPTIONS[t])}
                                                onMouseLeave={this.hideTooltip}
                                            >{t}</span>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                        <h3>Recent Projects</h3>
                        <div className="recent-projects-grid">
                            { RECENT_PROJECTS.map((project, index) =>
                                <div key={index} className="recent-project-card">
                                    <div className="recent-project-title">{project.title}</div>
                                    <p className="recent-project-description">{project.description}</p>
                                    <div className="recent-project-tech">
                                        { project.tech.map((t, i) =>
                                            <span
                                                key={i}
                                                className="recent-project-pill"
                                                onMouseEnter={(e) => this.showTooltip(e, TECH_DESCRIPTIONS[t])}
                                                onMouseLeave={this.hideTooltip}
                                            >{t}</span>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                { tooltip &&
                    <div
                        className="tech-tooltip"
                        style={{ left: tooltipLeft, top: tooltipTop }}
                    >
                        <style>{`.tech-tooltip::after { left: ${arrowLeft}px; transform: translateX(-50%); }`}</style>
                        {tooltip}
                    </div>
                }
            </div>
        )
    }

}
