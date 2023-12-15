import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  return (
    <div className='flex flex-col items-center bg-slate-100 min-h-screen font-mono'>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;