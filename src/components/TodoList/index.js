import React from "react";
import TodoListItem from "../TodoListItem";

const TodoList =({todos})=>{



    const elements= todos.map((item)=>{

        const {id,...itemProps}=item;

      return (
          <div key={id}>
              <TodoListItem {... itemProps}/>
          </div>
      );
    });

    return (
        <div>
            {elements}
        </div>
    );
};

export default TodoList;