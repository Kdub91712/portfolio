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
                        <p>Proficient: </p>
                        <ul>
                        { this.props.skills &&
                            this.props.skills.map((skill, index) => 
                            <li key={index}>{skill}</li>
                        )
                        }
                        </ul>
                        <p>Some Experience: </p>
                        <ul>
                        { this.props.some_experience &&
                            this.props.some_experience.map((experience, index) => 
                            <li key={index}>{experience}</li>
                        )
                        }
                        </ul>
                    </div>
                </div>
            </div>
        )

    }

}