import React from 'react';
import './moreLikeThis.styles.css';

const MoreLikeThis = () => {
    return (
        <div className='moreLikeThisContainerParent'>
            More Like This
            <div className='moreLikeThisContainer'>
                <div className='moreLikeThisItem'>
                    <div className='moreLikeThisPicture'>
                        <img src={require('../../assets/Womens/womens_white_helf.png')} alt='white helf' width={'100%'}/>
                    </div>
                    <div className='moreLikeThisTitle'>
                        Title
                    </div>
                </div>
                <div className='moreLikeThisItem'>
                    <div className='moreLikeThisPicture'>
                        <img src={require('../../assets/Womens/womens_white_helf.png')} alt='white helf' width={'100%'}/>
                    </div>
                    <div className='moreLikeThisTitle'>
                        Title
                    </div>
                </div>
                <div className='moreLikeThisItem'>
                    <div className='moreLikeThisPicture'>
                        <img src={require('../../assets/Womens/womens_white_helf.png')} alt='white helf' width={'100%'}/>
                    </div>
                    <div className='moreLikeThisTitle'>
                        Title
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoreLikeThis;