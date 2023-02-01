import React from 'react'

function TaskCard({task}) {
  return (
    <>
    <h1>{task.title}</h1>
    <p>{task.description}</p>
  </> 
   )
}

export default TaskCard