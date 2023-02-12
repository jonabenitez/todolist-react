import React from 'react'

function TaskCard({task, deleteTask}) {
  return (
    <>
    <h1>{task.title}</h1>
    <p>{task.description}</p>
    <button onClick={()=>deleteTask(task.id)}>
      Eliminar tarea
    </button>
  </> 
   )
}

export default TaskCard