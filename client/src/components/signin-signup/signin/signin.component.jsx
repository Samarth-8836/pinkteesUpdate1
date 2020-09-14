import React, { Component } from 'react';
import './signin.styles.css';
import fire from '../../../firebase/firebase';
import { Link } from 'react-router-dom';

class Signin extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    login = (event) => {
        event.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((user) => {
            console.log(user);
            window.history.go(-1);
        }).catch((err) => {
            window.alert(err);
        });
    }

    signout = (event) => {
        event.preventDefault();
        fire.auth().signOut();
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    componentDidMount() {
        var newUser = localStorage.getItem("user");
        if(newUser !== "null") {
            window.alert('Already Signed In. Now redirecting to home')
            window.location = '/';
        }
    }

    render() {
        return (
            <div className='signupWrapper'>
                <div className='signupTitle'>Sign In</div>
                <form>
                    <input type='mail' id='fullWidth' placeholder='Mail' onChange={this.handleChange} name='email' value={this.state.email} />
                    <input type='password' id='fullWidth' placeholder='Password' onChange={this.handleChange} name='password' value={this.state.password} />
                    <button type='submit' id='fullWidthButton' onClick={this.login} >Sign In</button>
                    <Link to='/signup'><button type='submit' id='fullWidthButton'>Sign Up Instaid</button></Link> 
                    <button type='submit' id='fullWidthButton' onClick={this.signout}>Sign Out</button>
                </form>
            </div>
        );
    }
}

export default Signin;