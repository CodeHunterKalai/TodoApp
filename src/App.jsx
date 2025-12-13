import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import TaskManager from './Componants/08-task-manager/TaskManager'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TaskManager />
    </>
  )
}

export default App
