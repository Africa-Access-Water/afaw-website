import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="container-fluid bg-dark text-white-50 footer pt-5 wow fadeIn small-font-size"
      data-wow-delay="0.1s"
    >
      <div className="container-fluid py-5 px-4">

        {/* --- Impact Story + CTA --- */}
        <div className="text-center border-bottom border-secondary pb-5 mb-5">
          <h2 className="text-light fw-bold mb-3">
            Together, We Can Bring Clean Water to Every Village in Africa 🌍
          </h2>
          <p
            className="lead text-white-50 mx-auto"
            style={{ maxWidth: "750px" }}
          >
            Across Africa, <strong>400 million people</strong> still lack access to
            clean, safe water. Every solar-powered system we install brings health,
            opportunity, and hope — but millions more still wait. Join us to change
            that.
          </p>
          <Link
            to="/donate"
            className="btn btn-primary text-dark px-4 py-2 rounded-pill fw-bold mt-3"
          >
            Donate Now
          </Link>
        </div>

        <div className="row g-5">
          {/* Brand and Socials */}
          <div className="col-lg-3 col-md-6">
            <Link to="/" className="navbar-brand ms-4 ms-lg-0">
              <img
                src="/img/logos/Updated/AFRICA_ACCESS_WATER_STACKED.png"
                alt="afaw-logo-africa"
                className="img-fluid mb-3"
                style={{ width: "55px", height: "auto" }}
              />
              
            </Link>
            <p>
              Empowering rural Africa with solar-powered water systems
              restoring dignity, improving health, and unlocking potential for generations.
            </p>
            

              <img
                src="/img/ngo.jpg"
                alt="NGOSource-Verified-Logo"
                className="img-fluid mb-3"
                style={{ width: "250px", height: "auto" }}
              />

            <div className="d-flex pt-2">
              <a className="btn btn-square me-2" href="https://www.facebook.com/share/1Go7XNJriP/?mibextid=wwXIfr"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-square me-2" href="https://x.com/africaaccesswtr"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-square me-2" href="https://www.linkedin.com/company/africa-access-water/"><i className="fab fa-linkedin-in"></i></a>
              <a className="btn btn-square me-2" href="https://www.instagram.com/africa_access_water"><i className="fab fa-instagram"></i></a>
              <a className="btn btn-square me-2" href="https://youtube.com/@africaaccesswater"><i className="fab fa-youtube"></i></a>
              <a className="btn btn-square me-0" href="https://www.tiktok.com/@africaaccesswater">
                <img
                  src="/img/tik-tok.png"
                  alt="TikTok"
                  width="14"
                  height="14"
                  style={{ verticalAlign: "middle" }}
                />
              </a>  
            </div>
           
          </div>

          {/* Impact Snapshot */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Why Your Support Matters</h5>
            <ul className="list-unstyled small lh-lg">
              <li>💧 <strong>400M+</strong> without access to clean water</li>
              <li>👩‍👧 <strong>1 in 5 children</strong> miss school from waterborne illness</li>
              <li>🚰 <strong>100+</strong> solar-powered systems installed so far</li>
              <li>🌿 <strong>10K+</strong> lives improved and counting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Contact Us</h5>
            <p className="no-bottom-margin">Registration: 120190001569</p>
            <p className="no-bottom-margin">
              <i className="fa fa-map-marker-alt me-2"></i>Lot 5676/M/6, Lusaka West, Lusaka, Zambia
            </p>
            <p className="no-bottom-margin">
              <i className="fa fa-phone-alt me-1"></i>+260 211 231 174 / +260 976 944 695
            </p>
            <p className="no-bottom-margin">
              <i className="fa fa-envelope me-2"></i>info@africaaccesswater.org
            </p>
          </div>

          {/* US Nonprofit Details */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">US Nonprofit Details</h5>
            <p className="no-bottom-margin">
              Registered 501(C)(3) Nonprofit, TAX ID 33-3264565
            </p>
            <p className="no-bottom-margin">
              440 WYONA STREET, APT B. BROOKLYN, NY, 11207, USA
            </p>
            <p className="no-bottom-margin">
              +1 (917) 697-3672 / +1 (347) 536-7359
            </p>
            <p className="no-bottom-margin">
              <a
                href="/docs/donation_policy.pdf"
                className="text-white-50 mb-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donation Policy
              </a>
            </p>
            <p>
              <a
                href="/docs/refund_cancellation_policy.pdf"
                className="text-white-50"
                target="_blank"
                rel="noopener noreferrer"
              >
                Refund Policy
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container-fluid copyright border-top border-secondary mt-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start small py-3">
              &copy; {new Date().getFullYear()} Africa Access Water. All Rights Reserved.
            </div>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
