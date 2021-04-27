
import {Box, Button, makeStyles, TextField} from '@material-ui/core';

const useStyles= makeStyles({
    component: {
        padding:12,
        background: '#74CCF4'
    },
    input: {
        color:"#ffff",
        marginRight:12
    },
    button: {
        width:150,
        height: 45,
        background: '#6666FF',
        color:'#363333',
        marginTop:5
    }

})

const Form = () => {
    const classes=useStyles();
    return (
        <Box className={classes.component}>
           <TextField  
           inputProps={{className:classes.input}}
           label="Your City"
           className= {classes.input} />
           <TextField inputProps={{className: classes.input}} className={classes.input} label="Your Country"/>
           <Button 
            className={classes.button} variant="outlined" color="#199EDF">Get the Weather</Button>
        </Box>
    );
}

export default Form;