import React, {Component} from 'react';
import Navigation from './components/navigation';
import Footer from './components/footer';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
import Login from './components/login';
import axios from 'axios';
import './styles/App.scss';
import ReactGA from'react-ga';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, ImplicitCallback } from '@okta/okta-react';

const config = {
  issuer: 'https://dev-725893.okta.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '0oaze15fxXglq0guH356'
}

export default class App extends Component {

  dataUrl = process.env.REACT_APP_DATA_URL;
  formUrl = process.env.REACT_APP_FORM_URL;

  constructor(props) {
    super(props);

    this.state = {
      showAbout: false,
      showProjects: true,
      showSkills: false,
      showContact: false,
      showMoreProjects: false,
      data: {
        projects: {},
        skills: [],
        some_experience: []
      },
      projectDetails: [],
      projectTechnologies: [],
      form: {

      },
      currentProjectIndex : 0,
      nextProjectIndex : 1  
    }
  }

  componentDidMount() {
    this.initializeReactGA();
    this.pullFromApi(this.dataUrl)
  }

  initializeReactGA = () => {
    ReactGA.initialize('UA-64241241-2');
    ReactGA.pageview('/homepage');
  } 

  pullFromApi = async (dataUrl) => {

    try {

      const response = await axios.get(dataUrl);
      const data = response.data;
      this.setState({ data })

    } catch (error) {
      console.log("error", error);
    }

  }

  pullProjectInfo = async (url, type) => {

    console.log(type);

    try {

      const response = await axios.get(url);
      const data = response.data;
      this.setState({ [type]: data })

    } catch (error) {
      console.log("error", error);
    }

  }

  loadHomePage = () => {

    this.setState({
      showAbout: false,
      showSkills: false,
      showProjects: !this.state.showAdmin,
      showContact: false
    })
    
  }

  showMore = (e) => {
    e.preventDefault();
    this.setState({
      showMoreProjects: !this.state.showMoreProjects
    })

  }

  navLinkHandler = (e, page) => {
    e.preventDefault()

    if (page === 'about') {
      ReactGA.pageview('/about')
      this.hideAllSections()
      this.setState({
        showAbout: !this.state.showAbout ? true : true
      })
    }

    if (page === 'projects') {
      ReactGA.pageview('/projects')
      this.hideAllSections()
      this.setState({
        showProjects: !this.state.showProjects ? true : true,
      })
    }

    if (page === 'skills') {
      ReactGA.pageview('/skills')
      this.hideAllSections()
      this.setState({
        showSkills: !this.state.showSkills ? true : true
      })
    }

    if (page === 'contact') {
      ReactGA.pageview('/contact')
      this.hideAllSections()
      this.setState({
        showContact: !this.state.showContact ? true : true
      })
    }
  }

  formSubmitHandler = (e) => {

    e.preventDefault()

    if (e.target.name.value === '' && e.target.phone.value === ''  && e.target.email.value === '' 
      && e.target.comments.value === '' ) {
      console.log('empty form!');
      ReactGA.event({
        category: 'User',
        action: 'Empty Form'
      });
    } else {
      
      this.setState({
        form: {
          "name" : e.target.name.value,
          "phone": e.target.phone.value,
          "email": e.target.email.value,
          "comments": e.target.comments.value
        }
        
      }, async () => {
  
        try {

          ReactGA.event({
            category: 'User',
            action: 'Submit Form'
          });
          const response = await axios.post(this.formUrl, {data: this.state.form});
          console.log(response.data);
          document.getElementById("contact_form").reset();
    
        } catch (error) {
          console.log("error", error);
        }

      })
    }
  }

  hideAllSections = () => {

    this.setState({
      showAbout: false,
      showSkills: false,
      showProjects: false,
      showContact: false,
      showAdmin: false
    })

  }

  increaseProjectIndex = () => {
    this.setState({
      currentProjectIndex: this.state.currentProjectIndex + 1,
      nextProjectIndex: this.state.nextProjectIndex + 1
    })

    ReactGA.event({
      category: 'User',
      action: 'Next Project'
    });
  }

  decreaseProjectIndex = () => {
    this.setState({
      currentProjectIndex: this.state.currentProjectIndex - 1,
      nextProjectIndex: this.state.nextProjectIndex - 1
    })

    ReactGA.event({
      category: 'User',
      action: 'Previous Project'
    });
  }

  loggedIn = () => {

    this.setState({
      showAbout: false,
      showSkills: false,
      showProjects: false,
      showContact: false,
      showAdmin: true
    })

  }

  loggedOut = () => {
    this.setState({
      showProjects: true,
      showAdmin: false
    })
  }

  render() {
    return (
      <div className="App">
        
        <div onClick={() => this.loadHomePage()}>
            <header className="App-header">
              Kevin Wilson - Full Stack Software Engineer
            </header>
        </div>

        <Navigation
          navLinkHandler = {this.navLinkHandler}
          navClasses = {this.state.navClasses}
        />

        { this.state.showAbout && 
          <About

          />
        }

        { this.state.showProjects && 
          <Projects
            projects = {this.state.data.projects}
            projectDetails = {this.state.projectDetails}
            projectTechnologies = {this.state.projectTechnologies}
            pullProjectInfo = {this.pullProjectInfo}
            showMoreProjects = {this.state.showMoreProjects}
            showMore = {this.showMore}
            currentProjectIndex = {this.state.currentProjectIndex}
            nextProjectIndex = {this.state.nextProjectIndex}
            increaseProjectIndex = {this.increaseProjectIndex}
            decreaseProjectIndex = {this.decreaseProjectIndex}
          />
        }

        { this.state.showSkills && 
          <Skills
            skills = {this.state.data.skills}
            some_experience = {this.state.data.some_experience}
          />
        }

        { this.state.showContact && 
          <Contact
            formSubmitHandler = {this.formSubmitHandler}
          />
        }

        <Router>
            <Security className="admin-section" issuer={config.issuer}
                    client_id={config.client_id}
                    redirect_uri={config.redirect_uri}
            >
                <Route 
                  path='/admin' 
                  exact={true}
                  render={() => <Login 
                  
                      loggedIn = {this.loggedIn}
                      loggedOut = {this.loggedOut}

                  />}
                />
                <Route path='/implicit/callback' component={ImplicitCallback}/>
            </Security>
        </Router>

        <Footer/>
      </div>
    )
  }
}