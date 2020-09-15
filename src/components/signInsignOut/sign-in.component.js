import React, { Component } from "react";
import FormInput from "../formInput/formInput.component";
import BtnCustom from "../buttonCustom/btnCustom.component";
import {signInWithGoogle} from '../../firebase/firebase.utils'
import './signIn.style.scss';


class Signin extends Component {
  state = {
    email: "",
    password: "",
  };

  onFormsubmit = (e) => {
    e.preventDefault();
  };

  onHandlechange = (e) => {
    const { name, value } = e.target;
//we user this ways in order not to write 2 functions doing the same thing
    this.setState({
      [name]: value,
    });
  };

  render() {
 

    const { email, password } = this.state;
    return (
      <div className="signin">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form action="" onSubmit={this.onFormsubmit}>
          <FormInput
            label="password"
            type="password"
            name="password"
            id="password"
            value={password}
            required
            handleChange={this.onHandlechange}
          />

          <FormInput
            label="email"
            type="email"
            name="email"
            id="email"
            autocomplete="on"
            value={email}
            required
            handleChange={this.onHandlechange}
          />

          <div className="btn-group">
            <BtnCustom type="submit" >Sign in</BtnCustom>
            <BtnCustom onClick={ signInWithGoogle}  googlesignin>Sign in with Google</BtnCustom>
         

           
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
