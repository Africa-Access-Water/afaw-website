"use client";
import React from "react";

const actions = [
  {
    id: 1,
    title: "Donate Monthly",
    img: "/img-optimized/give.jpg",
    desc: "Become a Water Champion! Your steady support keeps water flowing and projects sustainable all year long.",
    btnText: "Join the Flow →",
    link: "/donate",
  },
  // {
  //   id: 2,
  //   title: "Fundraise",
  //   img: "/img-optimized/project-2.jpg",
  //   desc: "Turn your birthday, a race, or an event into clean water for an entire village. Every story fuels change.",
  //   btnText: "Start a Campaign →",
  //   link: "/contact",
  // },
  {
    id: 3,
    title: "Partner With Us",
    img: "/img-optimized/partner.jpg",
    desc: "Join hands with our team to bring sustainable water systems to remote communities across Africa.",
    btnText: "Collaborate →",
    link: "/contact",
  },
  {
    id: 4,
    title: "Volunteer Your Skills",
    img: "/img-optimized/price-4.jpg",
    desc: "Engineers, storytellers, designers. Everyone has a role to play in changing lives through water.",
    btnText: "Join the Network →",
    link: "/contact",
  },
  {
    id: 5,
    title: "Share & Follow",
    img: "/img-optimized/howitworks.jpg",
    desc: "Help us spread the word. Follow our journey and share our mission. Every post can reach a heart and inspire action.",
    socials: [
      { icon: "fab fa-facebook-f", link: "https://www.facebook.com/share/1Go7XNJriP/?mibextid=wwXIfr" },
      { icon: "fab fa-twitter", link: "https://x.com/africaaccesswtr" },
      { icon: "fab fa-instagram", link: "https://www.instagram.com/africa_access_water" },
      { icon: "fab fa-linkedin-in", link: "https://www.linkedin.com/company/africa-access-water/" },
      { icon: "fab fa-youtube", link: "https://youtube.com/@africaaccesswater" },
    ],
  },
];

const GetInvolved = () => {
  return (
    <section className="section-beige py-5 text-dark">
      <div className="container home mt-4 text-center">
        {/* Top CTA Heading */}
        <h2 className=" mb-3">We Need You</h2>
        <p className="lead mb-4" style={{ maxWidth: "750px", margin: "0 auto" }}>
          Across Africa, millions still walk miles each day for unsafe water. Together, we can change that —
          one project, one community, one drop at a time.
        </p>

        {/* CTA Button */}
        {/* <a href="/donate" className="btn btn-primary btn-lg mb-5 px-5 py-3">
          Take the First Step
        </a> */}

        {/* Action Cards */}
        <div className="row gy-4">
          {actions.map((action) => (
            <div key={action.id} className="col-lg-3 col-md-6">
              <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                <img
                  src={action.img}
                  alt={action.title}
                  className="card-img-top"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column text-center p-4">
                  <h5 className="fw-bold mb-2">{action.title}</h5>
                  <p className="text-muted mb-3 flex-grow-1">{action.desc}</p>

                  {/* Button or Social Icons */}
                  {action.socials ? (
                    <div className="mt-3 d-flex justify-content-center gap-2">
                      {action.socials.map((social, idx) => (
                        <a
                          key={idx}
                          href={social.link}
                          className="btn btn-outline-primary btn-sm rounded-circle"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className={social.icon}></i>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <a href={action.link} className="btn btn-primary rounded-pill">
                      {action.btnText}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
  .section-beige {
    background-color: #f5f0e6; /* soft beige */
    color: #025143; /* dark primary text for contrast */
  }
`}</style>

       
      </div>
    </section>
  );
};

export default GetInvolved;
