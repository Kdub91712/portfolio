import React, {Component} from 'react';
import PropTypes from 'prop-types';

const INITIAL_VISIBLE = 6;

export default class Skills extends Component {

    static propTypes = {
        skills: PropTypes.array
    }

    constructor(props) {
        super(props);
        this.state = {
            showAllProficient: false,
            showAllSome: false
        }
    }

    render() {

        const proficient = this.props.skills || [];
        const some = this.props.some_experience || [];
        const visibleProficient = this.state.showAllProficient ? proficient : proficient.slice(0, INITIAL_VISIBLE);
        const visibleSome = this.state.showAllSome ? some : some.slice(0, INITIAL_VISIBLE);

        return(
            <div className="main-section">
                <div className="sub-section">
                    <div className="text-area">
                        <h3>Skills</h3>
                        <div className="skills-section">
                            <div className="skills-group">
                                <p className="skills-label">Proficient</p>
                                <div className="skills-pills">
                                    { visibleProficient.map((skill, index) =>
                                        <span
                                            key={index}
                                            className="skill-pill skill-pill--proficient"
                                            style={{ animationDelay: `${index * 0.05}s` }}
                                        >{skill}</span>
                                    )}
                                </div>
                                { proficient.length > INITIAL_VISIBLE &&
                                    <button className="skills-show-all" onClick={() => this.setState({ showAllProficient: !this.state.showAllProficient })}>
                                        { this.state.showAllProficient ? 'Show less' : `+${proficient.length - INITIAL_VISIBLE} more` }
                                    </button>
                                }
                            </div>
                            <div className="skills-group">
                                <p className="skills-label">Some Experience</p>
                                <div className="skills-pills">
                                    { visibleSome.map((experience, index) =>
                                        <span
                                            key={index}
                                            className="skill-pill skill-pill--some"
                                            style={{ animationDelay: `${index * 0.05}s` }}
                                        >{experience}</span>
                                    )}
                                </div>
                                { some.length > INITIAL_VISIBLE &&
                                    <button className="skills-show-all" onClick={() => this.setState({ showAllSome: !this.state.showAllSome })}>
                                        { this.state.showAllSome ? 'Show less' : `+${some.length - INITIAL_VISIBLE} more` }
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }

}
