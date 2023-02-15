import  TaskCard from "./TaskCard"
import {useContext} from 'react'
import { TaskContext } from "../context/TaskContext";

//{tasks, deleteTask}
 function TaskList() {
    
const {tasks} = useContext(TaskContext)

    if (tasks.length === 0) {
      return <h1 className="text-yellow-100 text-4xl">No hay tareas aun</h1> } 
      //4 este if, es de control, antes que se retorne, comprobamos y vamos a controlar si se lleno de tareas o no, si el arreglo vacio que creamos arriba esta en 0, es decir vacio, retoname el h1.


    return (
      <div className="grid grid-cols-4 gap-2" >
        {
          //3 recorro con map, esto despues de cambiar de lugar el arreglo de tareas, que estaba aca en tasklist y lo pasamos app, tuvimos que traer las tasks como propiedades para que pueda recorrerlas.
          tasks.map((task) => (
           <TaskCard 
            task={task}
            key={task.id}
            
           />
          //ahora nos va a retornar el componente taskcard, con una tarea la cual se la estamos pasando por medio de una prop, esa tarea que   se este recorriendo en ese momento, es lo que nos va a retornar
        ))}
      </div>
  // aca pasa que no me devuelve nada, para eso vamos al paso 4
    )
  }

  export default TaskList