import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("projects.json")
            .then(response => response.json())
            .then(data => setProjects(data));
    }, [])
    console.log(projects)
    return (
        <div className='lg:px-16 px-6 py-16'>
            <h2 className='lg:text-4xl text-2xl text-center font-bold mb-8'>Projects</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                {
                    projects.map(proj => <ProjectCard
                        key={proj.id}
                        project={proj}
                    ></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default Projects;