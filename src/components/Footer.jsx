import React from "react";
import imgFacebook from '../assets/icon_facebook.svg';
import imgInstagram from '../assets/icon_instagram.svg';
import imgTwitter from '../assets/icon_twitter.svg';
import imgMail from '../assets/icon_mail.svg';
import imgTwitch from '../assets/icon_twitch.svg';

const Footer = () => {
  return (
    <div>
      <footer className="container">
        <div className="row pb-5 mt-5 justify-content-center">
          <div className="col-lg-3 col-sm-6">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div className="col-lg-3 col-sm-6">
            <a
              href="#our-service"
              style={{ textDecoration: "none", color: "black" }}
            >
              <b>Our services</b>
            </a>
            <a
              href="#why-us"
              style={{ textDecoration: "none", color: "black" }}
            >
              <b>Why Us</b>
            </a>
            <a
              href="#testimonial"
              style={{ textDecoration: "none", color: "black" }}
            >
              <b>Testimonial</b>
            </a>
            <a href="#faq" style={{ textDecoration: "none", color: "black" }}>
              <b>FAQ</b>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6">
            <p>Connect with us</p>
            <div className="d-flex gap-3">
              <img src={imgFacebook} alt="icon_facebook" />
              <img src={imgInstagram} alt="icon_instagram" />
              <img src={imgTwitter} alt="icon_twitter" />
              <img src={imgMail} alt="icon_mail" />
              <img src={imgTwitch} alt="icon_twitch" />
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <p>Copyright Binar 2022</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
