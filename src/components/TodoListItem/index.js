import React, {Component} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const TodoListItem = ({label,important = false})=>{

    const useStyles = makeStyles(theme => ({

        root: {
            display: 'flex',
            flexDirection: 'row',
            marginTop: '5px',
            width:'100%',
            justifyContent: 'space-between'
        },
        item: {
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(2, 1),
        },
    }));

    const style = {
        color: important?'tomato':'black',
    };
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <div className={classes.item}>
                <span   style={style}>{label}</span>
            </div>

            <div >
                <IconButton className={classes.button} aria-label="delete">
                    <DoneIcon />
                </IconButton>
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </div>
        </Paper>

    );
};

export default TodoListItem;







