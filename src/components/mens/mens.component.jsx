import React, { Component } from 'react';
import './mens.styles.css';
import productListMen from '../../productlist.js';
import ProductPage from '../../Product-Page/product-page.component';

class mens extends Component {

    constructor() {
        super();

        this.state = {
            clicked : false,
            whichClicked : "some"
        }
    }

    clicked = (men) => {
        this.setState({clicked: true});
        this.setState({whichClicked: men});
    }

    

    render() {
        return(
            <div>
                <div className={ this.state.clicked ? 'displayItemContainerFalse' : 'mensClose' } onClick={() => window.history.back()} />

                <div className='mensContainer'>
                
                    <div className={ this.state.clicked ? 'displayItemContainerFalse' : 'mensTitle' }>MENS</div>

                    <div className={ this.state.clicked ? 'displayItemContainerFalse' : 'displayItemContainer' }>
                    
                        
                        {
                            productListMen.map( (men) => {
                                return(
                                    <div>
                                        {
                                            this.state.clicked ? 
                                            
                                                <div />

                                            :
                            
                                                <div className='mensDisplay' onClick={() => this.clicked(men)}>
                                                    <div className='mensDisplayImage'>
                                                        <img src={men['imgUrl']} alt='Mens Catagory' className='mensDisplayImage' />
                                                    </div>
                                                    <div className='mensDisplayName'>
                                                        {men['title']}
                                                    </div>
                                                </div>
                                        }
                                        
                                    </div>
                                );
                            })
                        }

                    </div>
                    
                    {
                        this.state.clicked ? 
                            <ProductPage 
                                price={this.state.whichClicked['price']} 
                                title={this.state.whichClicked['title']}
                                description={this.state.whichClicked['description']}
                                images={this.state.whichClicked['imgUrl']}
                            />
                        :
                            <div />
                    }
                
                </div>
            </div>
        );
    }
}

export default mens;