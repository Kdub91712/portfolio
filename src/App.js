import React, { useState, useEffect } from 'react';
import Navigation from './components/navigation';
import Footer from './components/footer';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
import Login from './components/login';
import Admin from './components/admin';
import RecentProjects from './components/recentProjects';
import SkillRotator from './components/skillRotator';
import DevPhilosophies from './components/devPhilosophies';
import axios from 'axios';
import portfolioData from './data/portfolio.json';
import './styles/App.scss';
import ReactGA from 'react-ga';

const formUrl = process.env.REACT_APP_FORM_URL;

export default function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowProjects] = useState(true);
  const [showSkills, setShowSkills] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showRecentProjects, setShowRecentProjects] = useState(false);
  const [showPhilosophies, setShowPhilosophies] = useState(false);
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [data] = useState(portfolioData);
  const [projectDetails, setProjectDetails] = useState([]);
  const [projectTechnologies, setProjectTechnologies] = useState([]);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [nextProjectIndex, setNextProjectIndex] = useState(1);

  useEffect(() => {
    ReactGA.initialize('UA-64241241-2');
    ReactGA.pageview('/homepage');
  }, []);

  const pullProjectInfo = async (url, type) => {
    try {
      const response = await axios.get(url);
      if (type === 'projectDetails') setProjectDetails(response.data);
      if (type === 'projectTechnologies') setProjectTechnologies(response.data);
    } catch (error) {
      console.log("error", error);
    }
  }

  const hideAllSections = () => {
    setShowAbout(false);
    setShowSkills(false);
    setShowProjects(false);
    setShowContact(false);
    setShowRecentProjects(false);
    setShowPhilosophies(false);
    setShowAdmin(false);
  }

  const loadHomePage = () => {
    hideAllSections();
    if (!showAdmin) setShowProjects(true);
  }

  const showMore = (e) => {
    e.preventDefault();
    setShowMoreProjects(prev => !prev);
  }

  const navLinkHandler = (e, page) => {
    e.preventDefault();

    if (page === 'about') {
      ReactGA.pageview('/about');
      hideAllSections();
      setShowAbout(true);
    }
    if (page === 'projects') {
      ReactGA.pageview('/projects');
      hideAllSections();
      setShowProjects(true);
    }
    if (page === 'skills') {
      ReactGA.pageview('/skills');
      hideAllSections();
      setShowSkills(true);
    }
    if (page === 'contact') {
      ReactGA.pageview('/contact');
      hideAllSections();
      setShowContact(true);
    }
    if (page === 'recentProjects') {
      ReactGA.pageview('/recent-projects');
      hideAllSections();
      setShowRecentProjects(true);
    }
    if (page === 'philosophies') {
      ReactGA.pageview('/philosophies');
      hideAllSections();
      setShowPhilosophies(true);
    }
  }

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    if (e.target.name.value === '' && e.target.phone.value === '' && e.target.email.value === ''
      && e.target.comments.value === '') {
      console.log('empty form!');
      ReactGA.event({ category: 'User', action: 'Empty Form' });
      return;
    }

    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      comments: e.target.comments.value
    };

    try {
      ReactGA.event({ category: 'User', action: 'Submit Form' });
      const response = await axios.post(formUrl, { data: formData });
      console.log(response.data);
      document.getElementById("contact_form").reset();
    } catch (error) {
      console.log("error", error);
    }
  }

  const increaseProjectIndex = () => {
    setCurrentProjectIndex(prev => prev + 1);
    setNextProjectIndex(prev => prev + 1);
    ReactGA.event({ category: 'User', action: 'Next Project' });
  }

  const decreaseProjectIndex = () => {
    setCurrentProjectIndex(prev => prev - 1);
    setNextProjectIndex(prev => prev - 1);
    ReactGA.event({ category: 'User', action: 'Previous Project' });
  }

  const loggedIn = () => {
    setShowAbout(false);
    setShowSkills(false);
    setShowProjects(false);
    setShowContact(false);
    setShowAdmin(true);
  }

  const loggedOut = () => {
    setShowProjects(true);
    setShowAdmin(false);
  }

  return (
    <div className="App">

      <div className="app-top">
        <div onClick={loadHomePage}>
          <header className="App-header">
            <span className="header-name">Kevin Wilson</span>
            <div className="header-accent" />
            <span className="header-role">Full Stack Software Engineer</span>
            <SkillRotator />
          </header>
        </div>

        <Navigation navLinkHandler={navLinkHandler} />
      </div>

      { window.location.pathname === '/admin' ? (
        <>
          { !showAdmin && <Login loggedIn={loggedIn} /> }
          { showAdmin && <Admin loggedOut={loggedOut} /> }
        </>
      ) : (
        <>
          { showAbout && <About /> }

          { showProjects &&
            <Projects
              projects={data.projects}
              projectDetails={projectDetails}
              projectTechnologies={projectTechnologies}
              pullProjectInfo={pullProjectInfo}
              showMoreProjects={showMoreProjects}
              showMore={showMore}
              currentProjectIndex={currentProjectIndex}
              nextProjectIndex={nextProjectIndex}
              increaseProjectIndex={increaseProjectIndex}
              decreaseProjectIndex={decreaseProjectIndex}
            />
          }

          { showSkills &&
            <Skills
              skills={data.skills}
              some_experience={data.some_experience}
            />
          }

          { showContact &&
            <Contact formSubmitHandler={formSubmitHandler} />
          }

          { showRecentProjects && <RecentProjects /> }

          { showPhilosophies && <DevPhilosophies /> }
        </>
      ) }

      <div className="mobile-cta">
        <span className="mobile-cta-location">Remote — Chicago</span>
        <button className="mobile-cta-button" onClick={() => { hideAllSections(); setShowContact(true); }}>
          ✉ Contact Me
        </button>
      </div>

      <div className="floating-cta-group">
        <span className="header-location">Remote — Chicago</span>
        <button className="floating-cta" onClick={() => { hideAllSections(); setShowContact(true); }}>
          ✉ Contact Me
        </button>
      </div>

      <Footer />
    </div>
  )
}
