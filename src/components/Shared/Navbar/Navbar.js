import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <ul className="menu menu-horizontal">
            {/* <!-- Navbar menu content here --> */}
            <li><Link>Navbar Item 1</Link></li>
            <li><Link>Navbar Item 2</Link></li>
        </ul>
    );
};

export default Navbar;