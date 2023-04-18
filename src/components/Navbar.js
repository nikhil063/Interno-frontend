import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'


function Navbar() {
    return (
        <nav  style={{display:"flex", flexWrap:"wrap", justifyContent:"space-evenly", padding:"0px", marginRight:"auto", marginLeft:"auto", marginTop:"20px", marginBottom:"20px"}}>
            <div style={{display:"flex", justifyContent:"space-between", paddingLeft:"0px", width:"1200px"}}>
                <h1 style={{display:"flex", justifyContent:"center", paddingLeft:"0px", marginTop:"5px"}}><img src='/Images/logoInterno.png' alt='logo' style={{height:"34px", width:"34px", marginTop:"5px"}}/><span style={{fontFamily:"DM serif display", fontSize:"40px", fontWeight:"400"}}>Interno</span></h1>
                <ul style={{display:"flex", justifyContent:"center", alignContent:"center", height:"25px", marginTop:"10px" }}>
                    <li>
                        <Link to='/'><button>Home</button></Link>
                    </li>
                    <li>
                        <Link to='/about'><button>About</button></Link>
                    </li>
                    <li>
                        <Link to='/pages'><button>Pages</button></Link>
                    </li>
                    <li>
                        <Link to='/services'><button>Services</button></Link>
                    </li>
                    <li>
                        <Link to='/project'><button>Project</button></Link>
                    </li>
                    <li>
                        <Link to='/blog'><button>Blog</button></Link>
                    </li>
                    <li>
                        <Link to='/contacts'><button>Contacts</button></Link>
                    </li>
                    <li>
                            <Link to='/search'><button><img src='/Images/search.png' alt='search'/>
                        </button></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
