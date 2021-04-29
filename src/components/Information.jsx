import { Box , makeStyles, Typography } from '@material-ui/core';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import OpacityIcon from '@material-ui/icons/Opacity';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import DehazeIcon from '@material-ui/icons/Dehaze';
import WbCloudyIcon from '@material-ui/icons/WbCloudy';

const useStyles= makeStyles({
    component : {
        margin: 50
    },
    row : {
        padding: 10,
        fontSize: 20,
        letterSpacing: 2
    },
    value : {
        color: "#ffff"
    },
    icon : {
        marginRight: 15,
        color: 'orange'
    }
})


const Information = ({ city,country,data }) => {
    const classes= useStyles();
    return (
        data && city && country ?
        <Box className={classes.component}> 
             <Typography className={classes.row}><MyLocationIcon className={classes.icon}/>Location <Box className={classes.value} component="span">{data.name},{data.sys.country}</Box></Typography>
             <Typography className={classes.row}><SettingsBrightnessIcon className={classes.icon}/> Temperature <Box className={classes.value} component="span">{data.main.temp}°C</Box></Typography>
             <Typography className={classes.row}><OpacityIcon className={classes.icon}/> Humidity <Box className={classes.value} component="span">{data.main.humidity}</Box></Typography>
             <Typography className={classes.row}><WbSunnyIcon className={classes.icon}/> Sun Rise <Box className={classes.value} component="span">{new Date(data.sys.sunrise*1000).toLocaleTimeString()}</Box></Typography>
             <Typography className={classes.row}><Brightness4Icon className={classes.icon}/> Sun Set <Box className={classes.value} component="span">{new Date(data.sys.sunset*1000).toLocaleTimeString()}</Box></Typography>
             <Typography className={classes.row}><DehazeIcon className={classes.icon}/> Condition <Box className={classes.value} component="span">{data.weather[0].main}</Box></Typography>
             <Typography className={classes.row}><WbCloudyIcon className={classes.icon}/> Clouds <Box className={classes.value} component="span">{data.clouds.all}</Box></Typography>
        </Box> : ''
    )
}

export default Information;