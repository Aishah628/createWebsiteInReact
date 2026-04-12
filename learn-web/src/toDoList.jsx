import React from 'react'
import {useState} from "react";


 export default function ToDoList() {
  const [todos,setTodos]=useState([]);
  const [inputValue,setInputValue]=useState("");

const handelSubmit=(e)=>{
  e.preventDefault();
  if (inputValue.trim()){
    setTodos([...todos,inputValue]);
    setInputValue(" ");
  }
};
const handelChange=(e)=>{
  setInputValue(e.target.value);
};
 return (
    <div>
      <h1> ToDo List</h1>
      <form onSubmit={handelSubmit}>
        <input type='text' value={inputValue} onChange={handelChange} placeholder='Add new ToDo'/>
        <button type='submit'>Add ToDo</button>
        <button type='button' onClick={()=>setTodos([])}>Clear List</button>
      </form>
      <ul>
        {todos.map((todo,index)=>(  
          <li key={index}>{todo}</li>
        ))};
      </ul>

    </div>
  )
 }  

 