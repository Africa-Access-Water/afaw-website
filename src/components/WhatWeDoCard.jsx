import React from 'react';

const WhatWeDoCard = ({ 
    image, 
    title, 
    content, 
    delay = "0.1s" 
}) => {
    return (
        <div className="col-lg-6 col-md-6 mb-4">
            <div className="card h-100 border-0 shadow-sm wow fadeInUp" data-wow-delay={delay}>
                {/* Card Image */}
                <div className="card-img-top position-relative overflow-hidden">
                    <img 
                        src={image} 
                        alt={title}
                        className="img-fluid w-100"
                        style={{ height: '500px', objectFit: 'cover' }}
                    />
                </div>
                
                {/* Card Body */}
                <div className="card-body p-4 d-flex flex-column">
                    <h4 className="card-title mb-3 text-dark fw-bold">{title}</h4>
                    
                    {/* Dynamic Content - can be anything */}
                    <div className="card-content flex-grow-1">
                        {typeof content === 'string' ? (
                            <p className="text-muted">{content}</p>
                        ) : (
                            content
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDoCard;