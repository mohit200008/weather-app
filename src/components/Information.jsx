import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import {
  WbSunny as WbSunnyIcon,
  Cloud as CloudIcon,
  Opacity as OpacityIcon,
  Brightness4 as Brightness4Icon,
  Dehaze as DehazeIcon,
  Speed as SpeedIcon,
} from '@material-ui/icons';

const useStyles = makeStyles({
  component: {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    maxWidth: '400px', // Adjust the maximum width based on your desired breakpoint
  },
  row: {
    padding: '10px',
    fontSize: '20px',
    letterSpacing: '2px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // Center content horizontally
  },
  value: {
    color: '#ffff',
    marginLeft: '10px',
    fontSize: '24px',
  },
  icon: {
    fontSize: '30px',
    color: 'orange',
  },
});

const Information = ({ city, country, data }) => {
  const classes = useStyles();

  return (
    data && city && country ? (
      <Box className={classes.component}>
        <Typography className={classes.row}>
          <WbSunnyIcon className={classes.icon} />
          Weather Condition:
          <Box className={classes.value} component="span">
            {data.weather[0].description}
          </Box>
        </Typography>
        <Typography className={classes.row}>
          <SpeedIcon className={classes.icon} />
          Wind Speed:
          <Box className={classes.value} component="span">
            {data.wind.speed} m/s
          </Box>
        </Typography>
        <Typography className={classes.row}>
          <OpacityIcon className={classes.icon} />
          Humidity:
          <Box className={classes.value} component="span">
            {data.main.humidity}%
          </Box>
        </Typography>
        <Typography className={classes.row}>
          <Brightness4Icon className={classes.icon} />
          Temperature:
          <Box className={classes.value} component="span">
            {data.main.temp}°C
          </Box>
        </Typography>
        <Typography className={classes.row}>
          <DehazeIcon className={classes.icon} />
          Cloudiness:
          <Box className={classes.value} component="span">
            {data.clouds.all}%
          </Box>
        </Typography>
      </Box>
    ) : null
  );
};

export default Information;
