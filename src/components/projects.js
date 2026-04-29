import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types';

export default function Projects({
    projects,
    projectDetails,
    projectTechnologies,
    pullProjectInfo,
    showMoreProjects,
    showMore,
    currentProjectIndex,
    nextProjectIndex,
    increaseProjectIndex,
    decreaseProjectIndex
}) {
    const projectDetailsUrl = process.env.REACT_APP_PROJECT_DETAILS_URL;
    const projectTechnologiesUrl = process.env.REACT_APP_PROJECT_TECHNOLOGIES_URL;

    const [hide, setHide] = useState(1);
    const [show, setShow] = useState(2);
    const [showGallery, setShowGallery] = useState(true);
    const [showList, setShowList] = useState(false);
    const [loading, setLoading] = useState(true);
    const isMounted = useRef(true);

    useEffect(() => {
        isMounted.current = true;

        (async () => {
            if (projectDetails.length === 0) {
                await pullProjectInfo(projectDetailsUrl, 'projectDetails');
            }
            if (projectTechnologies.length === 0) {
                await pullProjectInfo(projectTechnologiesUrl, 'projectTechnologies');
            }
            if (isMounted.current) setLoading(false);
        })();

        return () => { isMounted.current = false; };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const rotateNext = (previousId, nextId) => {
        setTimeout(function(){
            let wrapper = document.getElementById('project-content-wrapper-' + previousId)
            wrapper.classList.add('previous');
        }, 50);

        setTimeout(function(){
            let wrapper = document.getElementById('project-content-wrapper-' + previousId)
            wrapper.style.display = 'none';
            wrapper.classList.remove('previous');
            wrapper.classList.add('next');
        }, 300);

        setTimeout(function(){
            let wrapper = document.getElementById('project-content-wrapper-' + nextId)
            wrapper.style.display = 'block';
        }, 350);

        setTimeout(function(){
            let wrapper = document.getElementById('project-content-wrapper-' + nextId)
            wrapper.classList.remove('next');
        }, 500);

        setTimeout(() => {
            setShow(prev => prev === 1 ? 2 : 1);
            setHide(prev => prev === 2 ? 1 : 2);
            increaseProjectIndex();
        }, 600);
    }

    const rotatePrevious = (previousId, nextId) => {
        setTimeout(function(){
            let wrapper = document.getElementById('project-content-wrapper-' + previousId)
            wrapper.classList.add('previous');
        }, 50);

        setTimeout(function(){
            let wrapper = document.getElementById('project-content-wrapper-' + previousId)
            wrapper.style.display = 'none';
            wrapper.classList.remove('previous');
            wrapper.classList.add('next');
        }, 300);

        setTimeout(function(){
            let wrapper = document.getElementById('project-content-wrapper-' + nextId)
            wrapper.style.display = 'block';
        }, 350);

        setTimeout(function(){
            let wrapper = document.getElementById('project-content-wrapper-' + nextId)
            wrapper.classList.remove('next');
        }, 500);

        setTimeout(() => {
            setShow(prev => prev === 1 ? 2 : 1);
            setHide(prev => prev === 2 ? 1 : 2);
            decreaseProjectIndex();
        }, 600);
    }

    const formatProjectName = (projectName) => {
        projectName = projectName.split(' ');
        projectName = projectName.join('_');
        projectName = projectName.toLowerCase();
        projectName = projectName.replace("_integration", "");
        projectName = projectName.replace("_for_ifbyphone", "");
        projectName = projectName.replace("_for_dialogtech", "");
        projectName = projectName.replace("_for_neighborhoods.com", "");
        return projectName;
    }

    const parsePodcastLink = (projectDetails) => {
        return projectDetails.split('|')[1];
    }

    const parseDescription = (projectDescription) => {
        return projectDescription.split('|')[0];
    }

    const renderProjectDetails = (projectName) => {
        projectName = formatProjectName(projectName);

        if (loading) {
            return (
                <div className="project-details-loading">
                    <div className="spinner"></div>
                </div>
            );
        }

        return (
            <div className="project-details">
                <div className="goal-content">
                    <div className="detail-header-text">What was the goal?</div>
                    <div>
                    { projectDetails.length > 0 &&
                        projectDetails.filter(item => item.project_name === projectName).map((value) =>
                            <p key={value.project_name}>{parseDescription(value.details)}
                                {parsePodcastLink(value.details) && <a target="_blank" rel="noopener noreferrer" href={parsePodcastLink(value.details)}>Hear more about this project</a>}
                            </p>
                        )
                    }
                    </div>
                </div>
                <div className="tech-content">
                    <div className="detail-header-text">What technologies were used?</div>
                    <div>
                        <ul>
                            { projectTechnologies.length > 0 &&
                                projectTechnologies.filter(item => item.project_name === projectName).map((value) =>
                                    <li key={value.technology}>{value.technology}</li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="main-section">
            <div className="sub-section">
                {projects.all_projects && showGallery &&
                    <div className="project-button-wrapper">
                        <button className="project-button" onClick={() => { setShowList(true); setShowGallery(false); }}>List View</button>
                    </div>
                }

                {projects.all_projects && showList &&
                    <div className="project-button-wrapper">
                        <button className="project-button" onClick={() => { setShowList(false); setShowGallery(true); }}>Gallery View</button>
                    </div>
                }

                {showGallery &&
                    <div className="project-rotator">
                        <div className="project-carousel">
                            <button
                                className="carousel-arrow"
                                onClick={() => rotatePrevious(hide, show)}
                                disabled={!projects.all_projects || currentProjectIndex === 0}
                            >&#8592;</button>

                            <div className="carousel-track">
                                <div className="project-content-wrapper" id="project-content-wrapper-1">
                                    {projects.all_projects && show === 2 && projects.all_projects[currentProjectIndex] &&
                                        <div className="project-content">
                                            <div className="project-header">{projects.all_projects[currentProjectIndex]}</div>
                                            {renderProjectDetails(projects.all_projects[currentProjectIndex])}
                                        </div>
                                    }
                                    {projects.all_projects && show === 1 && projects.all_projects[nextProjectIndex] &&
                                        <div className="project-content">
                                            <div className="project-header">{projects.all_projects[nextProjectIndex]}</div>
                                            {renderProjectDetails(projects.all_projects[nextProjectIndex])}
                                        </div>
                                    }
                                </div>

                                <div className="project-content-wrapper next" id="project-content-wrapper-2">
                                    {projects.all_projects && show === 2 && projects.all_projects[nextProjectIndex] &&
                                        <div className="project-content">
                                            <div className="project-header">{projects.all_projects[nextProjectIndex]}</div>
                                            {renderProjectDetails(projects.all_projects[nextProjectIndex])}
                                        </div>
                                    }
                                    {projects.all_projects && show === 1 && projects.all_projects[currentProjectIndex] &&
                                        <div className="project-content">
                                            <div className="project-header">{projects.all_projects[currentProjectIndex]}</div>
                                            {renderProjectDetails(projects.all_projects[currentProjectIndex])}
                                        </div>
                                    }
                                </div>
                            </div>

                            <button
                                className="carousel-arrow"
                                onClick={() => rotateNext(hide, show)}
                                disabled={!projects.all_projects || nextProjectIndex >= projects.all_projects.length}
                            >&#8594;</button>
                        </div>

                        {projects.all_projects &&
                            <div className="project-counter">
                                {currentProjectIndex + 1} / {projects.all_projects.length}
                            </div>
                        }
                    </div>
                }

                {showList &&
                    <div className="text-area">
                        <h3>Projects:</h3>
                        <ul>
                            <li><b>Microservices Work - Neighborhoods.com, Chicago, IL (2019-2020)</b></li>
                                <ul>
                                    {projects.microservices &&
                                        projects.microservices.map((project, index) =>
                                            <li key={index}>{project}</li>
                                        )
                                    }
                                </ul>
                                <li><b>Partnerships Work - DialogTech, Chicago, IL (2015-2019)</b></li>
                                <ul>
                                    {projects.partnerships &&
                                        projects.partnerships.map((project, index) =>
                                            <li key={index}>{project}</li>
                                        )
                                    }
                                </ul>
                        </ul>

                        {!showMoreProjects &&
                            <a href="/" className="show-more" onClick={(e) => showMore(e)}>Show More Projects...</a>
                        }

                        {showMoreProjects &&
                            <>
                            <a href="/" className="show-more" onClick={(e) => showMore(e)}>Show Less Projects...</a>
                            <ul>
                            <li><b>Professional Services Work - DialogTech, Chicago, IL (2012-2015)</b></li>
                            <ul>
                                {projects.professional_services &&
                                    projects.professional_services.map((project, index) =>
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

Projects.propTypes = {
    projects: PropTypes.object,
    increaseProjectIndex: PropTypes.func,
    decreaseProjectIndex: PropTypes.func,
    currentProjectIndex: PropTypes.number,
    nextProjectIndex: PropTypes.number,
    showMore: PropTypes.func
}
