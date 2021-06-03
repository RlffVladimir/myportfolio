import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import colorpickerscreenshot from './images/colorpicker.png';
import moneysaverscreenshot from './images/moneysaver.png';
import { ThemeContext } from './contexts/ThemeContext';
import { Typography } from '@material-ui/core';
import { LanguageContext } from './contexts/LanguageContext';
import translation from './translation';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    project: {
        cursor: 'pointer',
        width: '90%',
        display: 'flex',
        backgroundColor: isDarkMode => isDarkMode ? 'rgba(127,127,127,0.5)' : 'rgba(255,250,210,0.5)',
        margin: '20px 0',
        borderRadius: '10px',
        pointer: 'cursor',
        '&:hover': {
            '& img': {
                transform: 'scale(1.03, 1.06)',
                transition: '0.3s',
            }
        },
        '& img': {
            width: '370px',
            margin: '10px',
            borderRadius: '10px',
            transition: '0.3s',
            height: '230px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: '3px',
            borderRadius: '5px',
            flexDirection: 'column',
            alignItems: 'center'
        }
    },
    projectDescription: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '5px'
    },
    projectDescriptionTitle: {
        margin: '10px',
        width: '50%',
        textAlign: 'center',
        transition: '0.2',
    },
    projectDescriptionText: {
        textAlign: 'left',
    }
}))

function ProjectsPreview() {
    const { isDarkMode } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);
    const { projects } = translation[language]
    const classes = useStyles(isDarkMode);
    return (
        <div className={`${classes.root}`}>
            <div className={classes.project} onClick={() => window.location.href='https://colorpicker.orloffvladimir.com'}>
                <img src={colorpickerscreenshot} className='img-fluid' />
                <div className={classes.projectDescription}>
                    <Typography variant='h4' className={classes.projectDescriptionTitle}>colorpicker</Typography>
                    <Typography className={classes.projectDescriptionText}>
                        {projects.colorpicker.description}
                    </Typography>
                </div>
            </div>
            <div className={classes.project} onClick={() => window.location.href='https://moneysaver.orloffvladimir.com'}>
                <img src={moneysaverscreenshot} className='img-fluid' />
                <div className={classes.projectDescription}>
                    <Typography variant='h4' className={classes.projectDescriptionTitle}>moneysaver</Typography>
                    <Typography className={classes.projectDescriptionText}>
                        {projects.moneysaver.description}
                    </Typography>
                </div>

            </div>
        </div>
    )
}

export default ProjectsPreview;