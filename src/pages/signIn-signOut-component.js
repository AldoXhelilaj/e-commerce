import React from 'react';
import Signin from '../components/signInsignOut/sign-in.component';
import Signup from '../components/signUp/signUp.component';
import './signIn-signOut.style.scss'


const signInsignOut = () => {
    return (
        <div className="sign-in-out">
            <Signin/>
            <Signup/>
        </div>
    );
}

export default signInsignOut;
