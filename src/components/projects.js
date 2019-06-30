import React, {Component} from 'react'

export default class Projects extends Component {

    render() {

        return(
            <div className="main-section">
                <section className="sub-section">
                    <div className="text-area">
                        <p>Projects:</p>
                        <ul>
                            <li>Professional Services</li>
                            <ul>
                                {this.props.projects.professional_services &&
                                    this.props.projects.professional_services.map((project, index) => 
                                        <li key={index}>{project}</li>
                                    )
                                }
                            </ul>
                        </ul>
                        <ul>
                            <li>Partnerships</li>
                            <ul>
                                {this.props.projects.partnerships &&
                                    this.props.projects.partnerships.map((project, index) => 
                                        <li key={index}>{project}</li>
                                    )
                                }
                            </ul>
                        </ul>
                    </div>
                </section>
            </div>
        )

    }

}