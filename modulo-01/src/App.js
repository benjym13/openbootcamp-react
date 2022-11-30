import './App.css';
import TaskList from './components/container/task_list';


function App() {
  const person = {
    name: 'Benjamón'
  }
  return (
    <div className="App">
      <header className="App-header">
        <TaskList></TaskList>
      </header>
    </div>
  );
}

export default App;
