import React from 'react';
import Homepage from './pages/homepage.component'
import './App.css';
import {Route,Link,Switch} from 'react-router-dom'

function App() {
  return (

    <Switch>

    <Route  path="/" component={Homepage}/>


    </Switch>
  );
}

export default App;
