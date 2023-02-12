import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm'
import { tasks as data} from "./data/tasks" // se pone con llaves porque no estoy usando export default
//8 el as data, es como renombrar este elemento tasks, porque? porque js lo confunde en el primer console.log() teniamos tasks, y me tiraba el en pantalla que estaba vacio el array, eso era porque se confundia con el tasks del estado, que era un arreglo vacio, lo llena con el mismo arreglo vacio y lo que queremos es que lo llene con estos datos traidos de ./tasks, para eso le agregamos un "apodo", llamado data, para evitar esta confucion
import { useState, useEffect } from "react";


function App() {

  const [tasks, settasks] = useState([])
    //1 aca estamos creando una variable tasks con un arreglo vacio dentro, SIEMPRE ponerle algo, un  arreglo vacio === tasks = [], sino da error.
    //2 la idea es que con la funcion map este estado se vaya rellenando, esta funcion se encuentra en TASKLIST.

      //4 ESTA EN TASKLIST.

      //5 esta tareas igual no me van a cargar si yo le pongo el nombre  const [tasks, settasks] = useState([tasks]), porque me tira el error, porque en el momento el momento de la inicializacion del componente, esas tareas no estan disponibles todavia, no llego a cargarlas, PARA ESO USO USE EFFECT
    
  useEffect (()=>{
    settasks(data)
  },[])
  //6 uso el useEffect: donde, con ese arreglo vacio del final, le estamos indicando que esto se va a a ejecutar cuando cargue el componente tasksList, cuando cargue, vas a setear el arreglo con las tareas.

  // el problema es que cuando yo ponia settasks(tasks) me lo estaba tomando pero vacio, se confundia con el tasks del estado  [tasks, settasks], en lugar de agarrar el tasks del array, para eso le agregamos un alias a ese tasks
//9) movemos este elemento creado en TaskList junto con la importacion de data a al componente App

  function  createTask (task) {

    settasks ([...tasks, {
      title:task.title,
      id:tasks.length,// de este es tanks, porque agarra el id de la lista de tareas, del array, en los demas agarra la tarea en cuestion.
      description:task.description,
    }])
    // ahoran createTask esta recibiendo un objeto, que ya que es un titulo y una decripion, son 2 elementos, y lo identificamos donde queremos que esten qui dentro, el title = task,title / description = task.description
    
    // le pedimos que copie todos los elementos del arreglo tasks y le agrege la nueva task.
  // los ... significa copia los elementos de ese arreglo y despues de la , agregalo. y crea un nuevo arreglo.
  //**imporante: como se crea un nuevo arreglo, es necesario que se asigne este nuevo al estado, hacemos un setTasks[...tasks, task] */
}

function deleteTask(taskID) {
  settasks(tasks.filter(task => task.id !== taskID))
// por cada tarea (task) que recorras, voy a comparar si el id de esa tarea (que viene del array tasks) es distinta al taskID que recibe como parametro en el taskCard cuando se hace click en el boton, si encuentra uno que sea igual, va a ser false y se quita.




  console.log(taskID)
  
}


  return (
  <>
    <TaskForm createTask= {createTask} />
    <TaskList tasks={tasks} deleteTask={deleteTask}/>
  </>
    )
  
}

export default App
