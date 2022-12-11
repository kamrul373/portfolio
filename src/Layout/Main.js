import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';
import Navbar from '../components/Shared/Navbar/Navbar';
import resume from "../assets/pdf/resume-of-kamrul-hasan.pdf"
const Main = () => {
    return (
        <div className=''>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    {/* <!-- Navbar --> */}
                    <div className="w-full navbar  lg:px-16 px-4 bg-[#111215] text-white py-10">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2 text-3xl font-bold">
                            <Link to="/">KH</Link>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <Navbar></Navbar>
                        </div>
                    </div>
                    {/* <!-- Page content here -->
    Content */}
                    <div>
                        <Outlet></Outlet>
                        <Footer></Footer>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/" className='mb-3'>Home</Link></li>
                        <li><Link to="/blogs" className='mb-3'>Blogs</Link></li>
                        <li><a href="#contact" className='mb-3'>Contact</a></li>
                        <li><a href={resume} className="resume" download>Resume</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Main;