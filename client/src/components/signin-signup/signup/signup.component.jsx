import React, { Component } from 'react';
import './signup.styles.css';
import { fire, createUserProfileDocument } from '../../../firebase/firebase';
import { Link } from 'react-router-dom';

class Signup extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: ''
        }
    }

    signup = async event => {
        event.preventDefault();

        const {displayName, email, phone, password, confirmPassword} = this.state;

        const AAAtotalorders = 0;

        if(password !== confirmPassword) {
            alert("Password don't match");
            return;
        }

        try {
            const { user } = await fire.auth().createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName, phone, password, AAAtotalorders });

            this.setState({
                displayName: '',
                email: '',
                phone: '',
                password: '',
                confirmPassword: ''
            });

            window.location = '/';
        } catch (error) {
            window.alert(error);
        }
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value});
    };

    render() {
        return (
            <div className='signupWrapper'>
                <div className='signupTitle'>Sign Up</div>
                <form>
                    <input type='text' id='fullWidth' placeholder='Name' name='displayName' value={this.state.displayName} onChange={this.handleChange} />
                    <input type='mail' id='fullWidth' placeholder='Mail' name='email' value={this.state.email} onChange={this.handleChange} />
                    <input type='phone' id='fullWidth' placeholder='Phone Number' name='phone' value={this.state.phone} onChange={this.handleChange} />
                    <input type='password' id='fullWidth' placeholder='Password' name='password' value={this.state.password} onChange={this.handleChange} />
                    <input type='password' id='fullWidth' placeholder='Confirm Password' name='confirmPassword' value={this.state.confirmPassword} onChange={this.handleChange} />
                    <button type='submit' id='fullWidthButton' onClick={this.signup}>Sign Up</button>
                    <Link to='/signin'><button type='submit' id='fullWidthButton' >Sign In Instaid</button></Link>
                </form>
            </div>
        );
    }
}

export default Signup;