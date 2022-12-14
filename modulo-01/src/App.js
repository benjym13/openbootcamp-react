import './App.css';
import Father from './components/container/father';
import TaskList from './components/container/task_list';
import ConditionalRender from './components/pure/conditionalRender';


function App() {
  const person = {
    name: 'Benjamón'
  }
  return (
    <div className="App">
        {/* <TaskList></TaskList> */}
        {/* GESTIÓN DE EVENTOS */}
        {/*  <Father></Father> */}
        {/*  RENDERIZADO CONDICIONAL */}
        <ConditionalRender/>
    </div>
  );
}

export default App;
