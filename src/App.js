import React from 'react';
import Home from './Home';
import Content from './Content';
import Navbar from './Navbar';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {

  }
}))

function App() {

  const classes = useStyles();

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className={classes.root}>
          <Home />
          <Navbar />
          <Content />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
