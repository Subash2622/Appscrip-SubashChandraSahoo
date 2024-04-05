import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import gpayIcon from '../../assets/gpay.png';
import masterCardIcon from '../../assets/mastercard.png';
import payPalIcon from '../../assets/paypal.png';
import amexIcon from '../../assets/amex.png';
import iPayIcon from '../../assets/Ipay.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className='top-footer'>
        <section className="left-section">
          <h4>Be the first to know</h4>
          <p className="small-text">Sign up for details</p>
          <div className="subscribe">
            <input type="email" placeholder="Enter your email" className="email-input" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </section>
        <section className="right-section">
          <h4>Contact us</h4>
          <p>Number: +91 9938612622</p>
          <p>Email: something@example.com</p>
        </section>
      </div>
      <section className='sub-footer'>
        <div className='metta-muse'>
          <h1>metta muse</h1>
          <p>About Us</p>
          <p>Stores</p>
          <p>Contact Us</p>
          <p>EU Compliances</p>
        </div>
        <div className='quick-links'>
          <h1>QUICK LINKS</h1>
          <p>Order and Shopping</p> 
          <p>Join/Login as Seller</p>
          <p>Payment & Pricing</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div className='follow-us'>
          <h1>FOLLOW US</h1>
          <div className='social-icon'>
            <InstagramIcon/>
          </div>
          <div className='social-icon'>
            <LinkedInIcon/>
          </div>
        </div>
        <div className='payment-icon'>
          <img src={gpayIcon} alt='GooglePay-Icon'/>
          <img src={masterCardIcon} alt='Master-Card-Icon'/>
          <img src={payPalIcon} alt='payPal-Icon'/>
          <img src={amexIcon} alt='amex-icon'/>
          <img src={iPayIcon} alt="ipay-icon" />
        </div>
      </section>
      <section className='bottom-text'>
        <p>Copyright@2024. All rights reserved</p>
      </section>
    </footer>
  );
};

export default Footer;
