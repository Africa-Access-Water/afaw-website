import React from 'react';
import "../styles/VisionMissionObjectives.css";
import { Link } from 'react-router-dom';

const VisionMissionObjectives = () => {
  return (
    <>
    <section className="Feautes mt-4 p-4 section">
        <div className="container">
            {/* promblem statement */}
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title text-center px-4 mx-auto responsive-width">
                        {/* added this for flow and storytelling impact */}
                         <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-2 mb-3">Why Water, Why Now?</div>
                        <h2 className='py-2'>Because Water Can’t Wait</h2>
                        <p>
                          Behind every dry riverbed is a community fighting to survive. Families spend hours each day collecting water, children miss school, and local economies stall. It’s a quiet crisis, but its impact is massive.
                          <br/> <br/>
                           Our mission is simple: turn the struggle into sustainable solutions with solar-powered water systems that empower communities.
                        </p>
                         <Link to="/our-work">
       <a className="cta-link mt-3">See Lives Transformed</a>
      </Link>
      <style jsx>{`
  .cta-link {
    display: inline-block;
    font-weight: 600;
    text-decoration: none;
    color: black;
    border-bottom: 2px solid #FFD700; /* yellow accent underline */
    transition: transform 0.2s ease, color 0.2s ease;
  }

  .cta-link:hover {
    transform: scale(1.05); /* grow slightly on hover */
    color: #FFD700; /* optional: text color changes to accent on hover */
  }
`}</style>

                    </div>
                </div>
            </div>

            {/* image to show the change- like a before and after. */}
             <div className="mt-4 wow fadeInUp" data-wow-delay="0.1s">
            <div className="position-relative overflow-hidden h-100" style={{ minHeight: "400px" }}>
                <img className="position-absolute w-100 h-100 pt-5 pe-5" src="img/irrigated 1.jpg" alt="Solar Water Project" style={{ objectFit: "cover" }} />
                <img className="position-absolute top-0 end-0 bg-white ps-2 pb-2" src="img/about.jpg" alt="Women Farmers" style={{ width: "200px", height: "200px" }} />
            </div>
        </div>
            {/* commented this section out as it should be in 'about us' section. helps improve flows and reduce load on homepage.  */}
           
        </div>
    </section>

    </>
  )
}

export default VisionMissionObjectives;