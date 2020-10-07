import React, { Component } from 'react';
import { useRef } from "react";
import useDraggable from "./useDraggable";
import domtoimage from 'dom-to-image';
import axios from 'axios';
import background from '../../assets/Mens/mens_blue.png';



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

    retrysaveImage = () => {
        this.saveImage();
    }

    initia = () => {
        if(localStorage.getItem('user') === 'null') {
            alert('Sign in first to access this page');
            window.location= '/signin';
        }
    }
      
    saveImage = () => {
        var node = document.getElementById('newDivId');

        domtoimage.toPng(node)
        .then(function (dataUrl) {
            var img = new Image();
            img.src = dataUrl;

            function getBase64Image(img) {
                var canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
            
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);
            
                var dataURL = canvas.toDataURL("image/png");
            
                return dataURL.replace(/^data:image\/(png|jpg|jpeg|JPEG|JPG|PNG);base64,/, "");
            }

            var imgData = getBase64Image(img);
            console.log(imgData);
            if(imgData.length < 100) {
                console.log('retrying now');
                throw('Error encoding the image. Try again');
            }


            axios({
                url: 'imageUpload',
                method: 'post', 
                data: {
                    imageUrl: "data:image/png;base64," + imgData
                }
            }).then(response => {
                alert('succesful');
    
            })
            .catch(error => {
                alert(
                'There was an issue. Try again'
                );
            });

        })
        .catch(function (error) {
            alert('Oops! ' + error);
            console.error('Oops!', error);
        });
    };

    render(){
        return(
            <div>
                {this.initia()}
                <input type='file' className='image-upload' accept='image/*' onChange={this.imageHandeler} />
                <div id='newDivId'>
                    <div className='background-plain-tshirt' style={{backgroundImage: `url(${background})`, height: '500px', backgroundSize: 'cover'}}>
                        <this.DraggableCard><img src={this.state.image0} alt='your logo'/></this.DraggableCard>
                    </div>   
                </div>
                <button onClick={this.saveImage} className='saveButton'>Save Now</button>
            </div>
        );
    }
}

export default Diy;