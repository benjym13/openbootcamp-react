import './App.css';
import TaskList from './components/container/task_list';
import GreetingsStyled from './components/pure/GreetingsStyled';
import Example1 from './hooks/Example1';
import Example2 from './hooks/Example2';
import ContextComponent from './hooks/Example3';
import Example4 from './hooks/Example4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     {/*  <TaskList></TaskList> */}
       {/*  <Example2></Example2> */}
       {/*  <ContextComponent></ContextComponent> */}
       {/* Ejemlo de props.children */}
       {/*  <Example4 name="Benjamín">
          <h2>Estoy estudiando React</h2>
        </Example4> */}
        <GreetingsStyled></GreetingsStyled>
      </header>
    </div>
  );
}

export default App;
