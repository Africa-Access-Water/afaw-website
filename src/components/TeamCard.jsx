import React from "react";
import "../styles/TeamCard.css";

const TeamCard = ({full_name, image_url, alt, position, role }) => {

  return (
    <div className="col-lg-3 col-md-6 col-12">
      {/* Single Team Member */}
      <div className="single-news team-card">
        <div className="news-head team-card__image-container">
          <img
            src={image_url}
            alt={alt || full_name}
            className="team-card__image"
          />
        </div>
        <div className="news-body">
          <div className="news-content mx-2">
            <h2 className="team-card__name">{full_name}</h2>
            {position && <p className="text team-card__position">{position}</p>}
            {role && <p className="text team-card__role">{role}</p>}
          </div>
        </div>
        <span className="team-card__underline" aria-hidden="true"></span>
      </div>
      {/* End Single Team Member */}
    </div>
  );
};

export default TeamCard;
