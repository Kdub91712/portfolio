import React, {Component} from 'react';
import Navigation from './components/navigation';
import Footer from './components/footer';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
import axios from 'axios';
import './App.css';

export default class App extends Component {

  //formUrl = 'http://localhost:8080/form';
  formUrl = 'https://kdub-php7.herokuapp.com/form';

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
      form: {

      },
      currentProjectIndex : 0,
      nextProjectIndex : 1  
    }
  }

  componentDidMount() {
    let dataUrl = 'https://73wg71ijuc.execute-api.us-west-2.amazonaws.com/dev/portfolioLambdaPython'
    this.pullFromApi(dataUrl)
  }

  pullFromApi = (dataUrl) => {

    axios.get(dataUrl, {
        crossDomain: true
      }).then(res => {
        const data = res.data;
        this.setState({ data })
      }).catch(error => {
        console.log(error);
    })

  }

  loadHomePage = () => {

    this.setState({
      showAbout: false,
      showSkills: false,
      showProjects: true,
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
      this.hideAllSections()
      this.setState({
        showAbout: !this.state.showAbout ? true : true
      })
    }

    if (page === 'projects') {
      this.hideAllSections()
      this.setState({
        showProjects: !this.state.showProjects ? true : true
      })
    }

    if (page === 'skills') {
      this.hideAllSections()
      this.setState({
        showSkills: !this.state.showSkills ? true : true
      })
    }

    if (page === 'contact') {
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
    } else {
      this.setState({
        form: {
          "name" : e.target.name.value,
          "phone": e.target.phone.value,
          "email": e.target.email.value,
          "comments": e.target.comments.value
        }
        
      }, () => {
  
        axios.post(this.formUrl, {
          data: this.state.form
        }).then(res => {
          console.log('form submit success');
          document.getElementById("contact_form").reset();

        }).catch(error => {
          console.log(error);
        })
  
      })
    }
  }

  hideAllSections = () => {

    this.setState({
      showAbout: false,
      showSkills: false,
      showProjects: false,
      showContact: false,
    })

  }

  increaseProjectIndex = () => {
    this.setState({
      currentProjectIndex: this.state.currentProjectIndex + 1,
      nextProjectIndex: this.state.nextProjectIndex + 1
    })
  }

  decreaseProjectIndex = () => {
    this.setState({
      currentProjectIndex: this.state.currentProjectIndex - 1,
      nextProjectIndex: this.state.nextProjectIndex - 1
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

        <Footer/>
      </div>
    )
  }
}