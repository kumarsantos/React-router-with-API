import React from 'react'
import './Sidebar.css'
import Logo from '../source/Logo.png'

import key from '../source/key.png'

import server from '../source/server.png'
import disk from '../source/disk.png'

import stopwatch from '../source/stopwatch.png'

import upload from '../source/upload.png'

import adduser from '../source/useradd.png'
import firewale from '../source/firewall.png'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo_section">
                <img src={Logo} alt="logo" />
            </div>
            <div className="menu_section">
            <Link to="/server" className="linkbtn"><div><img src={server} alt="" /></div></Link>
               <Link to="/lock" className="linkbtn"> <div><img src={key} alt="" /></div></Link>
               <Link to="/firewall" className="linkbtn"> <div><img src={firewale} alt="" /></div></Link>
                <Link to="/todisk" className="linkbtn"><div><img src={disk} alt="" /></div></Link>
                <Link to="/upload" className="linkbtn"> <div><img src={upload} alt="" /></div></Link>
                <Link to="/adduser" className="linkbtn"> <div><img src={adduser} alt="" /></div></Link>
                <Link to="/timer" className="linkbtn"><div><img src={stopwatch} alt="" /></div></Link>
                

            </div>
        </div>
    )
}

export default Sidebar
