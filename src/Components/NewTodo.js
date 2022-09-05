import React, { useState } from 'react'

export const NewTodo = ({newTodo}) => {
  let style = {
    width: "18rem",
  };
  let style1 = {
    marginTop: "8px",
  };

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = function(e){
    e.preventDefault();
    if(!title || !desc) alert("Title or Description cannot be blank");
    else{
      newTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  }
  return (
    <div className="card col-3 mx-1 my-1" style={style}>
        <div className="card-body">
            <form className='container my-2' onSubmit={submit}>
                <input type="text" className="form-control card-title" id='title' placeholder='Title' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                <input type="text" className="form-control card-text" id="desc" placeholder='Description' value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>
                <button type="submit" className="btn btn-success" style={style1}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
</svg></button>
            </form>
        </div>
    </div>
  )
}
