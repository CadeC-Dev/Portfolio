import React from 'react'
import { Button, withStyles } from '@material-ui/core'

const StyledButton = withStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "44px",
        padding: "0 25px",
        boxSizing: "border-box",
        borderRadius: 0, 
        background: "#F7BAFF",
        color: "#0066E6",
        transform: "none",
        boxShadow: "3px 3px 0 0 #c7d8ed",
        transition: "background .5s,border-color .5s,color .5s",
        "&:hover": {
            backgroundColor:  "#fff"
          },
        },
        label: {
        textTransform: 'capitalize',
        },
    })(Button);


export default function CustomBtn(props) {
    return (
        <StyledButton variant='contained'>{props.txt}</StyledButton>
    )
}
