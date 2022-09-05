import React from 'react';
import './App.css';

export const TodoItem = (props) => {
  let style = {
    width: "18rem",
    minHeight: "11.25em",
  };
  let cl = "";
  if(props.todo.done === 0){
    cl = "card text-bg-warning col-3 mx-1 my-1";
  }else{
    cl = "card text-bg-secondary col-3 mx-1 my-1"
  }
  return (
    <div className={cl} style={style}>
        <div className="card-body">
          <div className="row">
            <div className="col-10">
              <h5 className="card-title">{props.todo.title}</h5>
            </div>
            <div className="col-2">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={()=>{props.Check(props.todo.sno)}}/>
              </div>
            </div>
          </div>
          <p className="card-text">{props.todo.task}</p>
          <a href="#" className="btn btn-danger mb-4 me-4 position-absolute bottom-0 end-0" onClick={()=>{props.onDelete(props.todo)}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg></a>
        </div>
    </div>
  )
}
