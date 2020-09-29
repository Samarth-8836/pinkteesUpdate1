import React, { Component } from 'react';
import fire, { createUserProfileDocument } from './firebase/firebase';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import history from './history';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


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
import ContactUs from './components/contact-us/contactus.component';


import Diy from './components/diy/diy.component';

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
      localStorage.setItem("user", userAuth);
      localStorage.setItem('userName', 'null');
      localStorage.setItem('userMobile', 'null');
      localStorage.setItem('userEmail', 'null');
      localStorage.setItem('userAddress', 'null');
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

  diy = () => {
    return(
      <div>
        <Diy />
      </div>
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
            <Route path='/diy' component={this.diy} exact/>
            <Route path='/contact' component={ContactUs} exact />

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
            <Route path='/cart' component={Cart} exact />
            <Route path='/wishlist' component={Wishlist} exact />
            <Route path='/user' component={UserDetails} exact />

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



