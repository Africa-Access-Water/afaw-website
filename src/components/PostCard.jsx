import React from "react";

const PostCard = ({ title, content, img, type, date }) => {
  return (
    <div className="card mb-3 shadow-sm">
      <img
        src={img}
        className="card-img-top"
        alt={title}
        style={{ height: "150px", objectFit: "cover" }}
      />
      <div className="card-body">
        <small className="text-muted text-uppercase">{type}</small>
        <h5 className="card-title mt-2">{title}</h5>
        <p className="card-text">{content}</p>
        <small className="text-muted">{date}</small>
      </div>
    </div>
  );
};

export default PostCard;
