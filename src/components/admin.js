import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withAuth } from '@okta/okta-react';
import axios from 'axios';


export default withAuth(class Admin extends Component {
    
    projectDetailsUrl = process.env.REACT_APP_PROJECT_DETAILS_URL;
    projectTechnologiesUrl = process.env.REACT_APP_PROJECT_TECHNOLOGIES_URL;

    static propTypes = {
        loggedIn: PropTypes.func,
        logout: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.state = {
            projectDetailsName : '',
            projectDetails: '',
            projectTechnologyName: '',
            projectTechnology: ''
        }
    }

    componentDidMount() {

        this.props.loggedIn();

    }

    onChangeHandler = (e, type) => {

        this.setState({
            [type]: e.target.value
        })

    }

    postData = async (e, type) => {

        e.preventDefault();
  
        try {

          let url, params;  
          if (type === 'project_details_form') {
              url = this.projectDetailsUrl;
              params = {
                  project_name: this.state.projectDetailsName,
                  details: this.state.projectDetails
              };
          } else if (type === 'project_technologies_form') {
              url = this.projectTechnologiesUrl;
              params = {
                project_name: this.state.projectTechnologyName,
                technology: this.state.projectTechnology
            };
          }
          const response = await axios.post(url, params);
          console.log(response.data);

            if (type === 'project_details_form') {
                this.setState({
                    projectDetailsName: '',
                    projectDetails: ''
                });
            } else if (type === 'project_technologies_form') {
                this.setState({
                    projectTechnologyName: '',
                    projectTechnology: ''
                });
            }
    
        } catch (error) {
          console.log("error", error);
        }
    }

    render() {

        return(
            <div className="main-section">
                <div className="sub-section">
                    <div className="text-area">
                        <h3 id="admin_header_text">Admin</h3>
                        <button id="logout_button" onClick={this.props.logout}>Logout</button>
                        <form id="project_details_form" className="contact-form" onSubmit={(e) => this.postData(e, 'project_details_form')}>
                            <label>
                                <div>Project Name</div>
                                <input 
                                    type="text" 
                                    name="project_name"
                                    value={this.state.projectDetailsName}
                                    onChange={(e) => this.onChangeHandler(e, 'projectDetailsName')}
                                />
                            </label>
                            <label>
                                <div>Details</div>
                                <input 
                                    type="text" 
                                    name="details"
                                    value={this.state.projectDetails}
                                    onChange={(e) => this.onChangeHandler(e, 'projectDetails')}
                                />
                            </label>
                            <input className="submit-button" type="submit" value="Submit"/>
                        </form>
                        <form id="project_technologies_form" className="contact-form" onSubmit={(e) => this.postData(e, 'project_technologies_form')}>
                            <label>
                                <div>Project Name</div>
                                <input 
                                    type="text" 
                                    name="project_name"
                                    value={this.state.projectTechnologyName}
                                    onChange={(e) => this.onChangeHandler(e, 'projectTechnologyName')}
                                />
                            </label>
                            <label>
                                <div>Technology</div>
                                <input 
                                    type="text" 
                                    name="technology"
                                    value={this.state.projectTechnology}
                                    onChange={(e) => this.onChangeHandler(e, 'projectTechnology')}
                                />
                            </label>
                            <input className="submit-button" type="submit" value="Submit"/>
                        </form>
                    </div>
                </div>
            </div>
        )

    }

})