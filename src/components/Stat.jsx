import React from 'react';  

const Stat = ({ icon, number, text }) => {
  return (
    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
      <div className="bg-white text-center border rounded p-4 h-100 d-flex flex-column justify-content-center">
        <div className="mb-3">
          <i className={`${icon} fa-2x text-primary`} fa-2x text-primary></i>
        </div>
        <h2 className="text-primary mb-1">{number}</h2>
        <p className="mb-0 flex-grow-1">{text}</p>
      </div>
    </div>
  );
};

export default Stat;
