import React from 'react';
import './project.css'
import Tracker from './tracker.png'

const projects = [
    {
        id: 1,
        title: 'Food Hub',
        description: 'I am working on this project.In this project you can order food,takeaway the food and also you can book a table in your favourite restaurant.',
        image: require('./food.png'),
        link: 'https://example.com/project1',
    },
    {
        id: 2,
        title: 'My Store',
        description: 'This is an E-commerce website where you can buy a clothes, add in cart. This project is build using HTML, CSS and JS.',
        image: require('./eCommerce.png'),
        link: 'https://mansisingh2803.github.io/E-Commerce-Website/',
    },
    {
        id: 3,
        title: 'Expense Tracker',
        description: 'This project used to calculate the expenses. I have used HTML,CSS,ReactJS for making this project',
        image: require('./tracker.png'),
        link: 'https://mansisingh2803.github.io/Expense_tracker_react/',
    },
    {
        id: 4,
        title: 'Unsplash Clone',
        description: 'I clonned the unsplash website where you can search the image of anything. I have used React JS, HTML, CSS and also use the API for making this project. I have learned API integeration in this project',
        image: require('./unsplash.png'),
        link: 'https://mansisingh2803.github.io/unsplash_clone/',
    }
    // Add more projects as needed
];

const ProjectSection = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="project-list">
                {projects.map(project => (
                    <div className="project" key={project.id}>
                        <img src={project.image} alt={project.title} />
                        <div className="project-details">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectSection;
