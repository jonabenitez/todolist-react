
  function TaskList({tasks}) {
    
    if (tasks.length === 0) {
      return <h1>no hay tareas aun</h1> } 
      //4 este if, es de control, antes que se retorne, comprobamos y vamos a controlar si se lleno de tareas o no, si el arreglo vacio que creamos arriba esta en 0, es decir vacio, retoname el h1.

      //5 esta tareas igual no me van a cargar si yo le pongo el nombre  const [tasks, settasks] = useState([tasks]), porque me tira el error, porque en el momento el momento de la inicializacion del componente, esas tareas no estan disponibles todavia, no llego a cargarlas.

      //6 tengo que pedirle que las cargues una vez que esten disponible, esta es la funcion del UseEffect.

    

    return (
      <div>
        {
          //3 recorro con map
          tasks.map((task) => (
          <div key={task.id}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>

          </div>))
        }
      </div>
  // aca pasa que no me devuelve nada, para eso vamos al paso 4
    )
  }

  export default TaskList