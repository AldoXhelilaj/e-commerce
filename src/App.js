import React from 'react';
import Homepage from './pages/homepage.component'
import './App.css';
import {Route,Link,Switch} from 'react-router-dom'
import Header from './components/header/header.component'

import ShopPage from './pages/shop.component'

function App() {
  return (
    <div>

    <Header/>

    <Switch>

    <Route exact path="/" component={Homepage}/>
    <Route  path="/shop" component={ShopPage}/>
    


    </Switch>
    </div>
  );
}

export default App;
