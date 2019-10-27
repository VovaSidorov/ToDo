import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display:'block',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(2, 1),
    },
    header: {
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftMenu: {
        display:'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(1, 1),
    }
}));


const AppHeader =({toDO,done})=>{

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1 className={classes.header}>My TODO List</h1>
            <span className={classes.leftMenu}>{toDO} more to do, {done} done</span>
        </div>
    );
};

export default AppHeader;