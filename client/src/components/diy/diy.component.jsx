import React, { Component } from 'react';
import { useRef } from "react";
import useDraggable from "./useDraggable";

import "./diy.styles.css";

class Diy extends Component {

    constructor(){
        super();

        this.state = {
            image0 : null   
        }
    }

    
    imageHandeler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2) {
                this.setState({image0: reader.result});
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    DraggableCard = ({ children }) => {
        const cardRef = useRef(null);
        useDraggable(cardRef);
      
        return (
          <div className="card" ref={cardRef}>
            {children}
          </div>
        );
    };
      

    render(){
        return(
            <div >
                <input type='file' className='image-upload' accept='image/*' onChange={this.imageHandeler} />
                <div className='background-plain-tshirt' style={{backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/pinktees-a082b.appspot.com/o/WonderWomen.png?alt=media&token=ff7d9ab1-355b-433b-a0c7-566a874c08ac")', height: '500px', backgroundSize: 'cover'}}>
                    <this.DraggableCard><img src={this.state.image0} /></this.DraggableCard>
                </div>
            </div>
        );
    }
}

export default Diy