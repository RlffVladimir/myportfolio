import React, { useContext } from 'react';
import homepicture from './images/home.JPG';
import writtenBlack from './images/writtenBlack.PNG';
import writtenKatakanaBlack from './images/writtenKatakanaBlack.PNG';
import writtenWhite from './images/writtenWhite.PNG';
import writtenKatakanaWhite from './images/writtenKatakanaWhite.PNG';
import { makeStyles } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext';
import translation from './translation';
import {Link} from 'react-scroll';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        transition: 'all 1s',
        backgroundColor: isDarkMode => isDarkMode ? 'grey' : 'beige',
        color: isDarkMode => isDarkMode ? '#F6EEE0' : 'black',
    },
    options: {
        width: '100%',
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    darkMode: {
        backgroundColor: isDarkMode => isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.05)',
        padding: '15px',
        borderRadius: '20px 20px 0 0',
        [theme.breakpoints.down('sm')]: {
            position: 'relative',
            bottom: '10vh',
        }
    },
    language: {
        display: 'flex',
        justifyContent: 'space-around',
        '& button': {
            width: '50px',
            height: '50px',
            border: 'none',
            borderRadius: '50%',
            backgroundColor: isDarkMode => isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
            fontSize: '30px',
            margin: '5px',
            transition: '0.2s',
            '&:hover': {
                transition: '0.2s',
                transform: 'scale(1.1)',
            }
        },
        [theme.breakpoints.down('sm')]: {
            position: 'relative',
            bottom: '10vh',
        }
    },
    strip: {
        backgroundColor: isDarkMode => isDarkMode ? 'black' : 'white',
        [theme.breakpoints.down('sm')]: {
            position: 'relative',
            bottom: '10vh',
        }
    },
    stripContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            paddingTop: '2vh',
        }
    },
    stripTitle: {
    },
    titleSignature: {
        width: '400px'
    },
    stripSubtitle: {
        textTransform: 'uppercase',
        letterSpacing: '1px',
    },
    stripDescription: {

    },
    picture: {
        '& img': {
            width: '200px',
            borderRadius: '50%',
            transform: 'scale(1.3)',
            boxShadow: '1px 1px 5px rgba(0,0,0,0.2)',
        },
        [theme.breakpoints.down('md')]: {
            width: '200px',
            margin: '0 auto',
            position: 'relative',
            top: '3vh',
        },
    },
    signature: {
        width: '200px',
        position: 'relative',
        [theme.breakpoints.down('md')]: {
            top: '40px',
        }
    },
    arrow: {
        backgroundColor: isDarkMode => isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& svg': {
            transition: '0.3s',
            '&:hover': {
                transform: 'scale(1.1)',
                transition: '0.3s'
            },
        },
        [theme.breakpoints.down('md')]: {
            position: 'absolute',
            bottom: '0',
            width: '100%',
        }
    }
}));

function Home() {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const { language, setLanguage } = useContext(LanguageContext);
    const classes = useStyles(isDarkMode);
    const handleChangeLanguage = e => {
        setLanguage(e.target.name);
    }
    const { title, subtitle, description, darkMode } = translation[language];
    return (
        <div className={`${classes.root} home`}>
            <div className={classes.options}>
                <div className={classes.darkMode}>{darkMode}<Switch onChange={toggleTheme} checked={isDarkMode} /></div>
                <div className={classes.language}>
                    <button name='english' onClick={handleChangeLanguage}>🇬🇧</button>
                    <button name='japanese' onClick={handleChangeLanguage}>🇯🇵</button>
                </div>
            </div>
            <div className={classes.strip}>
                <div className='container-fluid row'>
                    <div className={`${classes.stripContent} col-lg-7`}>
                        <h1 className={classes.stripTitle}>{title}</h1>
                        <h2 className={classes.stripSubtitle}>{subtitle}</h2>
                        <p className={classes.stripDescription}>{description}</p>
                    </div>
                    <div className={`${classes.pictureGroup} col-lg`}>
                        <div className={`${classes.picture}`}>
                            <img className="img-fluid" src={homepicture} />
                        </div>
                        <img className={`${classes.signature} d-none d-sm-block offset-4 offset-sm-5 offset-md-4 offset-lg-1`} src={isDarkMode ? writtenWhite : writtenBlack}/>
                    </div>
                </div>
            </div>

            <Link to='navbar' activeClass="active" spy={true} smooth={true} className={classes.arrow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="100" fill={isDarkMode ? '#F6EEE0' : 'rgba(50,50,50,0.3)'} className="bi bi-arrow-bar-down" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z" />
                </svg>

            </Link>

        </div>
    )
}

export default Home;