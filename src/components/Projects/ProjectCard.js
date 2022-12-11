import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const { title, subtitle, description, tag, thumb, live, server, client, technology } = project;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={thumb} alt="Shoes" className='h-[400px] w-full' /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-outline">{tag[0]}</div>
                </h2>
                <p>{subtitle}</p>
                <div className="card-actions justify-end mt-4">
                    <Link to="" className="btn btn-secondary" >Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;