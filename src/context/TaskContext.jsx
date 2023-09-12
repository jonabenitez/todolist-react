import { createContext, useState, useEffect } from 'react'
import { tasks as data } from "../data/tasks"

export const TaskContext = createContext() // este es el nombre del contexto



export function TaskContextProvider(props) {

    //////////// TASKS
    const [tasks, settasks] = useState([])
    useEffect(() => {
        settasks(data)
    }, [])


    ////////////// CREATE TASK
    function createTask(task) {
        settasks([...tasks, {
            title: task.title,
            id: tasks.length,
            description: task.description,
        }])
    }



    /////////m///// DELETE TASK
    function deleteTask(taskID) {
        settasks(tasks.filter(task => task.id !== taskID))
        console.log(taskID)

    }


    return (
        // este es el componente que va a englobar a todos
        <TaskContext.Provider
            value={{
                tasks,
                createTask,
                deleteTask
            }}>
            {props.children}

        </TaskContext.Provider>
    )
}
    // ahora lo que hago es exportar de forma individual

    // primero importo el componente que esta siendo reenderizado, el provider y pongo app dentro de ese