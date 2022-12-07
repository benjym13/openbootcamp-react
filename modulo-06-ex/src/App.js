import './App.css';
import ClockFunction from './components/ClockFunction';
import Clock from './components/ClockClass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/*  <Clock></Clock> */}
        <ClockFunction></ClockFunction>
      </header>
    </div>
  );
}

export default App;
