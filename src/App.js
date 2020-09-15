import React, { Component } from "react";
import Homepage from "./pages/homepage.component";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Header from "./components/header/header.component";
import signInSigup from "./pages/signIn-signOut-component";
import ShopPage from "./pages/shop.component";
//import { Component } from 'react';
import { createUserProfile, auth } from "./firebase/firebase.utils";

class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribe = null;

  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot((snapshot) => {
          const newHeroes = [];
         
for (const key in snapshot) {
   newHeroes.push({
              id:key.uid,
              ...snapshot.data(),
            })
console.log("Snapshot"+newHeroes.id)
}
           
            

          this.setState({
            currentUser: newHeroes
          }, ()=>{
            console.log("Snapshot")
          });
        });
      }

      this.setState({
        currentUser: userAuth,
      });
    });
    
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <div>
          <Header currentUser={this.state.currentUser} />

          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={signInSigup} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
