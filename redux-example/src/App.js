import './App.css';
import TodosContainer from './components/containers/TodoContainer';
import TodoFormContainer from './components/containers/TodoFormContainer';
import Counter from './components/counter';
import Filteroptions from './components/pure/FilterOptions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <TodosContainer></TodosContainer>
        <TodoFormContainer></TodoFormContainer> */}
        {/* Filter Options contain Filter Container */}
        {/* <Filteroptions></Filteroptions> */}
        {/* Ejemplo easy de redux con Midudev */}
        <Counter></Counter>
      </header>
    </div>
  );
}

export default App;
