import React, { Component } from "react";
import Homepage from "./pages/homepage.component";
import "./App.css";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/signIn-signOut-component";
import ShopPage from "./pages/shop.component";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";
import { createUserProfile, auth } from "./firebase/firebase.utils";
import CartDropdown from './components/Cart/cartDropdown.component'

class App extends Component {
  unsubscribe = null;

  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot((snapshot) => {
          const newHeroes = [];

          for (const key in snapshot) {
            newHeroes.push({
              id: key.uid,
              ...snapshot.data(),
            });
            console.log("Snapshot" + newHeroes.id);
          }

          this.props.setCurrentUser(newHeroes);
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
const{currentUser}=this.props
    console.log("props"+currentUser)
    return (
      <div>
        <div>
          <Header />

          <Switch>
            <Route exact path="/" component={Homepage} />

            <Route path="/shop" component={ShopPage} />

            <Route
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInSignUp />
              }
            />
            
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({

    currentUser: user.currentUser
});
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
