import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-white-50 footer mt-5 pt-5 wow fadeIn small-font-size" data-wow-delay="0.1s">
      <div className="container-fluid py-5 px-4">
        <div className="row g-5">

          {/* Brand and Socials */}
          <div className="col-lg-3 col-md-6">
            <Link to="/" className="navbar-brand ms-4 ms-lg-0">
              <img
                src="/img/logos/afaw-logo-white.png"
                alt="afaw-logo-africa"
                className="img-fluid mb-2"
                style={{ width: "50px", height: "auto" }}
              />
            </Link>
            <p>
              We empower rural communities in Africa with solar-powered water
              infrastructure for sustainable development and dignity.
            </p>
            <div className="d-flex pt-2">

              <a className="btn btn-square me-2" href="https://www.facebook.com/share/1Go7XNJriP/?mibextid=wwXIfr"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-square me-2" href="https://x.com/africaaccesswtr"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-square me-2" href="https://www.linkedin.com/company/africa-access-water/"><i className="fab fa-linkedin-in"></i></a>
              <a className="btn btn-square me-2" href="https://www.instagram.com/africa_access_water"><i className="fab fa-instagram"></i></a>
              <a className="btn btn-square me-2" href="https://youtube.com/@africaaccesswater"><i className="fab fa-youtube"></i></a>
              <a className="btn btn-square me-0" href="https://www.tiktok.com/@africaaccesswater">
                  <img src="/img/tik-tok.png" alt="TikTok" width="14" height="14" style={{ verticalAlign: "middle" }} />
              </a>              
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Contact Us</h5>
            <p className="no-bottom-margin">Registration: 120190001569</p>
            <p className="no-bottom-margin"><i className="fa fa-map-marker-alt me-2"></i>Lot 5676/M/6, Lusaka West, Lusaka, Zambia</p>
            <p className="no-bottom-margin"><i className="fa fa-phone-alt me-1"></i>+260 211 231 174 / +260 976 944 695</p>
            <p className="no-bottom-margin"><i className="fa fa-envelope me-2"></i>info@africaaccesswater.org</p>
          </div>

          {/* US Nonprofit Details */}
          <div className="col-lg-4 col-md-6">
            <h5 className="text-light mb-4">US Nonprofit Details</h5>
            <p className="no-bottom-margin">Registered 501(C)(3) Nonprofit, TAX ID 33-3264565</p>
            <p className="no-bottom-margin">440 WYONA STREET, APT B. BROOKLYN, NY, ZIP CODE 11207, USA</p>
            <p className="no-bottom-margin">+1 (917) 697-3672 / +1 (347) 536-7359</p>
            <p className="no-bottom-margin">
              <a href="/docs/donation_policy.pdf" className="text-white-50 mb-4" target="_blank" rel="noopener noreferrer">Donation Policy</a><br/>
            </p>
            <p>
              <a href="/docs/refund_cancellation_policy.pdf" className="text-white-50" target="_blank" rel="noopener noreferrer">Refund Policy</a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="text-light mb-4">Quick Links</h5>
            <Link className="btn btn-link" to="/about">About Us</Link>
            <Link className="btn btn-link" to="/contact">Contact Us</Link>
            <Link className="btn btn-link" to="/services">What We Do</Link>
            <Link className="btn btn-link" to="/donate">Donate</Link>
            <Link className="btn btn-link" to="/privacy">Privacy Policy</Link>
          </div>

          
        </div>
      </div>

      {/* Copyright */}
      <div className="container-fluid copyright">
        <div className="container">
          <div className="row">
            <div className=" text-center mb-3">
              &copy; Copyright | Africa Access Water, All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
