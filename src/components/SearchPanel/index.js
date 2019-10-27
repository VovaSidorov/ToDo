import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:'100%',
    },
    items: {
        paddingTop:'10px'
    },
}));


const SearchPanel =()=>{
    const classes = useStyles();
    return (
        <div className={classes.container}>
        <TextField
            id="standard-search"
            label="Search"
            type="search"
        />
            <Grid className={classes.items}>
                <ButtonGroup  variant="contained"  aria-label="outlined primary button group">
                    <Button>All</Button>
                    <Button>Active</Button>
                    <Button>Done</Button>
                </ButtonGroup>
            </Grid>

        </div>

    );
};

export default SearchPanel;