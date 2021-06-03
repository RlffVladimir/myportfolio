import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { makeStyles } from '@material-ui/core';
import { ThemeContext } from './contexts/ThemeContext';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
    },
    data: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '30px',
        paddingBottom: '10px',
        borderBottom: isDarkMode => isDarkMode ? '0.5px solid #F6EEE0' : '0.5px solid rgba(0,0,0,0.5)',
        width: '30%',
    }
}));

function ContactList() {
    const { isDarkMode } = useContext(ThemeContext)
    const classes = useStyles(isDarkMode);
    return (
        <ul className={classes.root}>
            <li className={classes.data}><EmailIcon /><Typography>orloff.v@icloud.com</Typography></li>
            <li className={classes.data}><LinkedInIcon /><Typography>Orloff Vladimir</Typography></li>
        </ul>
    )
}

export default ContactList;