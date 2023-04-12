import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'


function Navbar() {
    return (
        <nav  style={{display:"flex", flexWrap:"wrap", justifyContent:"space-evenly", padding:"0px", marginRight:"auto", marginLeft:"auto", marginTop:"20px", marginBottom:"20px"}}>
            <div style={{display:"flex", justifyContent:"space-between", paddingLeft:"0px", width:"1200px"}}>
                <h1 style={{display:"flex", justifyContent:"center", paddingLeft:"0px"}}><img src='/Images/logoInterno.png' alt='logo' style={{height:"34px", width:"34px"}}/><span style={{fontFamily:"DM serif display", fontSize:"40px", fontWeight:"400"}}>Interno</span></h1>
                <ul style={{display:"flex", justifyContent:"center", alignContent:"center", height:"25px", marginTop:"10px" }}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/pages'>Pages</Link>
                    </li>
                    <li>
                        <Link to='/services'>Services</Link>
                    </li>
                    <li>
                        <Link to='/project'>Project</Link>
                    </li>
                    <li>
                        <Link to='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link to='/contacts'>Contacts</Link>
                    </li>
                    <li>
                        <Link to='/search'><img src='/Images/search.png' alt='search'/></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
