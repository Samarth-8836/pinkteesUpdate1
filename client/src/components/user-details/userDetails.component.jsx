import React, { Component } from 'react';
import './userDetails.styles.css';
import { firestore } from '../../firebase/firebase';



class UserDetails extends Component {

    constructor() {
        super();

        this.state = {
            nameChange: false,
            phoneChange: false,
            emailChange: false,
            passwordChange: false,
            addressChange: false,
            name: '',
            phone: '',
            email: '',
            password: '',
            newpassword: '',
            address: ''
        }
    }

    componentDidMount() {
        var newUser = localStorage.getItem("user");
        if(newUser === "null") {
            window.alert('You need to be signed in to access this page. Sign in now')
            window.location = '/signin';
        }
    }

    getUserName = () => {
        const userRef = firestore.doc(`users/${localStorage.getItem("uid")}`);
        const snapShot = userRef.get().then(function(doc) {
            if(doc.exists) {
                let name = doc.data().displayName;
                let mobile = doc.data().phone;
                let emailA = doc.data().email;
                let address = doc.data().userAddress;
                if(localStorage.getItem("user") === 'null') {
                    localStorage.setItem("userName", 'null');
                    localStorage.setItem('userMobile', 'null');
                    localStorage.setItem('userEmail', 'null');
                    localStorage.setItem('userAddress', 'null');
                } else {
                    localStorage.setItem("userName", name);
                    localStorage.setItem('userMobile', mobile);
                    localStorage.setItem('userEmail', emailA);
                    localStorage.setItem('userAddress', address);
                }
            }
        });
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value});
    };

    updateUserNameDetails = event => {
        event.preventDefault();

        let pass ='';
        let passEntered = this.state.password;
        let displayName = this.state.name;
        const userRef = firestore.doc(`users/${localStorage.getItem("uid")}`);
        const snapShot = userRef.get().then((doc) => {
            if(doc.exists) {
                pass = doc.data().password;
                if(passEntered === pass) {
                    const changedAt = new Date();
                    const snapShot = userRef.set({
                        displayName: displayName,
                        email: localStorage.getItem('userEmail'),
                        address: localStorage.getItem('userAddress'),
                        phone: localStorage.getItem('userMobile'),
                        password: pass,
                        changedAt: changedAt 
                    }).then(() => {
                        alert('Updated Succesfully');
                        this.setState({nameChange: false});
                        localStorage.setItem('userName', displayName);
                    }).catch(() => {
                        alert('Error updating. Try again later');
                    });
                } else {
                    alert('Wrong Password. Try again');
                }
            }
        });
    }


    updateUserPhoneDetails = event => {
        event.preventDefault();

        let pass ='';
        let passEntered = this.state.password;
        let displayPhone = this.state.phone;
        const userRef = firestore.doc(`users/${localStorage.getItem("uid")}`);
        const snapShot = userRef.get().then((doc) => {
            if(doc.exists) {
                pass = doc.data().password;
                if(passEntered === pass) {
                    const changedAt = new Date();
                    const snapShot = userRef.set({
                        displayName: localStorage.getItem('userName'),
                        email: localStorage.getItem('userEmail'),
                        address: localStorage.getItem('userAddress'),
                        phone: displayPhone,
                        password: pass,
                        changedAt: changedAt 
                    }).then(() => {
                        alert('Updated Succesfully');
                        this.setState({phoneChange: false});
                        localStorage.setItem('userMobile', displayPhone);
                    }).catch(() => {
                        alert('Error updating. Try again later');
                    });
                } else {
                    alert('Wrong Password. Try again');
                }
            }
        });
    }

    updateUserEmailDetails = event => {
        event.preventDefault();

        let pass ='';
        let passEntered = this.state.password;
        let displayEmail = this.state.email;
        const userRef = firestore.doc(`users/${localStorage.getItem("uid")}`);
        const snapShot = userRef.get().then((doc) => {
            if(doc.exists) {
                pass = doc.data().password;
                if(passEntered === pass) {
                    const changedAt = new Date();
                    const snapShot = userRef.set({
                        displayName: localStorage.getItem('userName'),
                        email: displayEmail,
                        address: localStorage.getItem('userAddress'),
                        phone: localStorage.getItem('userMobile'),
                        password: pass,
                        changedAt: changedAt
                    }).then(() => {
                        alert('Updated Succesfully');
                        this.setState({emailChange: false});
                        localStorage.setItem('userEmail', displayEmail);
                    }).catch(() => {
                        alert('Error updating. Try again later');
                    });
                } else {
                    alert('Wrong Password. Try again');
                }
            }
        });
    }


    updateUserAddressDetails = event => {
        event.preventDefault();

        let pass ='';
        let passEntered = this.state.password;
        let displayAddress = this.state.address;
        const userRef = firestore.doc(`users/${localStorage.getItem("uid")}`);
        const snapShot = userRef.get().then((doc) => {
            if(doc.exists) {
                pass = doc.data().password;
                if(passEntered === pass) {
                    const changedAt = new Date();
                    const snapShot = userRef.set({
                        displayName: localStorage.getItem('userName'),
                        email: localStorage.getItem('userEmail'),
                        address: displayAddress,
                        phone: localStorage.getItem('userMobile'),
                        password: pass,
                        changedAt: changedAt
                    }).then(() => {
                        alert('Updated Succesfully');
                        this.setState({addressChange: false});
                        localStorage.setItem('userAddress', displayAddress);
                    }).catch(() => {
                        alert('Error updating. Try again later');
                    });
                } else {
                    alert('Wrong Password. Try again');
                }
            }
        });
    }


    updateUserPasswordDetails = event => {
        event.preventDefault();

        let pass ='';
        let passEntered = this.state.password;
        let displayPassword = this.state.password;
        const userRef = firestore.doc(`users/${localStorage.getItem("uid")}`);
        const snapShot = userRef.get().then((doc) => {
            if(doc.exists) {
                pass = doc.data().password;
                if(passEntered === pass) {
                    const changedAt = new Date();
                    const snapShot = userRef.set({
                        displayName: localStorage.getItem('userName'),
                        email: localStorage.getItem('userEmail'),
                        address: localStorage.getItem('userAddress'),
                        phone: localStorage.getItem('userMobile'),
                        password: displayPassword,
                        changedAt: changedAt
                    }).then(() => {
                        alert('Updated Succesfully');
                        this.setState({passwordChange: false});
                    }).catch(() => {
                        alert('Error updating. Try again later');
                    });
                } else {
                    alert('Wrong Password. Try again');
                }
            }
        });
    }



    render(){
        return (
            <div className='userDetailsContainer'>
                <div className='userDetailsTitle'>{this.getUserName()}
                    {localStorage.getItem("userName") === 'null' ? '' : localStorage.getItem("userName")}
                </div>
                <div className='userDetailsUserInfoContainer'>
                    
                    {
                        this.state.nameChange ? 
                        <React.Fragment>
                            <form>
                                <input type='text' name='name' placeholder='New Username' onChange={this.handleChange} name='name' value={this.state.name}/>
                                <input type='password' name='password' placeholder='Password' onChange={this.handleChange} name='password' value={this.state.password} /><br />
                                <button type='submit' onClick={this.updateUserNameDetails} >Update</button>
                            </form>
                        </React.Fragment>
                        :
                        <React.Fragment><span className='userDetailsUserTitle'>Name</span><span className='userDetailsUserTitleActual'>{localStorage.getItem("userName") === 'null' ? '' : localStorage.getItem("userName")}</span><div className='editIcon' onClick={() => {this.setState({nameChange: true})} }/></React.Fragment>
                    }

                </div>
                <div className='userDetailsUserInfoContainer'>
                    {
                        this.state.phoneChange ? 
                        <React.Fragment>
                            <form>
                                <input type='text' name='phone' placeholder='New Phone Number' onChange={this.handleChange} value={this.state.phone}/>
                                <input type='password' name='password' placeholder='Password' onChange={this.handleChange} name='password' value={this.state.password} /><br />
                                <button type='submit' onClick={this.updateUserPhoneDetails} >Update</button>
                            </form>
                        </React.Fragment>
                        :
                        <React.Fragment><span className='userDetailsUserTitle'>Phone</span><span className='userDetailsUserTitleActual'>{localStorage.getItem("userMobile") === 'null' ? '' : localStorage.getItem("userMobile")}</span><div className='editIcon' onClick={() => {this.setState({phoneChange: true})} }/></React.Fragment>
                    }
                </div>
                <div className='userDetailsUserInfoContainer'>
                    {
                        this.state.emailChange ? 
                        <React.Fragment>
                            <form>
                                <input type='text' name='email' placeholder='New Email Address' onChange={this.handleChange} value={this.state.email}/>
                                <input type='password' name='password' placeholder='Password' onChange={this.handleChange} name='password' value={this.state.password} /><br />
                                <button type='submit' onClick={this.updateUserEmailDetails} >Update</button>
                            </form>
                        </React.Fragment>
                        :
                        <React.Fragment><span className='userDetailsUserTitle'>Email</span><span className='userDetailsUserTitleActual'>{localStorage.getItem("userEmail") === 'null' ? '' : localStorage.getItem("userEmail")}</span><div className='editIcon' onClick={() => {this.setState({emailChange: true})} }/></React.Fragment>
                    }
                </div>
                <div className='userDetailsUserInfoContainer'>
                    {
                        this.state.passwordChange ? 
                        <React.Fragment>
                            <form>
                                <input type='text' name='newpassword' placeholder='New Password' onChange={this.handleChange} value={this.state.newpassword}/>
                                <input type='password' name='password' placeholder='Password' onChange={this.handleChange} name='password' value={this.state.password} /><br />
                                <button type='submit' onClick={this.updateUserPasswordDetails} >Update</button>
                            </form>
                        </React.Fragment>
                        :
                        <React.Fragment><span className='userDetailsUserTitle'>Password</span><span className='userDetailsUserTitleActual'>******</span><div className='editIcon' onClick={() => {this.setState({passwordChange: true})} }/></React.Fragment>
                    }
                </div>
                <div className='userDetailsUserInfoContainer'>
                    {
                        this.state.addressChange ? 
                        <React.Fragment>
                            <form>
                                <input type='text' name='address' placeholder='New Address' onChange={this.handleChange} value={this.state.address}/>
                                <input type='password' name='password' placeholder='Password' onChange={this.handleChange} name='password' value={this.state.password} /><br />
                                <button type='submit' onClick={this.updateUserAddressDetails} >Update</button>
                            </form>
                        </React.Fragment>
                        :
                        <React.Fragment><span className='userDetailsUserTitle'>Address</span><span className='userDetailsUserTitleActual'>{localStorage.getItem("userAddress") === 'null'||'undefined' ? 'Add Now' : localStorage.getItem("userAddress")}</span><div className='editIcon' onClick={() => {this.setState({addressChange: true})} }/></React.Fragment>
                    }
                </div>
            </div>
        );
    }
}

export default UserDetails;




// <div className='userDetailsUserInfoContainer'>
//                     <span className='userDetailsUserTitle'>Phone</span><span className='userDetailsUserTitleActual'>{localStorage.getItem("userMobile") === 'null' ? 'Add Now' : localStorage.getItem("userMobile")}</span><div className='editIcon' />
//                 </div>
//                 <div className='userDetailsUserInfoContainer'>
//                     <span className='userDetailsUserTitle'>Email</span><span className='userDetailsUserTitleActual'>{localStorage.getItem("userEmail") === 'null' ? '' : localStorage.getItem("userEmail")}</span><div className='editIcon' />
//                 </div>
//                 <div className='userDetailsUserInfoContainer'>
//                     <span className='userDetailsUserTitle'>Password</span><span className='userDetailsUserTitleActual'>******</span><div className='editIcon' />
//                 </div>
//                 <div className='userDetailsUserInfoContainer'>
//                     <span className='userDetailsUserTitle'>Address</span><span className='userDetailsUserTitleActual'>{localStorage.getItem("userAddress") === 'null'||'undefined' ? 'Add Now' : localStorage.getItem("userAddress")}</span><div className='editIcon' />
//                 </div>