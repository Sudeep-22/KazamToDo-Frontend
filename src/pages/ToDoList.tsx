import React from 'react'
import AddToDo from '../components/AddToDo'
import NoteComponent from '../components/NoteComponent'

const ToDoList = () => {
  return (
    <div>
      <AddToDo/> 
      Adding mechanism should be added above

      <h1>Current list</h1>
      mapping the list below;
      <NoteComponent/>

    </div>
  )
}

export default ToDoList
