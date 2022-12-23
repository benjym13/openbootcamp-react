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


function AppRoutingOne() {
  let logged = localStorage.getItem('credentials');
  return (
    <div className="App">
        <Router>
          <div>
            <Link to='/'>|| Home |</Link>
            <Link to='/about'>| About |</Link>
            <Link to='/faqs'>| Faqs |</Link>
            <Link to='/login'>| Login ||</Link>
          </div>
          {/* <Link to='/privacy'> Privacy </Link> */}
          <Switch>
            <Route exact path='/'component={HomePage} />
            <Route path='/(about|faqs)'component={About} />
            <Route path='/register' component={RegisterPage} />
            <Route path='/login'component={LoginPage}>
              {
                logged ?
                () => {
                  alert('ya estás registrado');
                  return <Redirect to='/'></Redirect>
                }
                :
                <LoginPage></LoginPage>
              }
            </Route>
            <Route path='/profile'component={Profile} >
              {
              logged ?
              <Profile></Profile>
              :
              () => {
                alert('You must be logged...');
                return <Redirect to='/login'></Redirect>
              }
              
            }
            </Route>
            <Route path='/tasks'component={TaskPage} />
            <Route path='/task/:id'component={TaskDetail} />
            {/* 404 Page Not Found */}
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
    </div>
  );
}

export default AppRoutingOne;
