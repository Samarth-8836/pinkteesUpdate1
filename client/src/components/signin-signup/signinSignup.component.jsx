import React from 'react';
import './signinSignup.styles.css';
import Signup from './signup/signup.component';
import Signin from './signin/signin.component';
import { Switch, Route } from 'react-router-dom';

const SigninSignup = () => {
    return (
        <div className='signinsignupCover'>
            <Switch>
                <Route path='/signup' component={Signup} exact />
                <Route path='/signin' component={Signin} exact />
            </Switch>
        </div>
    );
}

export default SigninSignup;