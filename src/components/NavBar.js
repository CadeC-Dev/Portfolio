import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../logo.png'
import { Toolbar,Typography } from '@material-ui/core' 
import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles({
    bar:{
        paddingTop: "1rem",
        paddingBottom: "1rem"
    },
    logo: {
        width: "15%", 
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        color: "#0066E6",
        "&:hover": {
            color:  "#F7BAFF"
        },
    }
})

export default function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <img src={logo} alt="logo" className={classes.logo}/>  
                <Typography variant="h6" className={classes.menuItem}>
                   About
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Resume
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Career Timeline
                </Typography>
                <CustomBtn txt="Contact Me!"/>
            </Toolbar>
    )
}
