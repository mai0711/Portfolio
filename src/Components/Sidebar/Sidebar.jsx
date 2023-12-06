import React from 'react'
import { useState } from 'react'
import "./Sidebar.css"
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { BiBrain } from "react-icons/bi";
import { PiNotepad } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";
import { CgMenu } from "react-icons/cg";
import { IconContext } from "react-icons";
import { motion } from "framer-motion"; //light


export default function Sidebar() {

    const [open, setOpen] = useState(false)

    const toggle = ()=>{
        setOpen(!open)
    }

    const scroll = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    }

  return (
    <motion.div
    transition={{type:"spring", stiffness: 100}}
    animate={{width: open ? "250px": "130px"}}
    className='sidebar'>
        <div className="sidebarContainer">
            <IconContext.Provider value={{ color: "white", size: "2.6rem" }}>
                <div
                style={{alignSelf: open ? "inherit": "center"}}
                className="menuIcon" onClick={toggle}>
                    <span><CgMenu/></span>
                </div>
            </IconContext.Provider>
            <div className="list">
                <ul>
                    <li className="list active" onClick={() => scroll('home')}>
                        <span className="icon"><AiOutlineHome /></span>
                        {open && <span className="title">HOME</span>}
                    </li>
                    <li className="list" onClick={() => scroll('about')}>
                        <span className="icon"><BsPerson /></span>
                        {open && <span className="title">ABOUT ME</span>}
                    </li>
                    <li className="list" onClick={() => scroll('skill')}>
                        <span className="icon"><BiBrain /></span>
                        {open && <span className="title">SKILLS</span>}
                    </li>
                    <li className="list" onClick={() => scroll('project')}>
                        <span className="icon"><PiNotepad/></span>
                        {open && <span className="title">PROJECTS</span>}
                    </li>
                    <li className="list" onClick={() => scroll('contact')}>
                        <span className="icon"><AiOutlineMail/></span>
                        {open && <span className="title">CONTACT</span>}
                    </li>
                </ul>
            </div>
        </div>
    </motion.div>
  )
}
