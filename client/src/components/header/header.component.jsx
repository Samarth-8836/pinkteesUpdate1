import React, { Component } from 'react';
import './header.styles.css';
import fire from '../../firebase/firebase';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Cart from '../cart/cart.component';
import Wishlist from '../wishlist/wishlist.component';
import DisplayItem from '../Item/displayItem/displayItem.component';
import { firestore } from '../../firebase/firebase';

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isSwitchOn: false,
            isSwitchOnCart: false,
            isSwitchOnWishlist: false
        }
    }

    cartClickHandler = () => {
        this.setState({isSwitchOnCart: !(this.state.isSwitchOnCart)});
        window.history.back();
    }
    wishlistClickHandler = () => {
        this.setState({isSwitchOnWishlist: !(this.state.isSwitchOnWishlist)});
        window.history.back();
    }

    getUserName = () => {
        const userRef = firestore.doc(`users/${localStorage.getItem("uid")}`);
        const snapShot = userRef.get().then(function(doc) {
            if(doc.exists) {
                let name = doc.data().displayName;
                let mobile = doc.data().phone;
                let emailA = doc.data().email;
                let address = doc.data().address;
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

    render() {
        return (
            <div className='mainHeaderComponent'>{this.getUserName()}
            <Link to='/'><div className='logoComponent' onClick={() => this.setState({isSwitchOnWishlist: false, isSwitchOnCart: false, isSwitchOn: false}) }></div></Link>
                <ul className='mainHeaderItems'>
                    <Link to='/wishlist'><li className='mainHeaderMenuComponent wishlistHeader' onClick={() => this.setState({isSwitchOnWishlist: true, isSwitchOnCart: false}) }></li></Link>
                    
                    
                    <Link to='/cart'><li className='mainHeaderMenuComponent cartHeader' onClick={() => this.setState({isSwitchOnCart: true, isSwitchOnWishlist: false}) }></li></Link>
                    

                    <li className='mainHeaderMenuComponent menuHeader' onClick={() => this.setState({isSwitchOn: true}) }></li>
                        {   this.state.isSwitchOn ? 
                                <div className='backdrop'>
                                        <div className='backdropMenuClose' onClick={() => this.setState({isSwitchOn: false}) } ></div>
                                        <div className='menuContainer'>
                                            <div className='menuBackCover'> &nbsp;
                                                <div className='menuClose' onClick={() => this.setState({isSwitchOn: false}) } />
                                                <div className='menuTitle'>WELCOME<br />{localStorage.getItem("userName") === 'null' ? '' : localStorage.getItem("userName")}</div>
                                            </div>
                                                <div className='menuItems'>
                                                    <div className='menuItem' onClick={() => this.setState({isSwitchOnWishlist: false, isSwitchOnCart: false, isSwitchOn: false}) }><Link to='/' className='linkClass'>HOME</Link></div>
                                                    <div className='menuItem' onClick={() => this.setState({isSwitchOnCart: true, isSwitchOnWishlist: false, isSwitchOn: false}) }><Link to='/cart' className='linkClass'>CART</Link></div>
                                                    <div className='menuItem' onClick={() => this.setState({isSwitchOnCart: false, isSwitchOnWishlist: true, isSwitchOn: false}) }><Link to='/wishlist' className='linkClass'>WISHLIST</Link></div>
                                                    
                                                    {
                                                        this.props.user ? 
                                                        <div className='menuItem'><Link className='menuItem linkClass' to='/orders' onClick={() => this.setState({isSwitchOn: false, isSwitchOnWishlist: false, isSwitchOnCart: false})} >ORDERS</Link></div>
                                                        :
                                                        <div> </div>
                                                    }
                                                    
                                                    {
                                                        this.props.user ? 
                                                        <div className='menuItem'><Link className='menuItem linkClass' to='/user' onClick={() => this.setState({isSwitchOn: false, isSwitchOnWishlist: false, isSwitchOnCart: false})} >USER PROFILE</Link></div>
                                                        :
                                                        <div> </div>
                                                    }
                                                    
                                                    <div className='menuItem' onClick={() => this.setState({isSwitchOnWishlist: false, isSwitchOnCart: false, isSwitchOn: false}) }><Link to='/contact' className='linkClass'>CONTACT US</Link></div>
                                                    
                                                    {
                                                        this.props.user ? 
                                                            <Link className='menuItem linkClass' to='/' onClick={() => {fire.auth().signOut();this.setState({isSwitchOn: false});localStorage.setItem("userName", null)}}>SIGN OUT</Link>
                                                        :
                                                            <Link className='menuItem linkClass' to='/signin' onClick={() => this.setState({isSwitchOn: false, isSwitchOnWishlist: false, isSwitchOnCart: false})} >SIGN IN</Link>
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


const mapStateToProps = (state) => ({
    user: state.user.currentUser,
    currentUserLoggedIn: state.user.currentUserLoggedIn
});


export default connect(mapStateToProps)(Header); 