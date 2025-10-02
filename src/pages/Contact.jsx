import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Header from "../components/Header";

const Contact = () => {
  // API Configuration - Switch between environments
  const PRODUCTION_API_BASE = "https://afaw-api-v1.onrender.com/api";
  const LOCAL_API_BASE = "http://localhost:5000/api";
  const API_BASE = LOCAL_API_BASE; // Change to LOCAL_API_BASE for local dev

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (

    <>
      <Helmet>
        <title>Contact Us | Africa Access Water</title>
        <meta
          name="description"
          content="Reach out to support our mission to provide clean water."
        />
        <meta property="og:title" content="Contact Africa Access Water" />
        <meta
          property="og:description"
          content="We're here to connect and collaborate on impactful water solutions."
        />
        <meta property="og:image" content="/images/og-contact.jpg" />
        <meta property="og:url" content={window.location.href} />
      </Helmet>
      <Layout>
        <Header title="Contact" current="contact" />
        <div className="container-xxl py-5 bg-light">
          <div className="container">
            <div className="row g-5 align-items-center">
              {/* Contact Form */}
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="d-inline-block rounded-pill bg-primary text-white py-1 px-3 mb-3">
                  Get In Touch
                </div>
                <h1 className="display-6 mb-4">
                  We're here to help rural Africa access clean water
                </h1>
                <p className="mb-4">
                  Whether you want to partner, support, or inquire about our
                  solar-powered water systems, feel free to contact us. We're
                  ready to respond.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          id="message"
                          placeholder="Leave a message here"
                          style={{ height: "120px" }}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary py-2 px-4"
                      >
                        Send Message <i className="fa fa-paper-plane ms-2"></i>
                      </button>
                      <div id="formStatus" className="mt-3 text-success">
                        {status === "success" && "Message sent successfully!"}
                        {status === "error" &&
                          "Something went wrong. Please try again."}
                        {status === "sending" && "Sending..."}
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              {/* Google Map */}
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <div
                  className="position-relative rounded overflow-hidden shadow"
                  style={{ minHeight: "450px" }}
                >
                  <iframe
                    className="position-relative w-100 h-100"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771090.1469689243!2d24.298088950000004!3d-13.1338977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f3ba6d6c85cd%3A0x64be9f6c48c34aeb!2sZambia!5e0!3m2!1sen!2szm!4v1623857587085!5m2!1sen!2szm"
                    frameBorder="0"
                    allowFullScreen=""
                    loading="lazy"
                    style={{ border: 0, minHeight: "450px" }}
                    title="Zambia Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
    );
};

export default Contact;
