import React, {Component} from 'react';
import './App.css';
import Navigation from './components/navigation';
import Footer from './components/footer';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';

export default class App extends Component {

  componentWillMount() {
    this.setState({
      showAbout: false,
      showProjects: true,
      showSkills: true,
      showContact: false  
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
        
        <header className="App-header">
          Kevin Wilson - Full Stack Software Engineer
        </header>
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

          />
        </div>
        }
        { this.state.showSkills && 
          <div className={this.innerSectionClassNames}>
            <Skills

            />
          </div>
        }

        { this.state.showContact && 
          <div className={this.innerSectionClassNames}>
            <Contact

            />
          </div>
        }

        <Footer/>
      </div>
    )
  }
}