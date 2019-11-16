import React, {useState, useEffect} from 'react';
import Login from './components/Login'
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom'
import Homepage from './components/Homepage';


const App = () => {
  const Page = {
    login: '/login',
    homepage: '/'
  }

  return (
    <HashRouter>
      <Switch>
      <Route exact path={Page.homepage} component={Homepage}/>
      <Route path={Page.login} component={Login} />
      </Switch>
    </HashRouter>
  )
}

export default App;
