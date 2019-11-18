import React, {useState, useEffect} from 'react';
import Login from './components/Login'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Homepage from './components/Homepage';
import MemPage from './components/MemPage';


const App = () => {
  const Page = {
    login: '/login',
    homepage: '/',
    mem: '/:id'
  }

  return (
    <Router>
      <Switch>
      <Route exact path={Page.homepage} component={Homepage}/>
      <Route path={Page.login} component={Login} />
      <Route path={Page.mem} component={MemPage} />
      </Switch>
    </Router>
  )
}

export default App;
