import React, { Component } from 'react';
import './header.styles.css';
import fire from '../../firebase/firebase';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Cart from '../cart/cart.component';
import Wishlist from '../wishlist/wishlist.component';

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

    render() {
        return (
            <div className='mainHeaderComponent'>
                <div className='logoComponent'></div>
                <ul className='mainHeaderItems'>
                    <Link to='/wishlist'><li className='mainHeaderMenuComponent wishlistHeader' onClick={() => this.setState({isSwitchOnWishlist: true, isSwitchOnCart: false}) }></li></Link>
                    {   this.state.isSwitchOnWishlist ? 
                        <div>
                            <div className='cartClose' onClick={this.wishlistClickHandler} />
                            <div className={`wishlistContainer`}>
                                <Wishlist />
                            </div>
                        </div>
                    : 
                        <div></div>
                    }
                    
                    <Link to='/cart'><li className='mainHeaderMenuComponent cartHeader' onClick={() => this.setState({isSwitchOnCart: true, isSwitchOnWishlist: false}) }></li></Link>
                    {   this.state.isSwitchOnCart ? 
                        <div>
                            <div className='cartClose' onClick={this.cartClickHandler} />
                            <div className={`cartContainer`}>
                                <Cart />
                            </div>
                        </div>
                    : 
                        <div></div>
                    }

                    <li className='mainHeaderMenuComponent menuHeader' onClick={() => this.setState({isSwitchOn: true}) }></li>
                        {   this.state.isSwitchOn ? 
                                <div className='backdrop'>
                                        <div className='menuContainer'>
                                            <div className='menuBackCover'> &nbsp;
                                                <div className='menuClose' onClick={() => this.setState({isSwitchOn: false}) } />
                                                <div className='menuTitle'>WELCOME<br />USERNAME</div>
                                            </div>
                                                <div className='menuItems'>
                                                    <div className='menuItem'>HOME</div>
                                                    <div className='menuItem'>CART</div>
                                                    <div className='menuItem'>WISHLIST</div>
                                                    <div className='menuItem'>ORDERS</div>
                                                    <div className='menuItem'>USER PROFILE</div>
                                                    <div className='menuItem'>CONTACT US</div>
                                                    {
                                                        this.props.user ? 
                                                            <Link className='menuItem linkClass' to='/' onClick={() => {fire.auth().signOut();this.setState({isSwitchOn: false})}}>SIGN OUT</Link>
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
    user: state.user.currentUser
});


export default connect(mapStateToProps)(Header); 