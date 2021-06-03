import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import { ThemeContext } from './contexts/ThemeContext';
import ProjectsPreview from './ProjectsPreview';
import ContactList from './ContactList';
import Skills from './Skills';

const useStyles = makeStyles(theme => ({
    root: {
        fontSize: '1.5rem',
        fontFamily: 'roboto',
        backgroundColor: isDarkMode => isDarkMode ? 'black' : '#F6EEE0',
        color: isDarkMode => isDarkMode ? '#F6EEE0' : 'black',
        borderRadius: '10px'
    },
    paragraph: {
        margin: '15px',  
    }
}))

function Block({ title, text, about, projects, contact }) {
    
    const { isDarkMode } = useContext(ThemeContext);
    const classes = useStyles(isDarkMode);
    const defineId = () => {
        if (projects) {
            return 'projects'
        } else if (contact) {
            return 'contact';
        } else {
            return 'about'
        }
    }
    return (
        <div id={defineId()} className={classes.root}>
            <div className="my-5 p-3">
                <h1>{title}</h1>
                <p className={classes.paragraph}>
                    {text.paragraph1.line1}
                    <br/>
                    {text.paragraph1.line2}
                </p>
                {about ? 
                <>
                <p className={classes.paragraph}>
                    {text.paragraph2.line1}
                    <br/>
                    {text.paragraph2.line2}
                    {
                        text.paragraph2.line3 ? 
                        <>
                        <br/>
                        {text.paragraph2.line3}
                        </>
                        :
                        <></>
                    }
                </p>
                <p className={classes.paragraph}>
                    {text.paragraph3.line1}
                    <br/>
                    {text.paragraph3.line2}
                    {
                        text.paragraph3.line3 ? 
                        <>
                        <br/>
                        {text.paragraph3.line3}
                        </>
                        :
                        <></>
                    }
                </p>
                <p className={classes.paragraph}>
                    {text.paragraph4.line1}
                    <br/>
                    {text.paragraph4.line2}
                </p>
                </>
                : ''
                }
                {about ? <Skills /> : ''}
                {projects ? <ProjectsPreview /> : ''}
                {contact ? <ContactList /> : ''}
            </div>
        </div>
    )
}

export default Block;