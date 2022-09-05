import './App.css';
import './dark_mode.css';
import Header from './Components/Header.js';
import Todos from './Components/Todos.js';
import Footer from './Components/Footer.js';
import React, { useEffect, useState } from 'react';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  function onDelete(todo) {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }
  function Check(sno){
    let todosN = [...todos];
    todosN[sno - 1].done = 1 - todos[sno - 1].done;
    setTodos(todosN);
  }
  function newTodo(title, desc) {
    let sno = 0;
    if (todos.length == 0) {
      sno = 1;
    } else {
      sno = todos.length + 1;
    }
    setTodos([...todos, { sno: sno, title: title, task: desc, done: 0 }]);
    // localStorage.setItem("todos", JSON.stringify(todos));
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]  )

  function darkMode(){
    let main = document.getElementById("root");
    main.classList.toggle("dark");
  }
  return (
    <div className='container vh-100'>
      <Header title = "ToDo's" darkMode = {darkMode}/>
      <Todos todos={todos} onDelete={onDelete} newTodo={newTodo} Check = {Check}/>
      <Footer />
    </div>
  );
}

export default App;