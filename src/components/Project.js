import React, { useEffect } from 'react'
import './main.css'
import { Link } from 'react-router-dom';

const Project = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (<>
    <div style={{ backgroundImage: `url(${require('./Images/projectbanner.png')}`, height: "356px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
    </div>


    <div style={{display:"flex", marginTop:"200px", justifyContent:"center"}}>

<div style={{borderRadius:"70px", padding:"55px 84px", display:"flex",justifyContent:"center", alignContent:"space-between", backgroundColor:"#F4F0EC"}}>

  <ul style={{fontFamily: "DM serif display", fontSize: "22px", fontWeight: "400",flexDirection:"column", display:"flex", lineHeight:"10px"}}>
    <li>Clients</li>
    <li>Category</li>
    <li>Tags</li>
    <li>Date</li>
    <li>Link</li>
  </ul>
  <ul style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400", color:"#4D5053",flexDirection:"column", display:"flex", paddingLeft:"40px", lineHeight:"10px"  }}>
    <li>Your client name</li>
    <li>Interior</li>
    <li>Interior/ Home</li>
    <li>22 December 2022</li>
    <li>link.example.com</li>
    </ul>
</div>

<div style={{fontFamily:"Jost", fontSize:"22px", fontWeight:"400", width:"658px", marginLeft:"42px"}}>
<h1 style={{fontFamily: "DM serif display", fontSize: "50px", fontWeight: "400",padding:"0px 0px 20px"}} >Minimal Look Bedrooms </h1>
<p style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400",paddingBottom:"31px", color:"#4D5053"  }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. <br/><br/> Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 

</p>
</div>

    </div>


   
    <div style={{ backgroundImage: `url(${require('./Images/projectside.png')}`, width:"1201px", height:"799px", borderRadius:"70px", marginLeft:"auto", marginRight:"auto", marginTop:"100px", marginBottom:"200px" }}>
      <button style={{padding:"318px 534px"}}><img src='./Images/zoomicon.png' alt='zoomicon' style={{width:"132px"}} /></button>
      
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

export default Project
