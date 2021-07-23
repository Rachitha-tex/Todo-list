import React,{useState,useEffect} from 'react'
import "./App.css"
import Form from './components/Form'
import TodoList from './components/TodoList'
const App=()=> {

const[text,setText] = useState("")
const[todos,setTodos]=useState([])  
const[status,setStatus]=useState('all')  
const[filterTodo,setFilterTodo]=useState([]);


useEffect(()=>{
  getLocals()
  },[]
  )
useEffect(()=>{
filterHandler();
saveLocal();
},[status,todos])


const filterHandler=()=>{
  switch(status){
    case "completed":
      setFilterTodo(todos.filter((todo)=>todo.completed===true))
      break;
      case "uncompleted":
        setFilterTodo(todos.filter((todo)=>todo.completed===false))
        break;
        default:
          setFilterTodo(todos);
          break;
  }
}

//save to local storage
const saveLocal=()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  }


//get locals
const getLocals=()=>{
  if(localStorage.getItem('todos')===null){
    localStorage.setItem('todos',JSON.stringify([]));
  }else{
   let locals= JSON.parse(localStorage.getItem("todos"));
   setTodos(locals)
  }
}


return (
    <div className="App">
      <header>
        <h2>My Own Todo List</h2>
      </header>
<Form setText={setText} text = {text} todos = {todos} setTodos = {setTodos} setStatus={setStatus}/>
<TodoList setTodos = {setTodos } todos = {todos} filterTodo={filterTodo}/>
    </div>
  )
}

export default App

