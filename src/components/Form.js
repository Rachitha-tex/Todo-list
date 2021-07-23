import React from 'react'

const Form= ({setText,todos,setTodos,text,setStatus})=>{

const inputHandler = (e) =>{
    setText(e.target.value);
} 
const submitHandler=(e) =>{
e.preventDefault();
setTodos([
    ...todos,{text:text,completed:false,id:Math.random()*1000}
]);
setText("");
}  

const statusHandler=(e)=>{
    setStatus(e.target.value)
}

    return (
      <form>
          <input value ={text} type="text" className="todo-innput" onChange={inputHandler}  />
          <button onClick = {submitHandler} className="todo-button" type="submit"><i className="fa fa-plus-square"></i></button> 

          <div className="select">
            <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>  
                <option value="uncompleted">Uncompleted</option>
                </select> 
          </div>
      </form>
    )
}

export default Form
