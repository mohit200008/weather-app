import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import logo from '../components/images/2942776.jpg';
import Form from './Form';

const useStyles = makeStyles({
  component: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column', // Adjust the layout for smaller screens
  },
  container: {
    display: 'flex',
    flex: 1,
  },
  leftContainer: {
    backgroundImage: `url(${logo})`,
    flex: 1,
    backgroundSize: 'cover',
    borderRadius: '20px 2px 2px 20px',
  },
  rightContainer: {
    background: 'linear-gradient(to right, #A2A5FF, #71AFE5)',
    flex: 2,
    borderRadius: '2px 20px 20px 2px',
  },
});

const Weather = () => {
  const classes = useStyles();

  return (
    <Box className={classes.component}>
      <Box className={classes.container}>
        <Box className={classes.leftContainer}></Box>
        <Box className={classes.rightContainer}>
          <Form />
        </Box>
      </Box>
    </Box>
  );
};

export default Weather;
