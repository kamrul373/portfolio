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
            <div className='lg:px-16 px-6 flex justify-center items-center'>
                <div className='flex-1'>
                    <h2 className='lg:text-4xl text-3xl font-bold lg:mt-10 lg:mb-6 my-4'>Description</h2>
                    <ul class="list-disc pl-6">
                        {
                            description.map(desc => <li>{desc}</li>)
                        }
                    </ul>
                    <h3 className='text-lg font-semibold pl-6 mt-4'>Technology Used: {technology}</h3>
                </div>
                <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
                    <a href={live} className="btn btn-active mr-2" target="_blank" rel="noopener noreferrer">Live</a>
                    <a href={client} className="btn mr-2" target="_blank" rel="noopener noreferrer" >Client</a>
                    <a href={server} className="btn" target="_blank" rel="noopener noreferrer">Server</a>
                </div>
            </div>
            <div className='lg:px-16 px-6'>
                <h2 className='font-bold lg:my-10 my-4 flex flex-col justify-center'><span className='lg:text-4xl text-3xl'>Project Screenshot <span className='text-xl'>( Please click on image to check images properly )</span></span></h2>
                <div className='flex gap-4 my-8 justify-center'>
                    <Gallery gallery={gallery}></Gallery>
                </div>
            </div>
        </div>
    );
};

export default Details;