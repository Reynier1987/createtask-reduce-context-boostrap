import {Route, Routes} from 'react-router-dom'
import { Heading } from './component/Heading';
import {TasksForm} from './component/TaskForm'
import {TaskList} from './component/TaskList'
import {UserProvider} from './context/AppContext'

function App() {
  return (
    <div className=' bg-danger'>
      <UserProvider>
        <Heading />

        <div className=" text-center bg-danger">
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/add" element={<TasksForm />} />
            <Route path="/edit/:id" element={<TasksForm />} />
          </Routes>
        </div>
      </UserProvider>
    </div>
  );
}

export default App;
