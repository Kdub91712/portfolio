import React, {Component} from 'react'

export default class Projects extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hide: 1,
            show: 2,
        }
    }

    rotateNext = (previousId, nextId) => {

        console.log('next project');
        console.log(previousId);
        console.log(nextId);
        
        // Move current project off screen to the left
        setTimeout(function(){
            let wrapper = document.getElementById('project-content-wrapper-' + previousId)
            wrapper.classList.add('previous');
        }, 500);

        setTimeout(function(){
            let wrapper = document.getElementById('project-content-wrapper-' + previousId)
            wrapper.style.display = 'none';
            wrapper.classList.remove('previous');
            wrapper.classList.add('next');
        }, 700);

        // Add next project from the right
        setTimeout(function(){
            let wrapper = document.getElementById('project-content-wrapper-' + nextId)
            wrapper.style.display = 'block';
        }, 900);

        setTimeout(function(){
            let wrapper = document.getElementById('project-content-wrapper-' + nextId)
            wrapper.classList.remove('next');
        }, 1100);

        setTimeout(() => {
            this.setState({
                show: this.state.show === 1 ? 2 : 1,
                hide: this.state.hide === 2 ? 1 : 2
            }, () => this.props.increaseProjectIndex())
        }, 1200);
    }

    render() {

        return(
            <div className="main-section">
                <div className="sub-section">

                <div className="project-rotator">

                    <div className="project-rotator-buttons">
                        <div className="project-button-wrapper">
                            <button className="project-button">Previous Project</button>
                        </div>

                        {this.props.projects.partnerships && this.props.nextProjectIndex < this.props.projects.partnerships.length &&
                            <div className="project-button-wrapper">
                                <button className="project-button" onClick={() => this.rotateNext(this.state.hide, this.state.show)}>Next Project</button>
                            </div>
                        }
                    </div>

                    <div className="project-content-wrapper" id="project-content-wrapper-1">
                        <div className="project-content">
                            {this.props.projects.partnerships && this.state.show === 2 && this.props.projects.partnerships[this.props.currentProjectIndex] &&
                                this.props.projects.partnerships[this.props.currentProjectIndex]
                            }
                            {this.props.projects.partnerships && this.state.show === 1 && this.props.projects.partnerships[this.props.nextProjectIndex] &&
                                    this.props.projects.partnerships[this.props.nextProjectIndex]
                            }
                            <div className="goal-content">
                                <div>What was the goal?</div>
                                <div>Goal Text</div>
                            </div>
                            <div className="tech-content">
                                <div>What technologies were used?</div>
                                <div>Technology Text</div>
                            </div>

                        </div>
                    </div>

                    <div className="project-content-wrapper next" id="project-content-wrapper-2">
                        <div className="project-content">
                            {this.props.projects.partnerships && this.state.show === 2 && this.props.projects.partnerships[this.props.nextProjectIndex] &&
                                    this.props.projects.partnerships[this.props.nextProjectIndex]
                            }
                            {this.props.projects.partnerships && this.state.show === 1 && this.props.projects.partnerships[this.props.currentProjectIndex] &&
                                    this.props.projects.partnerships[this.props.currentProjectIndex]
                            }
                            <div className="goal-content">
                                <div>What was the goal?</div>
                                <div>Goal Text</div>
                            </div>
                            <div className="tech-content">
                                <div>What technologies were used?</div>
                                <div>Technology Text</div>
                            </div>

                        </div>
                    </div>

                    </div>


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