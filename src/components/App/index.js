import  React from 'react';
import SearchPanel from "../SearchPanel";
import AppHeader from "../AppHeader";
import TodoList from "../TodoList";
import Addpanel from "../AddPanel"
import Container from "@material-ui/core/Container";


const App =()=>{

    const todoDate=[
        {label:'Drink Cofee', important: false, id:1},
        {label:'Make Awesome app', important: true, id:2},
        {label:'Have a lunch', important: false, id:3}
    ];

    return (
        <div>
            <Container maxWidth="sm">
                <AppHeader toDO={1} done={3}/>
                <SearchPanel/>
                <TodoList todos={todoDate}/>
                <Addpanel/>
            </Container>
        </div>
    );
};

export default App;