// import React from 'react';

// const WhatWeDoCard = ({ 
//     image, 
//     title, 
//     content, 
//     delay = "0.1s" 
// }) => {
//     return (
//         <div className="col-lg-6 col-md-6 mb-4">
//             <div className="card h-100 border-0 shadow-sm wow fadeInUp" data-wow-delay={delay}>
//                 {/* Card Image */}
//                 <div className="card-img-top position-relative overflow-hidden">
//                     <img 
//                         src={image} 
//                         alt={title}
//                         className="img-fluid w-100"
//                         style={{ height: '250px', objectFit: 'cover' }}
//                     />
//                 </div>
                
//                 {/* Card Body */}
//                 <div className="card-body p-4 d-flex flex-column">
//                     <h4 className="card-title mb-3 text-dark fw-bold">{title}</h4>
                    
//                     {/* Dynamic Content - can be anything */}
//                     <div className="card-content flex-grow-1">
//                         {typeof content === 'string' ? (
//                             <p className="text-muted">{content}</p>
//                         ) : (
//                             content
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default WhatWeDoCard;

import React, { useState } from 'react';

const WhatWeDoCard = ({ 
    image, 
    title, 
    content, 
    delay = "0.1s" 
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className="col-lg-6 col-md-6 mb-4">
            <div 
                className="card h-100 border-0 shadow-sm wow fadeInUp"
                data-wow-delay={delay}
                style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
            >
                {/* Card Image */}
                <div className="card-img-top position-relative overflow-hidden">
                    <img 
                        src={image} 
                        alt={title}
                        className="img-fluid w-100"
                        style={{ 
                            height: '250px', 
                            objectFit: 'cover', 
                            transition: 'all 0.3s ease',
                            filter: isOpen ? 'brightness(70%)' : 'brightness(100%)'
                        }}
                        onClick={toggleOpen} 
                    />
                </div>
                
                {/* Card Body */}
                <div className="card-body p-4 d-flex flex-column">
                    <h4 className="card-title mb-3 text-dark fw-bold">{title}</h4>
                    
                    {/* Expandable Content */}
                    <div
                        className="card-content flex-grow-1"
                        style={{
                            maxHeight: isOpen ? '500px' : '60px',
                            overflow: 'hidden',
                            transition: 'max-height 0.3s ease, padding 0.3s ease'
                        }}
                    >
                        {typeof content === 'string' ? (
                            <p className="text-muted">{content}</p>
                        ) : (
                            content
                        )}
                    </div>

                    {/* Read More / Close Button */}
                    <button
                        onClick={toggleOpen}
                        className="btn btn-link p-0 mt-2 text-primary"
                        style={{ textDecoration: 'underline', alignSelf: 'flex-start' }}
                    >
                        {isOpen ? 'Close' : 'Read More'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDoCard;
