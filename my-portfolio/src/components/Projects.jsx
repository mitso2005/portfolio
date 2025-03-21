import React, { useState } from 'react';

const projects = [
    {
        name: 'Project One',
        date: 'January 2023',
        github: 'https://github.com/username/project-one',
        description: 'This is a brief description of Project One.'
    },
    {
        name: 'Project Two',
        date: 'February 2023',
        github: 'https://github.com/username/project-two',
        description: 'This is a brief description of Project Two.'
    },
    {
        name: 'Project Three',
        date: 'March 2023',
        github: 'https://github.com/username/project-three',
        description: 'This is a brief description of Project Three.'
    }
];

const Projects = () => {
    const [openProject, setOpenProject] = useState(null);

    const toggleProject = (index) => {
        setOpenProject(openProject === index ? null : index);
    };

    return (
        <div className="p-6 bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <ul className="space-y-4">
                {projects.map((project, index) => (
                    <li key={index} className="bg-white p-4 rounded shadow">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="text-xl font-semibold cursor-pointer" onClick={() => toggleProject(index)}>
                                    {project.name}
                                </h3>
                                <p className="text-gray-600">{project.date}</p>
                                <a href={project.github} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                                    GitHub Link
                                </a>
                            </div>
                            <button onClick={() => toggleProject(index)} className="text-blue-500">
                                {openProject === index ? 'Hide' : 'Show'} Description
                            </button>
                        </div>
                        {openProject === index && (
                            <p className="mt-4 text-gray-700">{project.description}</p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;