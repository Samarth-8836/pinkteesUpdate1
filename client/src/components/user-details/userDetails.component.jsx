import React from 'react';
import './userDetails.styles.css';

const UserDetails = () => {
    return (
        <div className='userDetailsContainer'>
            <div className='userDetailsTitle'>
                USERNAME
            </div>
            <div className='userDetailsUserInfoContainer'>
                <span className='userDetailsUserTitle'>Name</span><span className='userDetailsUserTitleActual'>User Name</span><div className='editIcon' />
            </div>
            <div className='userDetailsUserInfoContainer'>
                <span className='userDetailsUserTitle'>Phone</span><span className='userDetailsUserTitleActual'>1234567890</span><div className='editIcon' />
            </div>
            <div className='userDetailsUserInfoContainer'>
                <span className='userDetailsUserTitle'>Email</span><span className='userDetailsUserTitleActual'>username01@gmail.com</span><div className='editIcon' />
            </div>
            <div className='userDetailsUserInfoContainer'>
                <span className='userDetailsUserTitle'>Password</span><span className='userDetailsUserTitleActual'>********</span><div className='editIcon' />
            </div>
            <div className='userDetailsUserInfoContainer'>
                <span className='userDetailsUserTitle'>Address</span><span className='userDetailsUserTitleActual'>San Diego, CA, USA</span><div className='editIcon' />
            </div>
            <div className='userDetailsUserInfoContainer'>
                <span className='userDetailsUserTitle'>Saved Card</span><span className='userDetailsUserTitleActual'>Mastro Card, 3**</span><div className='editIcon' />
            </div>
        </div>
    );
}

export default UserDetails;