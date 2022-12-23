/* import './App.css'; */
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import About from './pages/about/About';
import TaskPage from './pages/task/TaskPage';
import TaskDetail from './pages/task/TaskDetail';
import Profile from './pages/profile/Profile';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import Dasboard from './pages/dasboard/Dasboard';

function AppRoutingFinal() {

const logged = false;

  return (
    <div>
        <Router>
          <Switch>
            <Route path='/login'component={ LoginPage }/>
            <Route path='/register'component={ RegisterPage }/>
            <Route path='/tasks' component={ TaskPage } >
              {
                logged ?
                (<TaskPage></TaskPage>)
                :
                (<Redirect to='/login'></Redirect>)
              }
            </Route>
            <Route path='/dasboard' component={ Dasboard } >
              {
                logged ?
                (<Dasboard></Dasboard>)
                :
                (<Redirect to='/login'> </Redirect>)
              }
            </Route>
            <Route exact path='' >
              { logged ?
                (<Redirect to='/dasboard'> </Redirect>)
                :
                (<Redirect to='/login'> </Redirect>)
              }
            </Route>
            <Route component={ NotFoundPage }/>
          </Switch>
        </Router>
    </div>
  );
}

export default AppRoutingFinal;
