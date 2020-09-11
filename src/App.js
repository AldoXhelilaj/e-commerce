import React ,{Component} from 'react';
import Homepage from './pages/homepage.component'
import './App.css';
import {Route,Link,Switch} from 'react-router-dom'
import Header from './components/header/header.component'
import signInSigup from './pages/signIn-signOut-component'
import ShopPage from './pages/shop.component'
//import { Component } from 'react';
import{ auth} from './firebase/firebase.utils'





class App extends Component {



  state={
    currentUser:null
  }
  
 unsubscribe=null;

componentDidMount(){

  this.unsubscribe= auth.onAuthStateChanged(user=>{
    this.setState({
      currentUser:user
    })
    console.log(this.state.currentUser);
  })


}


componentWillUnmount(){

this.unsubscribe();



}
  render() {


    return (
      <div>
         <div>

<Header currentUser={this.state.currentUser}/>

<Switch>

<Route exact path="/" component={Homepage}/>
<Route  path="/shop" component={ShopPage}/>
<Route  path="/signin" component={signInSigup}/>




</Switch>
</div>
      </div>
    );
  }
}

export default App;
