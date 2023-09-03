import React, { useEffect, useState } from 'react';
import { Box, Button, makeStyles, TextField } from '@material-ui/core';
import { getData } from '../components/services/api';
import Information from './Information';

const useStyles = makeStyles({
  component: {
    padding: 12,
    background: '#74CCF4',
  },
  input: {
    color: '#ffff',
    marginRight: 12,
  },
  button: {
    width: 150,
    height: 45,
    background: '#6666FF',
    color: '#363333',
    marginTop: 5,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

const Form = () => {
  const classes = useStyles();
  const [data, getWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [click, handleClick] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getWeather = async () => {
      setError(''); 

      if (!city || !country) {
        setError('Please enter both city and country.');
        return;
      }

      try {
        const response = await getData(city, country);
        getWeatherData(response.data);
      } catch (error) {
        if (error.response) {
          setError('City not found. Please check the city name and try again.');
        } else {
          setError('Failed to fetch weather data. Please try again later.');
        }
      }
    };

    if (click) {
      getWeather();
      handleClick(false);
    }
  }, [city, country, click]);

  const handleCityChange = (value) => {
    setCity(value);
  };

  const handleCountryChange = (value) => {
    setCountry(value);
  };

  return (
    <Box>
      <Box className={classes.component}>
        <TextField
          inputProps={{ className: classes.input }}
          onChange={(e) => handleCityChange(e.target.value)}
          label="Your City"
          className={classes.input}
        />
        <TextField
          inputProps={{ className: classes.input }}
          onChange={(e) => handleCountryChange(e.target.value)}
          className={classes.input}
          label="Your Country"
        />
        <Button
          className={classes.button}
          variant="outlined"
          onClick={() => {
            handleClick(true);
          }}
        >
          Get the Weather
        </Button>
      </Box>

      {error && <p className={classes.errorText}>{error}</p>}
      {data && (
        <Information
          data={data}
          city={city}
          country={country}
        />
      )}
    </Box>
  );
};

export default Form;
