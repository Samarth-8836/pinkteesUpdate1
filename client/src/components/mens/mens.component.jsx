import React, { Component } from 'react';
import './mens.styles.css';
import productListMen from '../../productlist.js';
import { Redirect } from 'react-router';

import Headroom from 'react-headroom';


class mens extends Component {

    constructor() {
        super();

        this.state = {
            clicked : false,
            whichClicked : "some",
            searchField : '',
            filteredList : []
        }
    }

    clicked = (men) => {
        this.setState({clicked: true});
        this.setState({whichClicked: men});
    }

    componentDidMount() {
        if(window.location.href.includes('mens')){
            var prevScrollpos = window.pageYOffset;
            window.onscroll = function() {
                var currentScrollPos = window.pageYOffset;
                if ((prevScrollpos > currentScrollPos) || (currentScrollPos == 0)) {
                    document.getElementById("searchbar").style.bottom = "5px";
                } else {
                    document.getElementById("searchbar").style.bottom = "-50px";
                }
                prevScrollpos = currentScrollPos;
            } 
        }
    }

    

    

    render() {
        if(this.state.searchField !== '') {
            this.state.filteredList = productListMen.filter((men) => {
                if (men.title.toLowerCase().includes(this.state.searchField.toLowerCase())) {
                    return true;
                }
            });
        } else {
            this.state.filteredList = productListMen.map((x) => x);
        }
        

        return(
            <div>
                <div className={ this.state.clicked ? 'displayItemContainerFalse' : 'mensClose' } onClick={() => window.history.back()} />

                <div className='mensContainer'>
                
                    <div className={ this.state.clicked ? 'displayItemContainerFalse' : 'mensTitle' }>MENS</div>

                    <div className={ this.state.clicked ? 'displayItemContainerFalse' : 'displayItemContainer' }>
                    
                        
                        {
                            this.state.filteredList[0] ? 

                                this.state.filteredList.map( (men) => {
                                    return(
                                        <div>
                                            {
                                                this.state.clicked ? 
                                                
                                                    <div />

                                                :
                                                    <div className='mensDisplay' onClick={() => {this.clicked(men)}}>
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
                            :
                            <div className='cartTitle' style={{paddingTop: '100px'}}>No product found. Try searching with fewer keywords.</div>
                        }

                    </div>
                    
                    {
                        this.state.clicked ? 
                            <Redirect to={`/mens/${this.state.whichClicked.id}`} />
                        :
                            <div />
                    }
                
                </div>
            
                <div className='searchBox'>
                    <input type='text' placeholder='Search' id='searchbar' className='searchBoxSearch' onChange={e => {this.setState({ searchField : e.target.value})}}/>
                </div>
                
        
            </div>
        );
    }
}

export default mens;