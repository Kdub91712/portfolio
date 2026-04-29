import React, { useState } from 'react';
import axios from 'axios';

const projectDetailsUrl = process.env.REACT_APP_PROJECT_DETAILS_URL;
const projectTechnologiesUrl = process.env.REACT_APP_PROJECT_TECHNOLOGIES_URL;

export default function Admin({ loggedOut }) {
    const [projectDetailsName, setProjectDetailsName] = useState('');
    const [projectDetails, setProjectDetails] = useState('');
    const [projectTechnologyName, setProjectTechnologyName] = useState('');
    const [projectTechnology, setProjectTechnology] = useState('');
    const [detailsSuccess, setDetailsSuccess] = useState(false);
    const [techSuccess, setTechSuccess] = useState(false);

    const handleLogout = () => {
        loggedOut();
        window.location.href = '/';
    };

    const postProjectDetails = async (e) => {
        e.preventDefault();
        try {
            await axios.post(projectDetailsUrl, {
                project_name: projectDetailsName,
                details: projectDetails
            });
            setProjectDetailsName('');
            setProjectDetails('');
            setDetailsSuccess(true);
            setTimeout(() => setDetailsSuccess(false), 3000);
        } catch (error) {
            console.log("error", error);
        }
    };

    const postProjectTechnology = async (e) => {
        e.preventDefault();
        try {
            await axios.post(projectTechnologiesUrl, {
                project_name: projectTechnologyName,
                technology: projectTechnology
            });
            setProjectTechnologyName('');
            setProjectTechnology('');
            setTechSuccess(true);
            setTimeout(() => setTechSuccess(false), 3000);
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <div className="main-section">
            <div className="sub-section">
                <div className="text-area">
                    <div className="admin-header">
                        <h3>Admin</h3>
                        <button className="admin-logout" onClick={handleLogout}>Logout</button>
                    </div>

                    <div className="admin-forms-grid">
                        <div className="admin-card">
                            <h4 className="admin-card-title">Project Details</h4>
                            <form className="contact-form" onSubmit={postProjectDetails}>
                                <label>
                                    <div>Project Name</div>
                                    <input
                                        type="text"
                                        value={projectDetailsName}
                                        onChange={(e) => setProjectDetailsName(e.target.value)}
                                        placeholder="e.g. area_service"
                                    />
                                </label>
                                <label>
                                    <div>Details</div>
                                    <textarea
                                        value={projectDetails}
                                        onChange={(e) => setProjectDetails(e.target.value)}
                                        placeholder="Project description..."
                                    />
                                </label>
                                { detailsSuccess && <p className="admin-success">Saved successfully</p> }
                                <input className="submit-button" type="submit" value="Save" />
                            </form>
                        </div>

                        <div className="admin-card">
                            <h4 className="admin-card-title">Project Technology</h4>
                            <form className="contact-form" onSubmit={postProjectTechnology}>
                                <label>
                                    <div>Project Name</div>
                                    <input
                                        type="text"
                                        value={projectTechnologyName}
                                        onChange={(e) => setProjectTechnologyName(e.target.value)}
                                        placeholder="e.g. area_service"
                                    />
                                </label>
                                <label>
                                    <div>Technology</div>
                                    <input
                                        type="text"
                                        value={projectTechnology}
                                        onChange={(e) => setProjectTechnology(e.target.value)}
                                        placeholder="e.g. React"
                                    />
                                </label>
                                { techSuccess && <p className="admin-success">Saved successfully</p> }
                                <input className="submit-button" type="submit" value="Save" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
