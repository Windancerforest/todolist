import { useState } from 'react'
import {FaCheckSquare} from 'react-icons/fa'
import { AddTask } from './components';
import { TaskList } from './components';
import {Toaster} from 'react-hot-toast';
function App() {
  const [tasks,setTasks]=useState(
    [
      {
        title:'Learn Javascript',
        completed:true,
        id:1,
      },
      {
        title:'Learm React',
        completed:false,
        id:2,
      },
    ]
  );


  return (
    <>
      <Toaster position='bottom-right'/>
      {/* Task Title */}
      <TaskTile/>

      {/* Add Task */}
      <AddTask setTasks={setTasks}/>

      {/*Task List */}
      <TaskList tasks={tasks} setTasks={setTasks}/>
    </>
  )
}

// Task Title
function TaskTile(){
  return (<div className='max-w-lg px-5 m-auto mt-20'>
    <h1 className='flex justify-center text-3xl font-bold underline'>
      My Todo list
      <FaCheckSquare style={{color:'42C239'}}/>
    </h1>
  </div>);
}


// Add Task

//Task List


export default App
