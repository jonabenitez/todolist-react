import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm'
import { tasks as data} from "./data/tasks" // se pone con llaves porque no estoy usando export default
//8 el as data, es como renombrar este elemento tasks, porque? porque js lo confunde en el primer console.log() teniamos tasks, y me tiraba el en pantalla que estaba vacio el array, eso era porque se confundia con el tasks del estado, que era un arreglo vacio, lo llena con el mismo arreglo vacio y lo que queremos es que lo llene con estos datos traidos de ./tasks, para eso le agregamos un "apodo", llamado data, para evitar esta confucion
import { useState, useEffect } from "react";


function App() {

  return (
  <>
    <TaskForm createTask= {createTask} />
    <TaskList tasks={tasks} deleteTask={deleteTask}/>
  </>
    )
  
}

export default App
