import React from 'react'
import "./navbar.scss"
import {motion} from "framer-motion"
import Sidebar from "../sidebar/Siderbar.jsx";
const Navbar = () => {
    return (
        <div className="navbar">
             <Sidebar/>
            <div className="wrapper">
                <motion.span
                    initial = {{opacity: 0.1, scale: 0.5}} // start
                    animate = {{opacity: 1, scale: 1}} // end result
                    transition = {{duration: 2}} // animation delay
                >
                    Welcome to My Portfolio!
                </motion.span>
                <div className="social">
                    <a href="https://www.linkedin.com/in/rayruixiao/" target="_blank" rel="noreferrer"> <img src="/linkedin.png" alt=""/> </a>
                    <a href="https://www.facebook.com/ray.xiao.902/" target="_blank" rel="noreferrer"> <img src="/facebook.png" alt=""/> </a>
                    <a href="https://www.instagram.com/xrayguitar/" target="_blank" rel="noreferrer"> <img src="/instagram.png" alt=""/> </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
