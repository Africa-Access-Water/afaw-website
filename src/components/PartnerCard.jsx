import React from "react";
import "../styles/PartnerCard.css";

const PartnerCard = ({ name, logo, description, alt}) => {



  return (
    <div className="col-lg-6 col-md-6 col-12">
      {/* Single partner Member */}
      <div className="single-news partner-card">
        <div className="news-head partner-card__image-container">
          <img
            src={logo}
            alt='no logo'
            className="partner-card__image"
          />

        </div>
        <div className="news-body">
          <div className="news-content mx-2">
            <h2 className="partner-card__name">{name}</h2>
            {description && <p className="text partner-card__role">{description}</p>}
          </div>
        </div>

        <span className="partner-card__underline" aria-hidden="true"></span>
      </div>
      {/* End Single partner Member */}
    </div>
  );
};

export default PartnerCard;
