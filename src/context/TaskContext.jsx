import { createContext, useState } from 'react'

export const TaskContext = createContext() // este es el nombre del contexto



export function TaskContextProvider(props) {

    const [tasks, settasks] = useState([])

    useEffect(() => {
        settasks(data)
    }, [])

    function createTask(task) {

        settasks([...tasks, {
            title: task.title,
            id: tasks.length,
            description: task.description,
        }])
    }

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
        deleteTask}}>
            {props.children}
            
        </TaskContext.Provider>
    )
}
    // ahora lo que hago es exportar de forma individual

    // primero importo el componente que esta siendo reenderizado, el provider y pongo app dentro de ese