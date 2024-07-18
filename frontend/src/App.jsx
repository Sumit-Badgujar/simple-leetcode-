import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import {  } from 'react-router-dom';


import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { Problemset } from './components/Problemset';
import { Problem } from './components/Problem';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        <Route path='/problemset' component={Problemset} />
        <Route path='/problem/:id' component={Problem} />
        <Redirect from='/' to='/login' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
