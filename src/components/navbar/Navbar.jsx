import React from 'react';
import "./navbar.scss";
import Sidebar from '../sidebar/Sidebar';
const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar/>
            <div className="wrapper">
                <span>Kunal Jain</span>
                <div className="social">
                    <a href="#"><img src="/instagram.png" alt="" /></a>
                    <a href="#"><img src="/github.png" alt="" /></a>
                    <a href="#"><img src="/facebook.png" alt="" /></a>
                    <a href="#"><img src="/linkedin.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}
 
export default Navbar;
