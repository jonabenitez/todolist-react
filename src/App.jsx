import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm'


function App() {

  return (
    <main>
      <div className=' pt-12 bg-zinc-800 w-full h-screen'>
        <TaskForm />
        <TaskList />
      </div>
    </main>
  )

}

export default App
