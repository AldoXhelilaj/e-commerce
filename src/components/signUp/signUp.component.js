import React, { Component } from "react";
import FormInput from "../formInput/formInput.component";
import BtnCustom from "../buttonCustom/btnCustom.component";
import { auth, createUserProfile } from "../../firebase/firebase.utils";
import "./singUp.style.scss";

class signUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("password dont match !");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfile(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <div className="sign-up">
          <h2>I do not have an account</h2>
          <h4>Sign up with email and password</h4>
          <form className="sign-up-form" onSubmit={this.handleSubmit}>
            <FormInput
              type="text"
              name="displayName"
              value={this.state.displayName}
              handleChange={this.handleChange}
              label="displayName"
            />
            <FormInput
              type="email"
              name="email"
              value={this.state.email}
              handleChange={this.handleChange}
              label="email"
            />
            <FormInput
              type="password"
              name="password"
              value={this.state.password}
              handleChange={this.handleChange}
              label="password"
            />
            <FormInput
              type="password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              handleChange={this.handleChange}
              label="confirm password"
            />
            <BtnCustom type="submit">Sign up</BtnCustom>
          </form>
        </div>
      </div>
    );
  }
}

export default signUp;
