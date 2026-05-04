import React, { useState } from 'react';
import PropTypes from 'prop-types';

const INITIAL_VISIBLE = 10;

export default function Skills({ skills, some_experience, saas }) {
    const [showAllProficient, setShowAllProficient] = useState(false);
    const [showAllSome, setShowAllSome] = useState(false);
    const [showAllSaas, setShowAllSaas] = useState(false);

    const proficient = skills || [];
    const some = some_experience || [];
    const saasTools = saas || [];
    const visibleProficient = showAllProficient ? proficient : proficient.slice(0, INITIAL_VISIBLE);
    const visibleSome = showAllSome ? some : some.slice(0, INITIAL_VISIBLE);
    const visibleSaas = showAllSaas ? saasTools : saasTools.slice(0, INITIAL_VISIBLE);

    return (
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
                                <button className="skills-show-all" onClick={() => setShowAllProficient(!showAllProficient)}>
                                    { showAllProficient ? 'Show less' : `+${proficient.length - INITIAL_VISIBLE} more` }
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
                                <button className="skills-show-all" onClick={() => setShowAllSome(!showAllSome)}>
                                    { showAllSome ? 'Show less' : `+${some.length - INITIAL_VISIBLE} more` }
                                </button>
                            }
                        </div>
                        <div className="skills-group">
                            <p className="skills-label">SaaS</p>
                            <div className="skills-pills">
                                { visibleSaas.map((tool, index) =>
                                    <span
                                        key={index}
                                        className="skill-pill skill-pill--some"
                                        style={{ animationDelay: `${index * 0.05}s` }}
                                    >{tool}</span>
                                )}
                            </div>
                            { saasTools.length > INITIAL_VISIBLE &&
                                <button className="skills-show-all" onClick={() => setShowAllSaas(!showAllSaas)}>
                                    { showAllSaas ? 'Show less' : `+${saasTools.length - INITIAL_VISIBLE} more` }
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Skills.propTypes = {
    skills: PropTypes.array,
    some_experience: PropTypes.array,
    saas: PropTypes.array
}
