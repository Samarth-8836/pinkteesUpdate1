import React, { Component } from 'react';
import fire, { createUserProfileDocument } from './firebase/firebase';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';


import { setCurrentUser } from './redux/user/user.actions';


import Header from './components/header/header.component';
import MainCatagory from './components/main-catagory/main-catagory.component';
import SellingHot from './components/selling-hot/selling-hot.component';
import Banner from './components/banner/banner.component';
import CustomBanner from './components/custom-banner/customBanner.component';
import SigninSignup from './components/signin-signup/signinSignup.component';
import ProductDisplay from './components/product-display/producctDisplay.component';
import PriceItemDisplay from './components/price/priceItemDisplay.component';
import ColorSize from './components/color-size/colorSize.component';
import Description from './components/description/description.component';
import CustomerReviews from './components/customer-reviews/customerReviews.component';
import MoreLikeThis from './components/more-like-this/moreLikeThis.component';
import UserDetails from './components/user-details/userDetails.component';
import Cart from './components/cart/cart.component';
import Wishlist from './components/wishlist/wishlist.component';





class App extends Component {

  ToBeAdded = {
    MainMenu: [
      <Banner />,
      <MainCatagory />,
      <CustomBanner />,
      <SellingHot />
    ],
    ProductPage: [
      <ProductDisplay />,
      <PriceItemDisplay />,
      <ColorSize />,
      <Description />,
      <CustomerReviews />,
      <MoreLikeThis />
    ],
    SignInSignUp: [
      <SigninSignup />
    ],
    UserDetailsPage: [
      <UserDetails />
    ],
    CartPage: [
      <Cart />
    ],
    WishlistPage: [
      <Wishlist />
    ]
  };

  

  componentWillMount() {
    this.authListener();
  }

  authListener = () => {
    fire.auth().onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);

        (await userRef).onSnapshot(snapshot => {
          this.props.setCurrentUser({
            user: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      } else {
        this.props.setCurrentUser(userAuth);
      }
      localStorage.setItem("user",userAuth);
    })
  }

  home = () => {
    return(
      <div>
        <Banner />
        <MainCatagory />
        <CustomBanner />
        <SellingHot />
      </div>
    );
  }

  render() {
    return (
      <BrowserRouter>
      <div>
        <Header />
        <Route path='/' component={this.home} exact />
        <SigninSignup />
      </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);




