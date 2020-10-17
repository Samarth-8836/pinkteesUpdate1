import React from 'react';
import { firestore } from '../../firebase/firebase';

const RazorPayCheckoutButton = (props) => {

    const displayRazorpay = () => {

        if(document.domain === 'localhost') {
            var key = 'rzp_test_WM7H5Thu1bqvr4';
        } else {
            var key = 'Not Provided';
        }

        var amount = props.price * 100;
        amount = amount.toString();

        const data = fetch('http://localhost:3000/razorpay', { method: 'POST', body: {amount: amount} }).then( (t) => t.json());

        const success = fetch('http://localhost:3000/verification', { method: 'POST' }).then( (t) => {
            if(t.json() === 'ok') {
                alert('Payment success');
            } else {
                alert('Payment Failure');
            }
        });

        console.log(success);

        var options = {
            "key": key, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "PINK TEES",
            "description": "Test Transaction",
            "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": function (response){
                alert('Payment request Has been made.');
                alert(response.razorpay_payment_id);

                ///updating orders
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
                                someOrder = props.cartItems;  
                                } else {
                                console.log('second order');
                                let buf = orders - 1; 
                                console.log(buf);
                                console.log(doc.data()[`AAAnewOrder${buf}`]);
                                someOrder = doc.data()[`AAAnewOrder${buf}`].concat(props.cartItems);
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

                /// updating orders over
            },
            "prefill": {
                "name": `${localStorage.getItem("userName")}`,
                "email": `${localStorage.getItem("userEmail")}`,
                "contact": `${localStorage.getItem("userMobile")}`
            }
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();

    }

    const loadScript = (src) => {

        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = src;
            document.body.appendChild(script);
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
        })


    }

    const res = loadScript('https://checkout.razorpay.com/v1/checkout.js');
    if(!res) {
        alert('Razorpay SDK failed to load. Are you online?');
        return;
    }

    return(
        <div><button className='cartCheckout' onClick={displayRazorpay}> Checkout with Rs.{props.price} </button></div>
    );
}

export default RazorPayCheckoutButton;


// 8fCsJqAU4A734yRPqFXUTdLA 