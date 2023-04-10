import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import './main.css'


function Navbar() {
    return (
        <nav className='flex flex-wrap items-center justify-between text-px-20px '>
            <h1 className='flex items-center'><img src='/Images/logoInterno.png' alt='logo' style={{height:"34px", width:"34px"}}/><span>Interno</span></h1>
            <ul style={{paddingRight:"360px", paddingTop:"40px", display:"flex"}}>
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
        </nav>
    )
}

export default Navbar
