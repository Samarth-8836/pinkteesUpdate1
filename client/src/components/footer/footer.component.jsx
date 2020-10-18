import React from 'react';
import './footer.styles.css';

const Footer = () => {
    return(
        <div className='footerBar'>
            <div>
                <div className='w-layout-grid grid'>
                    <div>
                        <div className='text-block'>Customer Service</div>
                        <p className='paragraph'>Contact Us | Return Order | Cancel Order</p>
                        <div className='text-block'>Customer Service</div>
                        <p className='paragraph'>Contact Us | Return Order | Cancel Order</p>
                        <div className='text-block'>Customer Service</div>
                        <p className='paragraph'>Contact Us | Return Order | Cancel Order</p>
                    </div>
                    <div>
                        <div className='text-block-2'></div>
                        <div className='text-block-3'>Keep Up With Us</div>
                        <div className='div-block'>
                            <div className='text-block-5 insta'>&nbsp;</div>
                            <div className='text-block-5 facebook'>&nbsp;</div>
                            <div className='text-block-5 twitter'>&nbsp;</div>
                            <div className='text-block-5 whatsapp'>&nbsp;</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;