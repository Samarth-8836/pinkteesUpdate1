import React from 'react';
import './contactus.styles.css';

const ContactUs = () => {
    return(
        <React.Fragment>
            <div className={ 'mensClose' } onClick={() => window.history.back()} />
            <div className='cartTitle'>
                Contact Us
            </div>
            <div className='contactEncloser'>
                <br />Call us on +91 1234567890<br/>
                Maybe leave us a message <a href='https://wa.me/919824715304' className='noDecorationLinks'><div className='whatsappImage'/></a><br/>
                Or Mail us at pinktees@gmail.com <br /><br />

                Find us on PO Address: <br/>
                abc building,<br/>
                xyz street,<br/>
                Pune, Maharastra,<br/>
                India - XXXXXX
            </div>

        </React.Fragment>
    );
}

export default ContactUs;