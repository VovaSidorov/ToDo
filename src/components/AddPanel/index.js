import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";

const AddPanel =()=>{

    const useStyles = makeStyles(theme => ({
        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width:'100%',
            paddingTop:'10px'
        }
    }));

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <TextField
                id="standard-search"
                label="What needs to be done?"
                type="search"
            />
            <Button variant="contained" className={classes.button}>
                Add
            </Button>
        </div>

    );
};

export default AddPanel;