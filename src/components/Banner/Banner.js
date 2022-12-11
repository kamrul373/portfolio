import React from 'react';
import bannerImg from "../../assets/img/kamrul-hasan.jpg"
import ReactTyped from 'react-typed';
import "./Banner.css";
import { Flip, Rotate, Slide } from 'react-awesome-reveal';
import { FaReact, FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const Banner = () => {
    return (
        <div className='px-16 py-24 bg-[#111215] text-white relative banner'>
            <FaReact className='text-5xl lg:absolute top-[15%] right-20 banner-logo'></FaReact>
            <div className='lg:flex justify-center items-center lg:gap-16 gap-6  '>
                <Slide>
                    <div className="avatar">
                        <div className="w-60 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                            <img src={bannerImg} alt="kamrul hasan" />
                        </div>
                    </div>
                </Slide>
                <div className='flex-1'>

                    <span className='lg:text-4xl text-2xl font-semibold'>Hello, My name is Kamrul Hasan I love design and creative </span>
                    <span className='lg:text-5xl text-2xl font-semibold typing'>
                        <ReactTyped
                            strings={[
                                'Frontend Developer',
                                'React JS Developer',
                                'MERN stack developer',
                                `Full Stack Developer`
                            ]}
                            typeSpeed={50}
                            backSpeed={50}
                            backDelay={1}
                            loop
                            smartBackspace
                        />
                    </span>
                </div>
            </div>
            <div className='lg:absolute top-[45%] right-20 node'>
                <Flip>
                    <SiExpress className='text-5xl'></SiExpress>
                </Flip>

            </div>
            <div className='lg:absolute top-[30%] right-20 node'>
                <Rotate>
                    <FaNode className='text-5xl'></FaNode>
                </Rotate>
            </div>
            <div className='lg:absolute top-[60%] right-20 node'>
                <Slide>
                    <DiMongodb className='text-5xl'></DiMongodb>
                </Slide>
            </div>
        </div>
    );
};

export default Banner;