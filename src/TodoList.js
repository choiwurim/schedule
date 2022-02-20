import React from "react";
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList=({todos,onRemove,onToggle})=>{
    return(
        <div className="TodoList">
            {todos.map(todo=>(
                <TodoListItem todo={todos} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </div>
    );
};
export default TodoList;