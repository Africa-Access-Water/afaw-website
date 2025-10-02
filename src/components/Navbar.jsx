import React from 'react';
import { Link, useLocation } from 'react-router-dom';



const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? "nav-link active" : "nav-link";
    };

    return (
        <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
            {/* Top Bar */}
            <div className="top-bar text-white-50 row gx-0 align-items-center d-none d-lg-flex">
                <div className="col-lg-8 px-5 text-start">
                    <div className="d-flex align-items-center flex-wrap gap-3">
                        <small id="google_translate_element"></small>
                        <small><i className="fa fa-map-marker-alt me-2"></i>Lot 5676/M/6, Lusaka West, Lusaka, Zambia</small>
                        <small><i className="fa fa-envelope me-2"></i><a href="mailto:info@africaaccesswater.org" className="text-white-50">info@africaaccesswater.org</a></small>
                    </div>
                </div>
                <div className="col-lg-4 px-5 text-end">
                    <small>Follow us:</small>
                    <a className="text-white-50 ms-3" href="https://www.facebook.com/share/1Go7XNJriP/?mibextid=wwXIfr"><i className="fab fa-facebook-f"></i></a>
                    <a className="text-white-50 ms-3" href="https://x.com/africaaccesswtr"><i className="fab fa-twitter"></i></a>
                    <a className="text-white-50 ms-3" href="https://www.linkedin.com/company/africa-access-water/"><i className="fab fa-linkedin-in"></i></a>
                    <a className="text-white-50 ms-3" href="https://www.instagram.com/africa_access_water"><i className="fab fa-instagram"></i></a>
                    <a className="text-white-50 ms-3" href="https://youtube.com/@africaaccesswater"><i className="fab fa-youtube"></i></a>
                    <a className="text-white-50 ms-3" href="https://www.tiktok.com/@africaaccesswater">
                        <img src="/img/tik-tok.png" alt="TikTok" width="14" height="14" style={{ verticalAlign: "middle" }} />
                    </a>
                </div>
            </div>
            {/* Main Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                <Link to="/" className="navbar-brand ms-4 ms-lg-0">
                    <img
                        src="/img/logos/afaw-logo-white.png"
                        alt="afaw-logo-africa"
                        className="img-fluid"
                        style={{ width: "50px", height: "auto" }}
                    />
                </Link>
                <div className="me-4">
                <a className="btn btn-primary btn-outline-primary btn-sm py-1 px-2 d-lg-none me-2" href="/donate" style={{ whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center' }}>
                    Donate
                    <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-1" style={{ width: 22, height: 22, fontSize: 14 }}>
                        <i className="fa fa-arrow-right"></i>
                    </div>
                </a>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <Link to="/" className={`nav-item ${isActive("/")}`}>Home</Link>
                        <Link to="/about" className={`nav-item ${isActive("/about")}`}>About Us</Link>
                        <Link to="/our-work" className={`nav-item ${isActive("/our-work")}`}>Our Work</Link>
                        <Link to="/blogs" className={`nav-item ${isActive("/blogs")}`}>Blogs</Link>
                        <Link to="/team" className={`nav-item ${isActive("/team")}`}>Our Team</Link>
                        <Link to="/contact" className={`nav-item ${isActive("/contact")}`}>Contact</Link>

                        
                    </div>
                    <div className="d-none d-lg-flex ms-2">
                        <Link className="btn btn-primary btn-outline-primary py-2 px-3" to="/donate">
                            Donate Now
                            <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                                <i className="fa fa-arrow-right"></i>
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
