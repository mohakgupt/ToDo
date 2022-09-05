import React from 'react';
import { TodoItem } from './TodoItem.js';
import { NewTodo } from "./NewTodo";

export default function Todos(props){
  return (
    <div id = "main" className='container mt-5'>
        <div className='row'>
          {props.todos.map((todo) => {return <TodoItem key = {todo.sno} todo = {todo} onDelete = {props.onDelete} Check = {props.Check}/>})}
          <NewTodo newTodo={props.newTodo}/>
        </div>
    </div>
  )
}
