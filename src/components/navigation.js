import React, {Component} from 'react'

export default class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }

    toggleMenu = () => {
        this.setState({ menuOpen: !this.state.menuOpen });
    }

    handleNavClick = (e, page) => {
        this.setState({ menuOpen: false });
        this.props.navLinkHandler(e, page);
    }

    render() {
        return(
            <nav>
                <button className="hamburger" onClick={this.toggleMenu} aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className={`nav-menu${this.state.menuOpen ? ' nav-menu--open' : ''}`}>
                    <a className="nav-links" href="/" onClick={(e) => this.handleNavClick(e, "about")}>About</a>
                    <a className="nav-links" href="/" onClick={(e) => this.handleNavClick(e, "skills")}>Skills</a>
                    <a className="nav-links" href="/" onClick={(e) => this.handleNavClick(e, "projects")}>Projects</a>
                    <a className="nav-links" href="/" onClick={(e) => this.handleNavClick(e, "recentProjects")}>Recent Projects</a>
                    <a className="nav-links" href="/" onClick={(e) => this.handleNavClick(e, "philosophies")}>Philosophy</a>
                    <a className="nav-links" href="https://www.linkedin.com/in/kevinwilsoncolorado/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a className="nav-links" href="https://github.com/Kdub91712" target="_blank" rel="noopener noreferrer">Github</a>
                    <a className="nav-links" href="/" onClick={(e) => this.handleNavClick(e, "contact")}>Contact</a>
                </div>
            </nav>
        )
    }
}
