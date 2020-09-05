import React, { Component } from 'react';
import './header.styles.css';
import fire from '../../firebase/firebase';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isSwitchOn: false
        }
    }

    render() {
        return (
            <div className='mainHeaderComponent'>
                <div className='logoComponent'></div>
                <ul className='mainHeaderItems'>
                    <li className='mainHeaderMenuComponent wishlistHeader'></li>
                    <li className='mainHeaderMenuComponent cartHeader'></li>
                    <li className='mainHeaderMenuComponent menuHeader' onClick={() => this.setState({isSwitchOn: true}) }></li>
                        {   this.state.isSwitchOn ? 
                                <div className='backdrop'>
                                    <div className='menuContainer'>
                                        <div className='menuClose' onClick={() => this.setState({isSwitchOn: false}) } />
                                        <div className='menuTitle'>WELCOME<br />USERNAME</div>
                                        <div className='menuItems'>
                                            <div className='menuItem'>HOME</div>
                                            <div className='menuItem'>CART</div>
                                            <div className='menuItem'>WISHLIST</div>
                                            <div className='menuItem'>ORDERS</div>
                                            <div className='menuItem'>USER PROFILE</div>
                                            <div className='menuItem'>CONTACT US</div>
                                            {
                                                this.props.user ? 
                                                    <Link className='menuItem' to='/' onClick={() => {fire.auth().signOut();this.setState({isSwitchOn: false})}}>SIGN OUT</Link>
                                                :
                                                    <Link className='menuItem' to='/signin' onClick={() => this.setState({isSwitchOn: false})} >SIGN IN</Link>
                                            }
                                        </div>
                                    </div>
                                </div>
                            : 
                                <div></div>
                        }
                    
                </ul>
            </div>
        );
    }
};

export default Header; 