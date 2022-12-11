import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import resume from "../../../assets/pdf/resume-of-kamrul-hasan.pdf"
const Navbar = () => {
    return (
        <ul className="menu menu-horizontal">
            {/* <!-- Navbar menu content here --> */}
            <li><Link>Navbar Item 1</Link></li>
            <li><a href={resume} className="resume" download>Resume</a></li>
        </ul>
    );
};

export default Navbar;