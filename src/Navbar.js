import React, { useEffect, useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext';
import translation from './translation';
import { Link } from 'react-scroll';

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: '100',
    boxShadow: '3px 3px 5px rgba(0,0,0,0.2)',
    '&.scrolled': {
      position: 'sticky',
      top: '0',
      left: '0',
    }
  },

}))

function Navbar(props) {
  const { language } = useContext(LanguageContext);
  const { isDarkMode } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);
  const classes = useStyles();

  const { navbar } = translation[language]

  const handleScroll = () => {
    const viewHeight = window.innerHeight;
    const offset = window.scrollY;
    if (offset > viewHeight) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })
  let navbarClasses = ['navbar'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }
  return (
    <nav className={`${classes.root} navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} ${navbarClasses.join(" ")}`}>
      <div className="container-fluid">
        <Link to='home' activeClass="active" spy={true} smooth={true} className="navbar-brand" >{navbar.home}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='about' activeClass="active" spy={true} smooth={true} offset={window.innerWidth > 990 ? -80: -200} className="nav-link" >{navbar.about}</Link>
            </li>
            <li className="nav-item">
              <Link to='projects' activeClass="active" spy={true} smooth={true} offset={window.innerWidth > 990 ? -80: -200} className="nav-link">{navbar.projects}</Link>
            </li>
            <li className="nav-item">
              <Link to='contact' activeClass="active" spy={true} smooth={true} offset={window.innerWidth > 990 ? -80: -200} className="nav-link" href="#Contact">{navbar.contact}</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;