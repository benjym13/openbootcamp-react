import './App.css';
import Father from './components/container/father';
import TaskList from './components/container/task_list';


function App() {
  const person = {
    name: 'Benjamón'
  }
  return (
    <div className="App">
        <TaskList></TaskList>
        {/* GESTIÓN DE EVENTOS */}
       {/*  <Father></Father> */}
    </div>
  );
}

export default App;
