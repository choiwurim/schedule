import React,{useState,useRef, useCallback} from "react";
import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

const App=()=>{
  const [todos, Settodos]=useState([
    {
      id:1,
      text:'sleep',
      checked:true,
    },
    {
      id:2,
      text:'tft',
      checked:true,
    },
    {
      id:3,
      text:'react',
      checked:true,
    }
  ]);
  const nextId=useRef(4);
  const onInsert=useCallback(
    text=>{
      const todo={
        id:nextId.current,text,checked:false
      };
      Settodos(todos.concat(todo));
      nextId.current+=1;
    },
    [todos],
  );
  const onRemove=useCallback(id=>{
    Settodos(todos.filter(todo=>todo.id!==id));
  },[todos]);
  const onToggle=useCallback(
    id=>{
      Settodos(
        todos.map(todo=>todo.id===id ? {...todo,checked:!todo.checked}:todo,),
      );
    },
    [todos],
  );
  return(
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
};
export default App;
