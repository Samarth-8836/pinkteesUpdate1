import React, { Component } from 'react';

import { firestore } from '../../firebase/firebase';

import OrderItem from './orderItem/orderItem.component';

class Orders extends Component {

    constructor() {
        super();

        this.state = {
            finalOrderArr: undefined
        }
    }

    initi = () => {
        const userRef = firestore.doc(`users/${localStorage.getItem("uid")}`);
        const snapShot = userRef.get().then((doc) => {
        if(doc.exists) {
            let orders = doc.data().AAAtotalorders;
            this.setState({
                finalOrderArr : doc.data()[`AAAnewOrder${orders}`]
            }); 
        }
        });

    }
    componentDidMount() {
        this.initi();
    }

    render() {
        return(
            <React.Fragment>
            <div className='cartContainer'>
            <div className='cartClose' onClick={() => window.history.back()} />
                <div className='cartTitle'>Orders</div>
                {
                    this.state.finalOrderArr === undefined ? <div className='cartTitle' style={{paddingTop: '100px'}}>No Purchases Made.<br /> Go Pick Something.</div> :
                    this.state.finalOrderArr.map( order => <OrderItem key={order.id} order={order} /> )
                }
            </div>
            </React.Fragment>
        );
    }
}

export default Orders;
