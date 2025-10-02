import React from 'react';

const PageHeader = ({ title = "Donate", current = "donate" }) => {
  return (
    <div className="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container text-center">
        <h1 className="display-4 text-white animated slideInDown mb-4">{title}</h1>
        <nav aria-label="breadcrumb" className="animated slideInDown">
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a className="text-white" href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a className="text-white active" href="#">{current}</a>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default PageHeader;
