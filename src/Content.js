import React, { useContext } from 'react';
import {makeStyles} from '@material-ui/core';
import Block from './Block';
import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext';
import translation from './translation';

const useStyles = makeStyles(theme => ({
    root: {
    },
}))

function Content() {
    const classes = useStyles();

    const { isDarkMode } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);
    const { about, projects, contact } = translation[language];

    return (
        <div className={`${classes.root} container-lg`}>
            <Block title={about.title} text={about.text} about={true} />
            <Block title={projects.title} text={projects.text} projects={true} />
            <Block title={contact.title} text={contact.text} contact={true}/>
        </div>
    )
}

export default Content;