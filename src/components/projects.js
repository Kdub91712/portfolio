import React, {Component} from 'react'

export default class Projects extends Component {

    render() {

        return(
            <div className="main-section">
                <div className="sub-section">
                    <div className="text-area">
                        <p>Projects:</p>
                        <ul>
                            <li>Professional Services Work - DialogTech, Chicago, IL</li>
                            <ul>
                                {this.props.projects.professional_services &&
                                    this.props.projects.professional_services.map((project, index) => 
                                        <li key={index}>{project}</li>
                                    )
                                }
                            </ul>
                        </ul>

                        {!this.props.showMoreProjects &&
                            <a href="/" className="show-more" onClick={(e) => this.props.showMore(e)}>Show More Projects...</a>
                        }

                        {this.props.showMoreProjects &&
                            <>
                            <a href="/" className="show-more" onClick={(e) => this.props.showMore(e)}>Show Less Projects...</a>
                            <ul>
                                <li>Partnerships Work - DialogTech, Chicago, IL</li>
                                <ul>
                                    {this.props.projects.partnerships &&
                                        this.props.projects.partnerships.map((project, index) => 
                                            <li key={index}>{project}</li>
                                        )
                                    }
                                </ul>
                            </ul>
                            </>
                        }
                    </div>
                </div>
            </div>
        )

    }

}