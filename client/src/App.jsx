import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { TaskProvider } from './context/ToDoContext';
import './App.css';

function App() {
  return (
    <div className='flex justify-center flex-col items-center'>
      <TaskProvider>
        <div className='flex flex-col'>
          <TaskForm />
          <TaskList />
        </div>
      </TaskProvider>
    </div>
  );
}

export default App;
