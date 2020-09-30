import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import { firestore } from '../../firebase/firebase';

const StripeCheckoutButton = ({ price, cartItems }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HR1pjJRC5XKHkMyI4McPnc77vJIXxY0d1ZDXvzjIfoNUz5cEQpVXdNat5T0zNdOTTRlHPy5oG3miMr3n3gTOIDJ00AsdC8ECr';

    const onToken = token => {
        console.log(token)
        axios({
        url: 'payment',
        method: 'post', 
        data: {
            amount: priceForStripe,
            token: token,
            cartItems: cartItems
        }
        })
        .then(response => {
            


            const userRef = firestore.doc(`users/${localStorage.getItem("uid")}`);
              const snapShot = userRef.get().then((doc) => {
                if(doc.exists) {
                      let changedAt = new Date();
                      let name = doc.data().displayName;
                      let pass = doc.data().password;
                      let mobile = doc.data().phone;
                      let emailA = doc.data().email;
                      let orders = doc.data().AAAtotalorders + 1;
                      let someOrder = [];
                      
                        let ZZZorder = `AAAnewOrder${orders}`;
                        console.log(orders);
                        if(orders === 1)
                        {
                          console.log('First order');
                          someOrder = cartItems;  
                        } else {
                          console.log('second order');
                          let buf = orders - 1; 
                          console.log(buf);
                          console.log(doc.data()[`AAAnewOrder${buf}`]);
                          someOrder = doc.data()[`AAAnewOrder${buf}`].concat(cartItems);
                        }
                        console.log(someOrder);
                        const snapShot = userRef.set({
                            displayName: name,
                            email: emailA,
                            phone: mobile,
                            password: pass,
                            changedAt: changedAt,
                            AAAtotalorders: orders,
                            [ZZZorder]: someOrder
                        }).then(() => {
                        }).catch(() => {
                        });
                      
                }
              });

              alert('succesful payment');
            






        })
        .catch(error => {
            console.log('Payment Error: ', JSON.parse(error));
            alert(
            'There was an issue with your payment! Please make sure you provided correct credit card information.'
            );
        });
    };

  return (
    <div>
      <StripeCheckout
        label='Pay Now'
        name='PinkTees'
        billingAddress
        shippingAddress
        description={`Your total is Rs.${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        currency='INR'
        stripeKey={publishableKey}
      >
          <button className='cartCheckout' onClick={ () => alert('Do not press back button for smooth experience') }>CHECKOUT</button>
      </StripeCheckout>

    </div>
  );
}

export default StripeCheckoutButton;