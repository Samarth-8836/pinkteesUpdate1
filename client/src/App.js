import React, { Component } from 'react';
import fire, { createUserProfileDocument } from './firebase/firebase';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import history from './history';
import { connect } from 'react-redux';


import { setCurrentUser } from './redux/user/user.actions';


import Header from './components/header/header.component';
import MainCatagory from './components/main-catagory/main-catagory.component';
import SellingHot from './components/selling-hot/selling-hot.component';
import Banner from './components/banner/banner.component';
import CustomBanner from './components/custom-banner/customBanner.component';
import SigninSignup from './components/signin-signup/signinSignup.component';
import ProductPage from './Product-Page/product-page.component';
import UserDetails from './components/user-details/userDetails.component';
import Cart from './components/cart/cart.component';
import Wishlist from './components/wishlist/wishlist.component';
import Mens from './components/mens/mens.component';
import Womens from './components/womens/womens.component';
import Checkout from './components/checkout/checkout.component';
import productListMen from './productlist';
import productListWomen from './productlistWomen';



class App extends Component {

  ToBeAdded = {
    MainMenu: [
      <Banner />,
      <MainCatagory />,
      <CustomBanner />,
      <SellingHot />
    ],
    ProductPage: [
      <ProductPage />
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



  mens = () => {
    return(
      <Mens />
    );
  }

  womens = () => {
    return(
      <Womens />
    );
  }

  ProductPage = () => {
    return(
      <ProductPage />
    );
  }

  CheckoutName = () => {
    return(
      <Checkout />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Router history={history}>
          <div>
            <Header />
            <Switch>
            <Route path='/' component={this.home} exact />
            <Route path='/mens' component={this.mens} exact/>
            <Route path='/womens' component={this.womens} exact/>

            {
              productListMen.map((men) => (
                <Route path={`/mens/${men.id}`} component={this.ProductPage} exact />
              ))
            }
            
            {
              productListWomen.map((women) => (
                <Route path={`/womens/${women.id}`} component={this.ProductPage} exact />
              ))
            }
            

            </Switch>
            <SigninSignup />
          </div>
        </Router>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);


