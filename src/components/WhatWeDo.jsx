import React from 'react';
import WhatWeDoCard from './WhatWeDoCard';

const WhatWeDo = () => {
    const whatWeDoData = [
        {
            image: "/img/wwd1.jpg",
            title: "Water Infrastructure Development in Rural Communities",
            content: (
                <div>
                    <p className="text-muted mb-3">
                        Our primary activity focuses on developing and implementing water infrastructure to benefit rural and economically disadvantaged communities. This includes designing sustainable systems, securing water sources, and ensuring efficient water distribution.
                    </p>
                    <h6 className="text-dark fw-bold mb-2">Key Focus Areas:<br /> Designing Sustainable Water Infrastructure</h6>
                    <p className="text-muted small mb-3">Creating water systems for diverse needs, such as agricultural irrigation, clean drinking water, and water for livestock.</p>
                    
                    <h6 className="text-dark fw-bold mb-2">Identifying and Securing Optimal Water Sources</h6>
                    <p className="text-muted small mb-2">Locating viable water sources through:</p>
                    <ul className="list-unstyled text-muted small ms-3">
                        <li>• Drilling boreholes or wells.</li>
                        <li>• Harvesting rainwater by constructing dams.</li>
                        <li>• Mapping and securing surface water sources like rivers and streams.</li>
                    </ul>
                    
                    <h6 className="text-dark fw-bold mb-2">Installing Solar-Powered Pumps and Distribution Systems</h6>
                    <p className="text-muted small mb-3">Equipping water sources with solar-powered pumping systems. Establishing distribution networks for irrigation and potable water.</p>
                    
                    <h6 className="text-dark fw-bold mb-2">Constructing Storage and Distribution Infrastructure</h6>
                    <p className="text-muted small mb-1">Building water tanks for efficient storage.</p>
                    <p className="text-muted small mb-1">Installing agricultural irrigation systems.</p>
                    <p className="text-muted small">Setting up water kiosks for clean drinking water and troughs for livestock.</p>
                </div>
            )
        },
        {
            image: "/img/wwd2.jpg",
            title: "Promote Water-Energy-Agricultural Productivity, Food Security & Income",
            content: (
                <div>
                    <p className="text-muted mb-3">
                        Once the water infrastructure has been developed and installed, the next step involves engaging the community in agricultural activities to enhance food security and generate income. This process includes:
                    </p>
                    
                    <h6 className="text-dark fw-bold mb-2">Establishing Communal Crop Farming</h6>
                    <p className="text-muted small mb-1">Utilizing communal land to grow crops for:</p>
                    <ul className="list-unstyled text-muted small ms-3 mb-3">
                        <li>• Promoting unity within the community.</li>
                        <li>• Aggregating crops for easier marketing.</li>
                        <li>• Providing opportunities for training and learning new farming techniques.</li>
                    </ul>
                    
                    <h6 className="text-dark fw-bold mb-2">Implementing a Learning and Adoption Cycle</h6>
                    <p className="text-muted small mb-1">Organizing two-year learning cohorts to:</p>
                    <ul className="list-unstyled text-muted small ms-3 mb-3">
                        <li>• Train farmers in sustainable farming practices.</li>
                        <li>• Enable participants to transfer these methods to their small landholdings, ensuring continuity and long-term impact.</li>
                    </ul>
                    
                    <h6 className="text-dark fw-bold mb-2">Creating a Community Development Fund</h6>
                    <p className="text-muted small mb-1">Allocating a percentage of communal farming proceeds to establish a fund for:</p>
                    <ul className="list-unstyled text-muted small ms-3 mb-3">
                        <li>• Further community development projects.</li>
                        <li>• Household livelihood improvement initiatives.</li>
                    </ul>
                    
                    <h6 className="text-dark fw-bold mb-2">Promoting Efficient Water Usage</h6>
                    <p className="text-muted small mb-1">Encouraging practices that focus on:</p>
                    <ul className="list-unstyled text-muted small ms-3 mb-3">
                        <li>• Using water more efficiently (e.g., precision irrigation).</li>
                        <li>• Producing higher yields with less water.</li>
                    </ul>
                    
                    <h6 className="text-dark fw-bold mb-2">Building Sustainable Water-Energy-Agriculture Economies</h6>
                    <p className="text-muted small mb-1">Leveraging off-grid solar energy systems to:</p>
                    <ul className="list-unstyled text-muted small ms-3">
                        <li>• Power agricultural activities sustainably.</li>
                        <li>• Foster the growth of green, rural economies.</li>
                    </ul>
                </div>
            )
        },
        {
            image: "/img/wwd3.jpg",
            title: "Measuring Water Impact on Livelihoods",
            content: (
                <div>
                    <p className="text-muted mb-3">
                        Measuring the impact of water on livelihoods is crucial as it provides evidence of what is effective and what requires improvement. This evaluation informs decisions on whether to scale the initiative further.
                    </p>
                    
                    <h6 className="text-dark fw-bold mb-2">Assess Livelihood Changes</h6>
                    <p className="text-muted small mb-2">Analyze how access to water has improved:</p>
                    <ul className="list-unstyled text-muted small ms-3 mb-3">
                        <li>• Food security through increased agricultural productivity.</li>
                        <li>• Household income through economic activities.</li>
                        <li>• Quality of life for the community.</li>
                    </ul>
                    
                    <h6 className="text-dark fw-bold mb-2">Leverage Technology for Impact Measurement</h6>
                    <p className="text-muted small mb-2">Utilize available and emerging technologies to:</p>
                    <ul className="list-unstyled text-muted small ms-3 mb-3">
                        <li>• Collect real-time data on water usage and outcomes.</li>
                        <li>• Track shifts in economic status, moving people from poverty to sustainable wealth creation.</li>
                    </ul>
                    
                    <h6 className="text-dark fw-bold mb-2">Evaluate Sustainability and Scalability</h6>
                    <p className="text-muted small mb-2">Identify successes and challenges in the current model:</p>
                    <ul className="list-unstyled text-muted small ms-3 mb-3">
                        <li>• Assess if the approach is sustainable and scalable to other regions.</li>
                    </ul>
                    
                    <h6 className="text-dark fw-bold mb-2">Use Data to Drive Decision-Making</h6>
                    <p className="text-muted small mb-2">Present impact findings as evidence to:</p>
                    <ul className="list-unstyled text-muted small ms-3">
                        <li>• Strengthen the case for further investments.</li>
                        <li>• Guide the refinement of strategies to maximize benefits.</li>
                    </ul>
                </div>
            )
        },
        {
            image: "/img/wwd4.jpg",
            title: "Research and Advocacy",
            content: (
                <div>
                    <p className="text-muted mb-3">
                        Further research is needed on the Water-Energy-Agriculture nexus, particularly in the context of climate change. The focus is to understand how these interdependencies impact rural communities, enabling us to contribute to local and international government frameworks effectively.
                    </p>
                    
                    <p className="text-muted mb-3">
                        We recognize that water's potential in developing economies—such as its contribution to job creation and GDP—has been underestimated. To raise awareness and foster deeper understanding, we have launched the Water Economy Dialogue program. This initiative brings together diverse stakeholders, including government entities, civil society organizations (CSOs), the private sector, and communities, to discuss, innovate, and collaborate on:
                    </p>
                    
                    <ul className="list-unstyled text-muted small ms-3 mb-3">
                        <li>• Sustainable water resource management for productive use.</li>
                        <li>• Stimulating economic growth through the water economy.</li>
                        <li>• Addressing challenges such as water scarcity, job creation, and climate change.</li>
                        <li>• Additionally, the program explores water's influence across key sectors such as agriculture, energy, mining, tourism, and other industries.</li>
                    </ul>
                    
                    <h6 className="text-dark fw-bold mb-2">The First Water Economy Dialogue</h6>
                    <p className="text-muted small mb-2">The inaugural dialogue focused on the role of civil society organizations in advancing the water economy in Zambia. The key objectives were:</p>
                    
                    <p className="text-muted small mb-1"><strong>Highlighting the Economic Value of Water:</strong> Showcasing water's potential to drive development, support livelihoods, and contribute to GDP growth.</p>
                    
                    <p className="text-muted small mb-1"><strong>Promoting Equitable Water Use:</strong> Ensuring water resource benefits are accessible to all, particularly marginalized groups.</p>
                    
                    <p className="text-muted small mb-1"><strong>Fostering Cross-Sector Collaboration:</strong> Encouraging partnerships across sectors to develop sustainable solutions for productive water use.</p>
                    
                    <p className="text-muted small mb-2"><strong>Advancing Innovative Policies and Practices:</strong></p>
                    <ul className="list-unstyled text-muted small ms-4">
                        <li>• Strengthening the implementation and accountability of the Zambia Water Investment Program.</li>
                        <li>• Promoting policies that enhance the water economy and ensure long-term sustainability.</li>
                    </ul>
                </div>
            )
        }
    ];

    return (
        <div className="container-xxl py-5">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                    {/* <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">Our Impact</div> */}
                    <h1 className="display-5 mb-4 fw-bold text-dark">What We Do</h1>
                    <p className="text-muted fs-5">
                        Discover how we empower communities through sustainable water solutions, 
                        agricultural development, and advocacy.
                    </p>
                </div>

                {/* What We Do Cards */}
                <div className="row justify-content-center">
                    {whatWeDoData.map((item, index) => (
                        <WhatWeDoCard
                            key={index}
                            image={item.image}
                            title={item.title}
                            content={item.content}
                            delay={`${(index + 1) * 0.1}s`}
                        />
                    ))}
                </div>
                <img src="/img/canvas3.png" alt="What We Do Bottom" className="img-fluid mt-4 rounded" />
            </div>
        </div>
    );
};

export default WhatWeDo;