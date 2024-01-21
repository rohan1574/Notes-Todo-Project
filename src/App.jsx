
import {  useEffect, useState } from 'react'
import CreateTask from './Components/CreateTask'
import  { Toaster } from 'react-hot-toast';
import ListTask from './Components/ListTask';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


function App() {
  
 
const [tasks, setTasks] =useState([]);
console.log("task", tasks);
useEffect(() =>{
 setTasks(JSON.parse(localStorage.getItem("task")));
},[])

  return (
    <>
     <DndProvider backend={HTML5Backend}>
     <Toaster />
      <div className='max-w-screen-xl mx-auto '>
        <CreateTask tasks={tasks} setTasks={setTasks}></CreateTask>
        <ListTask tasks={tasks} setTasks={setTasks}></ListTask>
      </div>
      </DndProvider>
    </>
  )
}

export default App
