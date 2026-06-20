import React from "react";

const Carousel = ({ slides, id = "header-carousel" }) => (
  <div className="container-fluid p-0 h-100">
    <div id={id} className="carousel slide h-100" data-bs-ride="carousel">
      <div className="carousel-inner h-100">
        {slides.map((slide, idx) => (
          <div
            className={`carousel-item h-100${idx === 0 ? " active" : ""}`}
            key={idx}
            style={{ height: "100vh", overflow: "hidden" }}
          >
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet={slide.mobileImg}
              />

              <img
                className="w-100 h-100 carousel-img"
                src={slide.desktopImg}
                alt={slide.alt}
              />
            </picture>
      {/* Responsive carousel styling */}
      <style>
        {`
          .carousel-item {
            height: 70vh !important;
            overflow: hidden !important;
          }
          .carousel-img {
            height: 70vh !important;
            width: 100% !important;
            object-fit: cover !important;
            object-position: center !important;
          }
          .carousel-caption {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(
  to bottom,
  rgba(0, 0, 0, 0.25),
  rgba(0, 0, 0, 0.15)
);
            z-index: 5;
          }


          .carousel-control-prev,
          .carousel-control-next {
            z-index: 15 !important;
          }
          @media (max-width: 767.98px) {
            .carousel-caption {
              padding: 0 20px;
            }
              // added font
            .carousel-caption h1 {
              font-size: 2rem !important;
              font-family: 'Libre Baskerville', serif;
              font-weight: 300;
              letter-spacing: 0.5px; 
              margin-bottom: 10px;
             white-space: normal;
             text-align:center;
            }
            .carousel-caption p {
              font-size: 1rem !important;
              font-family: 'Inter', sans-serif;
              white-space: normal;
            }
          }
          @media (min-width: 992px) {
                  .carousel-caption h1 {
                    white-space: nowrap !important;
                    text-align: center;
                  }
                }  
        `}
      </style>
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8 col-md-10 col-sm-12 text-center">
                    <h1 className="display-4 text-white mb-3 animated slideInDown">
                      {slide.title}
                    </h1>
                    <p className="fs-5 text-white mb-5 animated slideInDown">
                      {slide.desc}
                    </p>
                    
                    {/* corousel button(optional) */}
                    {slide.buttonLink && slide.buttonText && (
                      <a
                        href={slide.buttonLink}
                        className="btn btn-primary py-2 px-3 animated slideInDown"
                      >
                        {slide.buttonText}
                        <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                         <i className="fa fa-tint" style={{ color: "#1a76d1", fontSize: "1rem" }}></i>

                        </div>
                      </a>
                    )}
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Controls */}

      {/* Only show controls if more than one slide */}
      {slides.length > 1 && (
      <>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button> 
      </>)}
    </div>
  </div>
);

export default Carousel;
