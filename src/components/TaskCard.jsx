import {React, useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskCard({task}) {
  const {deleteTask} = useContext(TaskContext)
  return (
    <div className="bg-gray-800 text-yellow-50 p-3 text-center rounded-md capitalize ">
    <h1 className='text-xl font-bold' >{task.title}</h1>
    <p className='text-gray-400  text-sm pb-1 '>{task.description}</p>
    <button className='bg-red-500  text-center m-0 w-40 rounded-sm hover:bg-blue-400' onClick={()=>deleteTask(task.id)}>
      Eliminar tarea
    </button>
  </div> 
   )
}

export default TaskCard