import React, {Component} from 'react'
import PropTypes from 'prop-types';

export default class Projects extends Component {

    projectDetailsUrl = process.env.REACT_APP_PROJECT_DETAILS_URL;
    projectTechnologiesUrl = process.env.REACT_APP_PROJECT_TECHNOLOGIES_URL;

    static propTypes = {
        projects: PropTypes.object,
        increaseProjectIndex: PropTypes.func,
        decreaseProjectIndex: PropTypes.func,
        currentProjectIndex: PropTypes.number,
        nextProjectIndex: PropTypes.number,
        showMore: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.state = {
            hide: 1,
            show: 2,
            showGallery: true,
            showList: false
        }
    }

    componentDidMount() {
        
        (async () => {

            if (this.props.projectDetails.length === 0) {
                await this.props.pullProjectInfo(this.projectDetailsUrl, 'projectDetails');
            }

            if (this.props.projectTechnologies.length === 0) {
                await this.props.pullProjectInfo(this.projectTechnologiesUrl, 'projectTechnologies');
            }
        })();
    }

    rotateNext = (previousId, nextId) => {
        
        // Move current project off screen to the left
        setTimeout(function(){
            let wrapper = document.getElementById('project-content-wrapper-' + previousId)
            wrapper.classList.add('previous');
        }, 300);

        setTimeout(function(){
            let wrapper = document.getElementById('project-content-wrapper-' + previousId)
            wrapper.style.display = 'none';
            wrapper.classList.remove('previous');
            wrapper.classList.add('next');
        }, 500);

        // Add next project from the right
        setTimeout(function(){
            let wrapper = document.getElementById('project-content-wrapper-' + nextId)
            wrapper.style.display = 'block';
        }, 700);

        setTimeout(function(){
            let wrapper = document.getElementById('project-content-wrapper-' + nextId)
            wrapper.classList.remove('next');
        }, 900);

        setTimeout(() => {
            this.setState({
                show: this.state.show === 1 ? 2 : 1,
                hide: this.state.hide === 2 ? 1 : 2
            }, () => this.props.increaseProjectIndex())
        }, 1000);
    }

    rotatePrevious = (previousId, nextId) => {
        
        // Move current project off screen to the left
        setTimeout(function(){
            let wrapper = document.getElementById('project-content-wrapper-' + previousId)
            wrapper.classList.add('previous');
        }, 300);

        setTimeout(function(){
            let wrapper = document.getElementById('project-content-wrapper-' + previousId)
            wrapper.style.display = 'none';
            wrapper.classList.remove('previous');
            wrapper.classList.add('next');
        }, 500);

        // Add next project from the right
        setTimeout(function(){
            let wrapper = document.getElementById('project-content-wrapper-' + nextId)
            wrapper.style.display = 'block';
        }, 700);

        setTimeout(function(){
            let wrapper = document.getElementById('project-content-wrapper-' + nextId)
            wrapper.classList.remove('next');
        }, 900);

        setTimeout(() => {
            this.setState({
                show: this.state.show === 1 ? 2 : 1,
                hide: this.state.hide === 2 ? 1 : 2
            }, () => this.props.decreaseProjectIndex())
        }, 1000);
    }

    formatProjectName = (projectName) => {
        projectName = projectName.split(' ');
        projectName = projectName.join('_');
        projectName = projectName.toLowerCase();
        projectName = projectName.replace("_integration", "");
        projectName = projectName.replace("_for_ifbyphone", "");
        projectName = projectName.replace("_for_dialogtech", "");
        projectName = projectName.replace("_for_neighborhoods.com", "");
        return projectName;
    }

    projectDetails = (projectName) => {

        projectName = this.formatProjectName(projectName);

        return(
            <div className="project-details">
                <div className="goal-content">
                    <div className="detail-header-text">What was the goal?</div>
                    <div>
                    { this.props.projectDetails.length > 0 &&
                        this.props.projectDetails.filter(item => item.project_name === projectName).map((value) => 
                            <p key={value.project_name}>{value.details}</p>
                        )
                    }
                    </div>
                </div>
                <div className="tech-content">
                    <div className="detail-header-text">What technologies were used?</div>
                        <div>
                            <ul>
                                { this.props.projectTechnologies.length > 0 &&
                                    this.props.projectTechnologies.filter(item => item.project_name === projectName).map((value) => 

                                        <li key={value.technology}>{value.technology}</li>

                                    )
                                }
                            </ul>
                        </div>
                </div>
            </div>
        )
    }

