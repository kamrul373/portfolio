import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Gallery from '../Gallery/Gallery';

const Details = () => {
    const projectDetails = useLoaderData();
    const { title, subtitle, description, tag, thumb, live, server, client, technology, id, gallery } = projectDetails;

    return (
        <div>
            <div className="hero h-[250px]" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">
                            {title}
                        </h1>
                        <p className="mb-5">{subtitle}</p>
                        {
                            tag.map(t => <div className="badge badge-secondary mr-3">{t}</div>)
                        }
                    </div>
                </div>
            </div>
            <Gallery gallery={gallery}></Gallery>
        </div>
    );
};

export default Details;