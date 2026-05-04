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

const BASE_TITLE = 'Kevin Wilson — Full Stack Software Engineer';

const PATH_TO_SECTION = {
  '/about':           'showAbout',
  '/projects':        'showProjects',
  '/skills':          'showSkills',
  '/contact':         'showContact',
  '/recent-projects': 'showRecentProjects',
  '/philosophies':    'showPhilosophies',
};

const PATH_TO_TITLE = {
  '/':                BASE_TITLE,
  '/projects':        `Projects | ${BASE_TITLE}`,
  '/about':           `About | ${BASE_TITLE}`,
  '/skills':          `Skills | ${BASE_TITLE}`,
  '/contact':         `Contact | ${BASE_TITLE}`,
  '/recent-projects': `Recent Projects | ${BASE_TITLE}`,
  '/philosophies':    `Philosophy | ${BASE_TITLE}`,
};

const SECTION_TO_PATH = {
  about:          '/about',
  projects:       '/projects',
  skills:         '/skills',
  contact:        '/contact',
  recentProjects: '/recent-projects',
  philosophies:   '/philosophies',
};

const setPageTitle = (path) => {
  document.title = PATH_TO_TITLE[path] || BASE_TITLE;
};

const getInitialState = () => {
  const path = window.location.pathname;
  return {
    showAbout:          path === '/about',
    showProjects:       path === '/' || path === '/projects',
    showSkills:         path === '/skills',
    showContact:        path === '/contact',
    showRecentProjects: path === '/recent-projects',
    showPhilosophies:   path === '/philosophies',
  };
};

export default function App() {
  const initial = getInitialState();
  const [showAbout, setShowAbout] = useState(initial.showAbout);
  const [showProjects, setShowProjects] = useState(initial.showProjects);
  const [showSkills, setShowSkills] = useState(initial.showSkills);
  const [showContact, setShowContact] = useState(initial.showContact);
  const [showRecentProjects, setShowRecentProjects] = useState(initial.showRecentProjects);
  const [showPhilosophies, setShowPhilosophies] = useState(initial.showPhilosophies);
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [data] = useState(portfolioData);
  const [projectDetails, setProjectDetails] = useState([]);
  const [projectTechnologies, setProjectTechnologies] = useState([]);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [nextProjectIndex, setNextProjectIndex] = useState(1);

  const showSection = (section) => {
    setShowAbout(section === 'showAbout');
    setShowProjects(section === 'showProjects');
    setShowSkills(section === 'showSkills');
    setShowContact(section === 'showContact');
    setShowRecentProjects(section === 'showRecentProjects');
    setShowPhilosophies(section === 'showPhilosophies');
    setShowAdmin(section === 'showAdmin');
  };

  useEffect(() => {
    ReactGA.initialize('UA-64241241-2');
    ReactGA.pageview(window.location.pathname);
    setPageTitle(window.location.pathname);

    const handlePopState = () => {
      const path = window.location.pathname;
      const section = PATH_TO_SECTION[path] || 'showProjects';
      setPageTitle(path);
      showSection(section);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const pullProjectInfo = async (url, type) => {
    try {
      const response = await axios.get(url);
      if (type === 'projectDetails') setProjectDetails(response.data);
      if (type === 'projectTechnologies') setProjectTechnologies(response.data);
    } catch (error) {
      console.log("error", error);
    }
  }

  const loadHomePage = () => {
    window.history.pushState({}, '', '/');
    setPageTitle('/');
    showSection('showProjects');
  }

  const showMore = (e) => {
    e.preventDefault();
    setShowMoreProjects(prev => !prev);
  }

  const navLinkHandler = (e, page) => {
    e.preventDefault();
    const path = SECTION_TO_PATH[page];
    if (path) window.history.pushState({}, '', path);
    setPageTitle(path || '/');
    ReactGA.pageview(path || '/');

    const sectionKey = PATH_TO_SECTION[path];
    if (sectionKey) showSection(sectionKey);
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

  const loggedIn = () => showSection('showAdmin');

  const loggedOut = () => {
    window.location.href = '/';
  }

  const goToContact = () => {
    window.history.pushState({}, '', '/contact');
    setPageTitle('/contact');
    showSection('showContact');
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
              saas={data.saas}
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
        <button className="mobile-cta-button" onClick={goToContact}>
          ✉ Contact Me
        </button>
      </div>

      <div className="floating-cta-group">
        <span className="header-location">Remote — Chicago</span>
        <button className="floating-cta" onClick={goToContact}>
          ✉ Contact Me
        </button>
      </div>

      <Footer />
    </div>
  )
}
