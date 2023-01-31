import TaskList from './TaskList';
import TaskForm from './TaskForm'
import { tasks as data} from "./tasks" // se pone con llaves porque no estoy usando export default
//8 el as data, es como renombrar este elemento tasks, porque? porque js lo confunde en el primer console.log() teniamos tasks, y me tiraba el en pantalla que estaba vacio el array, eso era porque se confundia con el tasks del estado, que era un arreglo vacio, lo llena con el mismo arreglo vacio y lo que queremos es que lo llene con estos datos traidos de ./tasks, para eso le agregamos un "apodo", llamado data, para evitar esta confucion
import { useState, useEffect } from "react";


function App() {

  const [tasks, settasks] = useState([])
    //1 aca estamos creando una variable tasks con un arreglo vacio dentro, SIEMPRE ponerle algo, un  arreglo vacio === tasks = [], sino da error.
    //2 la idea es que con la funcion map este estado se vaya rellenando.

  useEffect (()=>{
    settasks(data)
  },[])
  //7 uso el useEffect: donde, con ese arreglo vacio del final, le estamos indicando que esto se va a a ejecutar cuando cargue el componente tasksList, cuando cargue, vas a setear el arreglo con las tareas.

  // el problema es que cuando yo ponia settasks(tasks) me lo estaba tomando pero vacio, se confundia con el tasks del estado  [tasks, settasks], en lugar de agarrar el tasks del array, para eso le agregamos un alias a ese tasks
//9) movemos este elemento creado en TaskList junto con la importacion de data a al componente App

  function createTask (taskTitle) {
    settasks ([...tasks, {
      title:taskTitle,
      id:tasks.length,
      description: "tarea numero " + (tasks.length+1)
    }])
    // aqui no puedo contatenar el task, con el taskTitle, porque uno es un objeto y el otro un string directamente, asi que lo defino como objeto aqui mismo.
      
    
    // le pedimos que copie todos los elementos del arreglo tasks y le agrege la nueva task.
  // los ... significa copia los elementos de ese arreglo y despues de la , agregalo. y crea un nuevo arreglo.
  //**imporante: como se crea un nuevo arreglo, es necesario que se asigne este nuevo al estado, hacemos un setTasks[...tasks, task] */
}









  return (
  <>
    <TaskForm createTask= {createTask} />
    <TaskList tasks={tasks}/>
  </>
    )
  
}

export default App
