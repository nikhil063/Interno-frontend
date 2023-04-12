import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

function Licences() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div style={{ backgroundImage: `url(${require('./Images/changelogbanner.png')}`, height: "356px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ marginTop: "178px", backgroundColor: "#ffffff", width: "503px", height: "178px", borderRadius: "37px 37px 0 0", display: "flex", alignItems: "center" }}>

          <div style={{ textAlign: "center", paddingLeft: "140px", paddingRight: "140px", paddingTop: "35px" }}>
            <h1 style={{ fontFamily: "DM serif display", fontSize: "50px", fontWeight: "400" }}>Licences</h1>
            <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400" }}>
              Home/ Licences
            </p>
          </div>
        </div>
      </div>

      <div style={{margin:"200px auto 100px", width:"1199px", }}>
        <h1  style={{ fontFamily: "DM serif display", fontSize: "50px", fontWeight: "400", paddingBottom:"25px" }} >Photography</h1>
        <p style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400", width:"906px" }}>All images used in the <b style={{color:"#CDA274"}}>Interno</b> Webflow Ecommerce Template are licensed for free personal and commercial use. If you'd like to use any specific image, you can check the licenses and download the images for free on <b>Unsplash, Pexels.</b></p>
      </div>

      <div style={{width:"1199px", borderRadius:"70px", backgroundColor:"#F5F5F5", marginLeft:"auto", marginRight:"auto", marginTop:"100px", marginBottom:"100px"}}>
        <div style={{padding:"69px 47px"}} >
        <h1  style={{ fontFamily: "DM serif display", fontSize: "35px", fontWeight: "400", padding:"0px 0px 25px " }} >Photography</h1>
        <p style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400", padding:"25px 0px 54px" }}>Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17.</p>
        <img src='/Images/unsplashimages.png' alt='unsplash' />

        </div>
      </div>


      <div style={{width:"1199px", borderRadius:"70px", backgroundColor:"#F5F5F5", marginLeft:"auto", marginRight:"auto", marginTop:"100px", marginBottom:"100px"}}>
        <div style={{padding:"69px 47px"}} >
        <h1  style={{ fontFamily: "DM serif display", fontSize: "35px", fontWeight: "400", padding:"0px 0px 25px " }} >Pexels</h1>
        <p style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400", padding:"25px 0px 54px" }}>Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17.</p>
        <img src='/Images/pexelsimages.png' alt='pexels' />

        </div>
      </div>



      <div style={{width:"1199px", borderRadius:"70px", backgroundColor:"#F5F5F5", marginLeft:"auto", marginRight:"auto", marginTop:"100px", marginBottom:"100px"}}>
        
        
        <div style={{padding:"69px 47px"}} >
        <div style={{display:"flex", justifyContent:"flex-start"}}>
          <h1  style={{ fontFamily: "DM serif display", fontSize: "35px",
          fontWeight: "400",}} >Pexels</h1>
        </div>
        <div style={{display:"flex", justifyContent:"flex-start"}}>
          <p style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400", width:"495px", padding:"25px 43px 25px 0px" }}>Interno template uses free licensed <b style={{color:"#CDA274"}}>Google Fonts</b>. Please check <b>DM Serif Display</b> and <b>Jost</b>.</p>
            <p style={{fontFamily:"DM serif display", fontSize:"85px", fontWeight:"400"}}>Aa</p>
            <p style={{fontFamily:"Jost", fontSize:"85px", fontWeight:"400", padding:"0px 60px"}}>Aa</p>
        </div>
        
        </div>
        <div style={{padding:"0px 47px"}} >
        <h1  style={{ fontFamily: "DM serif display", fontSize: "35px", fontWeight: "400"}} >Icon </h1>
        <p style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400", padding:"25px 0px 54px" }}>Icon 1, Icon 2, Icon 3</p>
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

export default Licences
