import './App.css';
import Father from './components/container/father';
import TaskList from './components/container/task_list';
import AsynExample from './components/pure/AsynExample';
import ConditionalRender from './components/pure/conditionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import FetchExample from './components/pure/fetchExample';
import AxiosExample from './components/pure/AxiosExample';
import Chuck from './components/pure/Chuck';


function App() {
  const person = {
    name: 'Benjamón'
  }
  return (
    <div className="App">
       {/*  <TaskList></TaskList> */}
        {/* GESTIÓN DE EVENTOS */}
        {/*  <Father></Father> */}
        {/*  RENDERIZADO CONDICIONAL */}
       {/*  <ConditionalRender/> */}
       {/* Ejemplo de FORMIK */}
        {/* <LoginFormik></LoginFormik> */}
        {/* <RegisterFormik></RegisterFormik> */}
        {/* Ejemplos de async */}
        {/* <AsynExample></AsynExample> */}
       {/*  <FetchExample></FetchExample> */}
       {/* <AxiosExample></AxiosExample> */}
       <Chuck></Chuck>
    </div>
  );
}

export default App;
