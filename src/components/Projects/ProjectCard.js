import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const { title, subtitle, tag, thumb, id } = project;
    return (
        <div className="card lg:w-96 bg-base-100 shadow-xl">
            <figure><img src={thumb} alt="Shoes" className='h-[400px] w-full' /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-outline">{tag[0]}</div>
                </h2>
                <p>{subtitle}</p>
                <div className="card-actions justify-end mt-4">
                    <Link to={`/project-details/${id}`} className="btn btn-secondary">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;