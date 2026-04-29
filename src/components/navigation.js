import React, { useState } from 'react'

export default function Navigation({ navLinkHandler }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);

    const handleNavClick = (e, page) => {
        setMenuOpen(false);
        navLinkHandler(e, page);
    }

    return (
        <nav>
            <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={`nav-menu${menuOpen ? ' nav-menu--open' : ''}`}>
                <a className="nav-links" href="/" onClick={(e) => handleNavClick(e, "about")}>About</a>
                <a className="nav-links" href="/" onClick={(e) => handleNavClick(e, "skills")}>Skills</a>
                <a className="nav-links" href="/" onClick={(e) => handleNavClick(e, "projects")}>Projects</a>
                <a className="nav-links" href="/" onClick={(e) => handleNavClick(e, "recentProjects")}>Recent Projects</a>
                <a className="nav-links" href="/" onClick={(e) => handleNavClick(e, "philosophies")}>Philosophy</a>
                <a className="nav-links" href="https://www.linkedin.com/in/kevinwilsoncolorado/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a className="nav-links" href="https://github.com/Kdub91712" target="_blank" rel="noopener noreferrer">Github</a>
                <a className="nav-links" href="/" onClick={(e) => handleNavClick(e, "contact")}>Contact</a>
            </div>
        </nav>
    )
}
