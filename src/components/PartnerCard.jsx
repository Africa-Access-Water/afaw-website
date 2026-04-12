import React from "react";
import "../styles/PartnerCard.css";

const PartnerCard = ({ name, logo, description, alt}) => {



  return (
    <div className="col-lg-6 col-md-6 col-12">
      {/* Single Team Member */}
      <div className="single-news team-card">
        <div className="news-head team-card__image-container">
          <img
            src={logo}
            alt='no logo'
            className="team-card__image"
          />

        </div>
        <div className="news-body">
          <div className="news-content mx-2">
            <h2 className="team-card__name">{name}</h2>
            {description && <p className="text team-card__role">{description}</p>}
          </div>
        </div>

        <span className="team-card__underline" aria-hidden="true"></span>
      </div>
      {/* End Single Team Member */}
    </div>
  );
};

export default PartnerCard;
