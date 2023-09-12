import { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskForm() {

    const [title, setTitle] = useState("") // esto es igual a crear let title = ""
    const [description, setDescription] = useState("")
    const { createTask } = useContext(TaskContext)


    let handdleSubmit = (e) => {
        e.preventDefault()
        // EL HANDLESUBMIT ES PRINCIPALMENTE PARA EVITAR EL REINICIO DEL NAVEGADOR Y CAPTURAR EL DATO DEL TITULO QUE SE GUARDA EN ESTA CONSTANTE NEW TASK.

        createTask(
            {
                title,
                description,
            }
        )
        setTitle("")
        setDescription("")

        // este CREATETRASK: viene como props de app, fue creado ahi y se lo trae para que este, capture esta nueva tarea, le damos el nuevo dato como valor, en este caso es la decripcion y el titulo, lo guarda en el createTask y en APP, donde fue creada es donde actua. en app este newTas.
        // Y CREATETASK EN APP, VA A COPIAR EL ARRAY DE TAREAS, LE VA  ENTRAR ESTE NUEVO DATO QUE ES UN TITULO, Y VA A CREAR UN NUEVO OBJETO CON EL NUEVO TITULO QUE INGRESO. 
        //**IMPORANTE, IR AL COMPONENTE MADRE APP Y ASIGNARLE LA PROPIEDAD createTask y agregarlo como props al componente actual TaskForm({createTask}){}**
    }
    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={handdleSubmit} className="bg-slate-600 p-8 mb-6 rounded-md">
                <h1 className='text-yellow-100 text-2xl mb-2 text-center font-bold'>Crea tu Tarea</h1>
                <input className='bg-slate-200 p-4 w-full mb-2'
                    placeholder="Ingresa tu tarea"
                    onChange={(e) => { setTitle(e.target.value) }}
                    value={title}
                />
                <textarea className='bg-slate-200 p-4 w-full mb-2'
                    placeholder='agrega una descripcion'
                    onChange={(e) => { setDescription(e.target.value) }}
                    value={description}
                />
                <button className='bg-blue-400 p-2 rounded-md text-white hover:bg-blue-900' >Agregar</button>
            </form>
        </div>
    )
}

export default TaskForm