import {Box, makeStyles} from '@material-ui/core';
import logo from '../components/images/2942776.jpg';
import Form from './Form';

const useStyles= makeStyles({
    component : {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        width:'65%',
        margin:' 0 auto',
        borderRadius: '10px 10px'
    },
    leftContainer: {
        backgroundImage: `url(${logo})`,
        height: '80vh',
        width:'30%',
        backgroundSize: 'cover',
        borderRadius:'20px 2px 2px 20px',
    },
    rightContainer : {
        background:'linear-gradient(to right,#A2A5FF,#71AFE5)',
        height:'80vh',
        width: "70%",
        borderRadius:"2px 20 20 2px"
    
    }

})


const Weather = () => {
    const classes= useStyles();
    return (
        <Box className= {classes.component}>
             <Box className={classes.leftContainer}></Box>
             <Box className={classes.rightContainer}>
              <Form/>
             </Box>
        </Box>
    )
}

export default Weather;