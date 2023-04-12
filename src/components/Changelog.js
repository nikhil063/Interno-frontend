import React, { useEffect } from 'react'
import './index.css'
import { Link } from 'react-router-dom';

function Changelog() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return (
      <>
        <div style={{ backgroundImage: `url(${require('./Images/changelogbanner.png')}`, height: "356px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ marginTop: "178px", backgroundColor: "#ffffff", width: "503px", height: "178px", borderRadius: "37px 37px 0 0", display: "flex", alignItems: "center" }}>
  
            <div style={{ textAlign: "center", paddingLeft: "140px", paddingRight: "140px", paddingTop: "35px" }}>
              <h1 style={{ fontFamily: "DM serif display", fontSize: "50px", fontWeight: "400" }}>Changelog</h1>
              <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400" }}>
                Home/ Changelog
              </p>
            </div>
          </div>
        </div>

        <div style={{margin:"200px auto", backgroundColor:"#F4F0EC", padding:"148px 200px", width:"1201px", borderRadius:"70px"}}>
            <div style={{textAlign:"center"}}>
                <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                    <h1 style={{ fontFamily: "DM serif display", fontSize: "50px", fontWeight: "400" }}>V.1</h1>
                    <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400", padding:"15px"}}>Initial Interno webflow Template Release</p>
                </div>
            </div>
        </div>


        <div style={{display:"flex", justifyContent:"space-evenly", paddingTop:"135px", width:"1199px", marginRight: "auto", marginLeft: "auto"}} >
        <div style={{width:"393px"}}>
          <h1 className='flex items-center'><img src='./Images/logoInterno.png' alt='logo' style={{ height: "34px", width: "34px", marginBottom:"18px" }} /><span>Interno</span></h1>
          <p style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400",paddingBottom:"31px", color:"#4D5053"  }} >It is a long established fact that a reader will be distracted lookings.</p>
          <img src='./Images/socials.png' alt='socials' />
        </div>

        <div style={{width:"125px"}}>
          <h1 style={{ fontFamily: "DM serif display", fontSize: "25px", fontWeight: "400", marginBottom:"18px" }} >Pages</h1>
          <ul style={{ fontFamily:"Jost", color: "#4D5053", display:"flex", flexDirection:"column", fontSize:"22px", marginBottom:"18px" }}>
          <li><Link to='/about'><button >About Us</button></Link></li>
            <li><Link to='/project'><button>Our Projects</button></Link></li>
            <li><Link to='/team'><button>Our Team</button></Link></li>
            <li><Link to='/contacts'><button>Contact Us</button></Link></li>
            <li><Link to='/services'><button>Services</button></Link></li>
          </ul>
        </div>



        <div style={{width:"120px"}}>
          <h1 style={{ fontFamily: "DM serif display", fontSize: "25px", fontWeight: "400", marginBottom:"18px" }} >Services</h1>

          <ul style={{ fontFamily:"Jost", color: "#4D5053", display:"flex", flexDirection:"column", fontSize:"22px" }}>
            <li>Kitchen Us</li>
            <li>Living area</li>
            <li>Bathroom</li>
            <li>Dining hall</li>
            <li>Bedroom</li>
          </ul>

        </div>



        <div style={{width:"258px"}}>
          <h1 style={{ fontFamily: "DM serif display", fontSize: "25px", fontWeight: "400", marginBottom:"18px" }} >Contact Us</h1>
          <ul style={{ fontFamily:"Jost", color: "#4D5053", display:"flex", flexDirection:"column", fontSize:"22px" }}>
            <li>55 East Birchwood Ave. Brooklyn, New York 11201
            </li>
            <li> contact@interno.com</li>
            <li>(123) 456 - 7890</li>
          </ul></div>


      </div>

      <div style={{paddingTop:"134px", textAlign:"center"}} >
      <p style={{ paddingTop:"40px", paddingBottom:"40px", fontSize:"22px", color: "#4D5053"}}>Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow</p>
      </div>
        </>
  )
}

export default Changelog