    render() {

        return(
            <div className="main-section">
                <div className="sub-section">
                    {this.props.projects.all_projects && this.state.showGallery &&
                        <div className="project-button-wrapper">
                            <button className="project-button" onClick={() => this.setState({showList: true, showGallery: false})}>List View</button>
                        </div>
                    }

                    {this.props.projects.all_projects && this.state.showList &&
                        <div className="project-button-wrapper">
                            <button className="project-button" onClick={() => this.setState({showList: false, showGallery: true})}>Gallery View</button>
                        </div>
                    }

                    {this.state.showGallery &&
                        <div className="project-rotator">

                            <div className="project-rotator-buttons">
                                {this.props.projects.all_projects && this.props.currentProjectIndex > 0 && this.props.projects.all_projects.length ? (
                                    <div className="project-button-wrapper">
                                        <button className="project-button" onClick={() => this.rotatePrevious(this.state.hide, this.state.show)}>Previous Project</button>
                                    </div>
                                ) : (
                                    <div className="project-button-wrapper">
                                        <button className="project-button" disabled>Previous Project</button>
                                    </div>
                                )}

                                {this.props.projects.all_projects && this.props.nextProjectIndex < this.props.projects.all_projects.length ? (
                                    <div className="project-button-wrapper">
                                        <button className="project-button" onClick={() => this.rotateNext(this.state.hide, this.state.show)}>Next Project</button>
                                    </div>
                                ) : (
                                    <div className="project-button-wrapper">
                                        <button className="project-button" disabled>Next Project</button>
                                    </div>
                                )}

                            </div>
                            
                            <div className="project-content-wrapper" id="project-content-wrapper-1">
                                {this.props.projects.all_projects && this.state.show === 2 && this.props.projects.all_projects[this.props.currentProjectIndex] &&
                                    <div className="project-content">
                                        <div className="project-header">
                                            <b>{this.props.projects.all_projects[this.props.currentProjectIndex]}</b>
                                        </div>
                                            {this.projectDetails(this.props.projects.all_projects[this.props.currentProjectIndex])}
                                    </div>
                                }
                                {this.props.projects.all_projects && this.state.show === 1 && this.props.projects.all_projects[this.props.nextProjectIndex] &&
                                        
                                    <div className="project-content">
                                        <div className="project-header">
                                            <b>{this.props.projects.all_projects[this.props.nextProjectIndex]}</b>
                                        </div>
                                            {this.projectDetails(this.props.projects.all_projects[this.props.nextProjectIndex])}
                                    </div>
                                }
                            </div>

                            <div className="project-content-wrapper next" id="project-content-wrapper-2">
                                {this.props.projects.all_projects && this.state.show === 2 && this.props.projects.all_projects[this.props.nextProjectIndex] &&
                                    <div className="project-content">
                                        <div className="project-header">
                                            <b>{this.props.projects.all_projects[this.props.nextProjectIndex]}</b>
                                        </div>
                                        {this.projectDetails(this.props.projects.all_projects[this.props.nextProjectIndex])}
                                    </div>
                                }
                                {this.props.projects.all_projects && this.state.show === 1 && this.props.projects.all_projects[this.props.currentProjectIndex] &&

                                    <div className="project-content">
                                        <div className="project-header">
                                            <b>{this.props.projects.all_projects[this.props.currentProjectIndex]}</b>
                                        </div>
                                        {this.projectDetails(this.props.projects.all_projects[this.props.currentProjectIndex])}
                                </div>
                                }
                            </div>
                        </div>
                    }

                    {this.state.showList && 
                        <div className="text-area">
                            <h3>Projects:</h3>
                            <ul>
                                <li><b>Microservices Work - Neighborhoods.com, Chicago, IL (2019-2020)</b></li>
                                    <ul>
                                        {this.props.projects.microservices &&
                                            this.props.projects.microservices.map((project, index) => 
                                                <li key={index}>{project}</li>
                                            )
                                        }
                                    </ul>
                                    <li><b>Partnerships Work - DialogTech, Chicago, IL (2015-2019)</b></li>
                                    <ul>
                                        {this.props.projects.partnerships &&
                                            this.props.projects.partnerships.map((project, index) => 
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
                                <li><b>Professional Services Work - DialogTech, Chicago, IL (2012-2015)</b></li>
                                <ul>
                                    {this.props.projects.professional_services &&
                                        this.props.projects.professional_services.map((project, index) => 
                                            <li key={index}>{project}</li>
                                        )
                                    }
                                </ul>
                                </ul>
                                </>
                            }
                        </div>
                    }
                </div>
            </div>
        )

    }

}