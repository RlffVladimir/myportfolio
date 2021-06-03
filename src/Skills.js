import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import { Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import StorageIcon from '@material-ui/icons/Storage';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import AppsIcon from '@material-ui/icons/Apps';
import { LanguageContext } from './contexts/LanguageContext';
import { ThemeContext } from './contexts/ThemeContext';
import translation from './translation';

const useStyles = makeStyles(theme => ({
    root: {

    },
    title: {
        borderTop: '0.5px solid rgba(0,0,0,0.2)',
        marginTop: '20px',
        paddingTop: '5px',
    },
    icon: {
        color: isDarkMode => isDarkMode ? '#F6EEE0' : 'black',
    },
    link: {
        textDecoration: 'none'
    }
}))

function Skills() {
    const { isDarkMode } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext)
    const classes = useStyles(isDarkMode);
    const {myskills} = translation[language].about
    return (
        <div className={classes.root}>
            <Typography variant='h5' className={classes.title}>{myskills.title}</Typography>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <CodeIcon　className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText>
                        <b>{myskills.frontend}: </b>React (HTML, CSS, JavaScript)
                </ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                        <AppsIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText>
                        <b>{myskills.design}: </b>Bootstrap or Material-ui
                </ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                        <StorageIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText>
                        <b>{myskills.backend}: </b>Node.js + Express.js + Mongodb
                    </ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                        <LocalLibraryIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText>
                        <b>{myskills.nowlearning.nowlearning}: </b>WordPress, Photoshop, PHP<br/>
                        <a href='https://wordpress.orloffvladimir.com/' className={classes.link}>{myskills.nowlearning.wordpressproject}</a>
                    </ListItemText>
                </ListItem>
            </List>
        </div>
    )
}

export default Skills;