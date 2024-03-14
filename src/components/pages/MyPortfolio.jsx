import React from 'react';
import Project from '../Repos';
import allProjects from '../../../models';

const Portfolio = () => {
    const renderPortfolio = () => {
        return (
            <>
                <h1>My Portfolio</h1>
                {allProjects.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </>
        );
    };

    return <div>{renderPortfolio()}</div>;
};

export default Portfolio;
