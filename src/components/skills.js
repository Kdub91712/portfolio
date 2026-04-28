import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Skills extends Component {

    static propTypes = {
        skills: PropTypes.array
    }

    render() {

        return(
            <div className="main-section">
                <div className="sub-section">
                    <div className="text-area">
                        <h3>Skills</h3>
                        <div className="skills-section">
                            <div className="skills-group">
                                <p className="skills-label">Proficient</p>
                                <div className="skills-pills">
                                    { this.props.skills &&
                                        this.props.skills.map((skill, index) =>
                                            <span
                                                key={index}
                                                className="skill-pill skill-pill--proficient"
                                                style={{ animationDelay: `${index * 0.05}s` }}
                                            >{skill}</span>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="skills-group">
                                <p className="skills-label">Some Experience</p>
                                <div className="skills-pills">
                                    { this.props.some_experience &&
                                        this.props.some_experience.map((experience, index) =>
                                            <span
                                                key={index}
                                                className="skill-pill skill-pill--some"
                                                style={{ animationDelay: `${index * 0.05}s` }}
                                            >{experience}</span>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }

}