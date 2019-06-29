import React, {Component} from 'react'

export default class Navigation extends Component {

    render() {

        return(
            <nav>
                <a className="nav-links" href="/" onClick={(e) => this.props.navLinkHandler(e, "about")}>About</a>
                <a className="nav-links" href="/" onClick={(e) => this.props.navLinkHandler(e, "skills")}>Skills</a>
                <a className="nav-links" href="/" onClick = {(e) => this.props.navLinkHandler(e, "projects")}>Projects</a>
                <a className="nav-links" href="/" onClick={(e) => this.props.navLinkHandler(e, "download_resume")}>Download Resume</a>
                <a className="nav-links" href="/" onClick = {(e) => this.props.navLinkHandler(e, "contact")}>Contact</a>
            </nav>
        )

    }

}