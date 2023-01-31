import {useState} from 'react'

function TaskForm({createTask}) {
    
    const [title, setTitle] = useState("") // esto es igual a crear let title = ""
    // ahora vamos a cambiar el console.log (e.target.value) por setTitle (e.target.value) asi de esta forma se asigna ese valor al estado
    
    let handdleSubmit = (e)=>{
        e.preventDefault()
        //cancelamos el evento por defecto del form y evitamos que reinicie el navegador. 
        const newTask = (title)
// este cambio se hace para trabajar con un objeto con la propiedad title en este caso y que no sea solo un string ya que en donde se va a guardar que es tasks, son todos objetos, tengo seguir trabajando con objetos.
// pasa que necesitamos cambiar el id, entonces, volvimos atras, dejamos que solo aqui se cree el titulo como string, que va a llegar a createTask como parametro llamado taskTitle   === function createTask (taskTitle) 
// y en el createTask de app, le vamos a pasar los datos faltantes y que se convierta todo en objeto, seguir en APP...

        createTask(newTask)
// vamos a cambiar el console.log(title) que teniamos, por una nueva variable, que va a guardar lo mismo, no consologuearlo solamente, sino se lo damos como valor a esta funcion, esta funcion se ejecuta, se crea esa nueva tarea y copia esta nueva tarea copiando las anteriores.

//**IMPORANTE, IR AL COMPONENTE MADRE APP Y ASIGNARLE LA PROPIEDAD createTask y agregarlo como props al componente actual TaskForm({createTask}){}**
    }
    // se creo por fuera la funcion de onSubmit para mas prolijidad.
    return (
        
            <form onSubmit={handdleSubmit}> 
            <input placeholder="Ingresa tu tarea"
                onChange={(e)=>{
                    setTitle(e.target.value)
                }}
                />

            
            <button>Agregar</button>
            </form>
        
    ) 
}

export default  TaskForm