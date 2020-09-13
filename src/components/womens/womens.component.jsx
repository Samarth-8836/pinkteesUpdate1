import React, { Component } from 'react';
import productListWomen from '../../productlistWomen.js';
import { Redirect } from 'react-router';

class Womens extends Component {

    constructor() {
        super();

        this.state = {
            clicked : false,
            whichClicked : "some"
        }
    }

    clicked = (women) => {
        this.setState({clicked: true});
        this.setState({whichClicked: women});
    }

    

    render() {
        return(
            <div>
                <div className={ this.state.clicked ? 'displayItemContainerFalse' : 'mensClose' } onClick={() => window.history.back()} />

                <div className='mensContainer'>
                
                    <div className={ this.state.clicked ? 'displayItemContainerFalse' : 'mensTitle' }>WOMENS</div>

                    <div className={ this.state.clicked ? 'displayItemContainerFalse' : 'displayItemContainer' }>
                    
                        
                        {
                            productListWomen.map( (women) => {
                                return(
                                    <div>
                                        {
                                            this.state.clicked ? 
                                            
                                                <div />

                                            :
                                                <div className='mensDisplay' onClick={() => this.clicked(women)}>
                                                    <div className='mensDisplayImage'>
                                                        <img src={women['imgUrl']} alt='Mens Catagory' className='mensDisplayImage' />
                                                    </div>
                                                    <div className='mensDisplayName'>
                                                        {women['title']}
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
                            <Redirect to={`/womens/${this.state.whichClicked.id}`} />
                        :
                            <div />
                    }
                
                </div>
            </div>
        );
    }
}

export default Womens;