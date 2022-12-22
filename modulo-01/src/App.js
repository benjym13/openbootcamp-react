import './App.css';
import Father from './components/container/father';
import TaskList from './components/container/task_list';
import ConditionalRender from './components/pure/conditionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';


function App() {
  const person = {
    name: 'Benjamón'
  }
  return (
    <div className="App">
        <TaskList></TaskList>
        {/* GESTIÓN DE EVENTOS */}
        {/*  <Father></Father> */}
        {/*  RENDERIZADO CONDICIONAL */}
       {/*  <ConditionalRender/> */}
       {/* Ejemplo de FORMIK */}
        {/* <LoginFormik></LoginFormik> */}
        {/* <RegisterFormik></RegisterFormik> */}
    </div>
  );
}

export default App;
