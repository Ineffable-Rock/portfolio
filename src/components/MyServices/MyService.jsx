import React, { useState } from 'react';

import { motion } from 'framer-motion';
import './myService.css'; 

const serviceData = [
    { id: '01', title: 'Frontend', description: 'Handful experince in react. Have made more than 5 projects, still working on some project' },
    { id: '02', title: 'Social media', description: 'I have a decent amount of followers on my linkedin and instagram ,and i have strong hold on them' },
    { id: '03', title: 'Backend', description: 'Worked on technologies llike flask,Nodejs , express. Have made projects on them' }
];

const ServiceCard = ({ service }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxChars = 60;

    const toggleReadMore = () => {
        setIsExpanded(prev => !prev);
    };

    const shouldTruncate = service.description.length > maxChars;
    const displayText = isExpanded || !shouldTruncate
        ? service.description
        : service.description.slice(0, maxChars) + '...';

        return (
            <motion.div
                className="service-card-container" 
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
            >
                <div className="service-card">
                    <span className="service-number">{service.id}</span>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{displayText}</p>
                    {shouldTruncate && (
                        <button onClick={toggleReadMore} className="read-more-btn">
                            {isExpanded ? 'Read less' : 'Read more'}
                        </button>
                    )}
                </div>
            </motion.div>
        );
};

const Services = () => {
    return (
        <section id='services' className="services-section">
            <div className="container">
                <div className="text-center section-title">
                    <h2 className="services-heading">My Services</h2>
                </div>
                <div className="services-grid">
                    {serviceData.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
