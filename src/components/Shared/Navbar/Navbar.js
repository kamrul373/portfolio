import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import resume from "../../../assets/pdf/resume-of-kamrul-hasan.pdf"
const Navbar = () => {
    return (
        <ul className="menu menu-horizontal">
            {/* <!-- Navbar menu content here --> */}
            <li><Link to="/" className='mr-3'>Home</Link></li>
            <li><Link to="/blogs" className='mr-3'>Blogs</Link></li>
            <li><a href="#contact" className='mr-3'>Contact</a></li>
            <li><a href={resume} className="resume" download>Resume</a></li>

        </ul>
    );
};

export default Navbar;