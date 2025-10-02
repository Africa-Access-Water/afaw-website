import React from "react";

const PostCard = ({ title, content, img, date, type, delay }) => {
  return (
    <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay={delay}>
      <div className="card border-0 shadow-sm h-100">
        <img
          src={img}
          alt={title}
          className="card-img-top"
          style={{ height: "240px", objectFit: "cover", objectPosition: "center" }}
        />
        <div className="card-body">
          <small className="text-muted text-uppercase">{type}</small>
          <h5 className="card-title mt-2">{title}</h5>
          <p className="card-text">{content}</p>
          <small className="text-muted">{date}</small>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
