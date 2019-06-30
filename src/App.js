import React, {Component} from 'react';
import './App.css';
import Navigation from './components/navigation';
import Footer from './components/footer';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
import axios from 'axios'

export default class App extends Component {

  componentWillMount() {
    this.setState({
      showAbout: false,
      showProjects: true,
      showSkills: true,
      showContact: false,
      data: {
        projects: [],
        skills: []
      },
      form: {

      }  
    })
  }

  componentDidMount() {
    this.pullFromApi()
  }

  pullFromApi = () => {

    axios.get('https://73wg71ijuc.execute-api.us-west-2.amazonaws.com/dev/portfolioLambdaPython', {
        crossDomain: true
      }).then(res => {
        const data = res.data;
        this.setState({ data })
      })

  }

  loadHomePage = () => {
    console.log("loading homepage") 

    this.setState({
      showAbout: false,
      showSkills: true,
      showProjects: true,
      showContact: false,
    })
    
  }
  
  innerSectionClassNames = "main-section inner-section"

  navLinkHandler = (e, page) => {
    e.preventDefault()
    console.log(page);
    console.log('running onClick')

    if (page === 'about') {
      this.hideAllSections()
      this.setState({
        showAbout: !this.state.showAbout,
      })
    }

    if (page === 'projects') {
      this.hideAllSections()
      this.setState({
        showProjects: !this.state.showProjects
      })
    }

    if (page === 'skills') {
      this.hideAllSections()
      this.setState({
        showSkills: !this.state.showSkills
      })
    }

    if (page === 'contact') {
      this.hideAllSections()
      this.setState({
        showContact: !this.state.showContact
      })
    }
  }

  formSubmitHandler = (e) => {

    e.preventDefault()
    console.log(e)

    this.setState({
      form: {
        "name" : e.target.name.value,
        "phone": e.target.phone.value,
        "email": e.target.email.value,
        "comments": e.target.comments.value
      }
      
    })

  }

  hideAllSections = () => {

    this.setState({
      showAbout: false,
      showSkills: false,
      showProjects: false,
      showContact: false,
    })

  }

  render() {
    return (
      <div className="App">
        
        <div onClick={this.loadHomePage}>
          <header className="App-header">
            Kevin Wilson - Full Stack Software Engineer
          </header>
        </div>

        <Navigation
          navLinkHandler = {this.navLinkHandler}
        />

        { this.state.showAbout && 
          <div className={this.innerSectionClassNames}>
            <About

            />
          </div>
        }
        { this.state.showProjects && 
        <div className={this.innerSectionClassNames}>
          <Projects
            projects = {this.state.data.projects}
          />
        </div>
        }
        { this.state.showSkills && 
          <div className={this.innerSectionClassNames}>
            <Skills
              skills = {this.state.data.skills}
            />
          </div>
        }

        { this.state.showContact && 
          <div className={this.innerSectionClassNames}>
            <Contact
              formSubmitHandler = {this.formSubmitHandler}
            />
          </div>
        }

        <Footer/>
      </div>
    )
  }
}