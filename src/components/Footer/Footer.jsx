import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="top-footer">
        <section className="left-section">
          <h1>Be the first to know</h1>
          <p>Sign up for updates from metta muse</p>
          <div className="subscribe">
            <input
              type="email"
              placeholder="Enter your email"
              className="email-input"
            />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </section>
        <section className="right-section">
        <div>
          <h1>Contact us</h1>
          <p>Number: +123456789</p>
          <p>Email: example@example.com</p>
        </div>
        <div>
          <h1>currency</h1>
          <span><Image src={"/assets/usd.png"} alt="USA flag icon" height={30} width={30}/><h5>USD</h5></span>
          <p>transaction will be completed in Euros and a currency reference is available on hover.</p>
        </div>
        </section>
      </div>

      {/* sub-footer */}
      <section className="sub-footer">
        <div className="metta-muse">
          <h1>METTA MUSE</h1>
          <p>About Us</p>
          <p>Stores</p>
          <p>Contact Us</p>
          <p>EU Compliances</p>
        </div>
        <div className="metta-muse">
          <h1>QUICK LINKS</h1>
          <p>Ordr and Shopping</p>
          <p>Join/Login as Seller</p>
          <p>Payment & Pricing</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <section>
          <div className="follow-us">
            <h1>FOLLOW US</h1>
            <div className="social-icon">
              <InstagramIcon
                style={{
                  border: "2px solid white",
                  padding: "4px",
                  height: "35px",
                  width: "35px",
                  borderRadius: "50px",
                }}
              />
              <LinkedInIcon
                style={{
                  border: "2px solid white",
                  padding: "4px",
                  height: "35px",
                  width: "35px",
                  borderRadius: "50px",
                }}
              />
            </div>
          </div>
          <div className="payment-image-container">
            <h1>Payment method ACCEPTS</h1>
            <div className="payment-icon">
  <Image
    src="/assets/gpay.png"
    alt="Google Pay Icon"
    width={60}
    height={30}
    className="payment-image"
  />
  <Image
    src="/assets/mastercard.png"
    alt="Master Card Icon"
    width={60}
    height={40}
    className="payment-image"
  />
  <Image
    src="/assets/paypal.png"
    alt="PayPal Icon"
    width={70}
    height={60}
    className="payment-image"
  />
  <Image
    src="/assets/amex.png"
    alt="Amex Icon"
    width={60}
    height={40}
    className="payment-image"
  />
  <Image
    src="/assets/Ipay.png"
    alt="iPay Icon"
    width={60}
    height={20}
    className="payment-image"
  />
</div>

          </div>
        </section>
      </section>
      <section className="bottom-text">
        <p>Copyright@2024. All rights reserved</p>
      </section>
    </footer>
  );
};

export default Footer;