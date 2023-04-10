import React, { useEffect } from 'react'
import './main.css'
import { Link } from 'react-router-dom';

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div style={{ backgroundImage: `url(${require('./Images/servicebanner.jpg')}`, height: "356px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ marginTop: "178px", backgroundColor: "#ffffff", width: "503px", height: "178px", borderRadius: "37px 37px 0 0", display: "flex", alignItems: "center", textAlign: "center" }}>

          <div style={{ textAlign: "center", paddingLeft: "152px" }}>
            <h1 style={{ fontFamily: "DM serif display", fontSize: "50px", fontWeight: "400" }}>Services</h1>
            <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400" }}>
              Home/  Services
            </p>
          </div>
        </div>
      </div>


      <div>


        <div style={{ display: "flex", justifyContent: "space-between", marginRight: "380px", marginLeft: "380px", marginTop: "200px",padding:"0px 20px 83px"}} >
        <div style={{ textAlign: "center",padding:"83px 20px 83px" }} >
            <h1 style={{ fontFamily: "DM serif display", fontSize: "25px", fontWeight: "400" }} >Interior Work</h1>
            <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400", paddingBottom: "41px", paddingTop: "23px" }}>It is a long established fact that a reader will be distracted by the of readable content of a page
              when lookings at its layouts the points of using
              that it has a more-or-less normal. </p>
            <button style={{ display: "flex", fontFamily: "Jost", fontWeight: "600", fontSize: "20px", marginLeft: "auto", marginRight: "auto" }} >Read more<img style={{paddingTop:"9px", paddingLeft:"9px"}} src='./Images/arrow.png' alt='arrow' /></button>
          </div>


          <div style={{ textAlign: "center",padding:"83px 20px 83px" }} >
            <h1 style={{ fontFamily: "DM serif display", fontSize: "25px", fontWeight: "400" }} >Interior Work</h1>
            <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400", paddingBottom: "41px", paddingTop: "23px" }}>It is a long established fact that a reader will be distracted by the of readable content of a page
              when lookings at its layouts the points of using
              that it has a more-or-less normal. </p>
            <button style={{ display: "flex", fontFamily: "Jost", fontWeight: "600", fontSize: "20px", marginLeft: "auto", marginRight: "auto" }} >Read more<img style={{paddingTop:"9px", paddingLeft:"9px"}} src='./Images/arrow.png' alt='arrow' /></button>
          </div>


          <div style={{ textAlign: "center",padding:"83px 20px 83px" }} >
            <h1 style={{ fontFamily: "DM serif display", fontSize: "25px", fontWeight: "400" }} >2d/3d Art Work</h1>
            <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400", paddingBottom: "41px", paddingTop: "23px" }}>It is a long established fact that a reader will be distracted by the of readable content of a page
              when lookings at its layouts the points of using
              that it has a more-or-less normal. </p>
            <button style={{ display: "flex", fontFamily: "Jost", fontWeight: "600", fontSize: "20px", marginLeft: "auto", marginRight: "auto" }} >Read more<img style={{paddingTop:"9px", paddingLeft:"9px"}} src='./Images/arrow.png' alt='arrow' /></button>
          </div>



        </div>


        <div style={{ display: "flex", justifyContent: "space-between", marginRight: "380px", marginLeft: "380px", marginBottom: "200px" }} >
          <div style={{ textAlign: "center",padding:"83px 20px 83px" }} >
            <h1 style={{ fontFamily: "DM serif display", fontSize: "25px", fontWeight: "400" }} >Retail Work</h1>
            <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400", paddingBottom: "41px", paddingTop: "23px" }}>It is a long established fact that a reader will be distracted by the of readable content of a page
              when lookings at its layouts the points of using
              that it has a more-or-less normal. </p>
            <button style={{ display: "flex", fontFamily: "Jost", fontWeight: "600", fontSize: "20px", marginLeft: "auto", marginRight: "auto" }} >Read more<img style={{paddingTop:"9px", paddingLeft:"9px"}} src='./Images/arrow.png' alt='arrow' /></button>
          </div>


          <div style={{ textAlign: "center", borderRadius:"30px", backgroundColor:"#F4F0EC", padding:"83px 20px 83px" }} >
            <h1 style={{ fontFamily: "DM serif display", fontSize: "25px", fontWeight: "400" }} >Decoration work</h1>
            <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400", paddingBottom: "41px", paddingTop: "23px" }}>It is a long established fact that a reader will be distracted by the of readable content of a page
              when lookings at its layouts the points of using
              that it has a more-or-less normal. </p>
            <button style={{ display: "flex", fontFamily: "Jost", fontWeight: "600", fontSize: "20px", marginLeft: "auto", marginRight: "auto" }} >Read more<img style={{paddingTop:"9px", paddingLeft:"9px"}} src='./Images/arrow.png' alt='arrow' /></button>
          </div>


          <div style={{ textAlign: "center",padding:"83px 20px 83px" }} >
            <h1 style={{ fontFamily: "DM serif display", fontSize: "25px", fontWeight: "400" }} >Retail Design</h1>
            <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400", paddingBottom: "41px", paddingTop: "23px" }}>It is a long established fact that a reader will be distracted by the of readable content of a page
              when lookings at its layouts the points of using
              that it has a more-or-less normal. </p>
            <button style={{ display: "flex", fontFamily: "Jost", fontWeight: "600", fontSize: "20px", marginLeft: "auto", marginRight: "auto" }} >Read more<img style={{paddingTop:"9px", paddingLeft:"9px"}} src='./Images/arrow.png' alt='arrow' /></button>
          </div>
        </div>
      </div>


      <div style={{textAlign:"center", margin:"200px 360px", backgroundColor:"#F4F0EC", padding:"160px 116px", borderRadius:"70px"}} >
      <h1 style={{ fontFamily: "DM serif display", fontSize: "50px", fontWeight: "400", lineHeight: "125%", paddingBottom: "33px" }}>We Create The Art
            Of Stylish Living
            Stylishly</h1>
          <p style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400", paddingBottom: "45px" }}>It is a long established fact that a reader will be distracted by the of readable content of a page
            when lookings at its layouts the points of using
            that it has a more-or-less normal.</p>
        <img style={{marginLeft:"auto", marginRight:"auto"}} src='./Images/Works.png' alt='concepts' />

      </div>

      <div style={{width:"1199px", height:"374px", backgroundColor:"#292F36", borderRadius:"70px", marginTop:"202px", textAlign:"center", marginLeft:"auto", marginRight:"auto"}}>
      <div style={{paddingTop:"80px"}} >
        <h1 style={{fontFamily: "DM serif display", fontSize: "50px", fontWeight: "400", color:"#FFFFFF" }} >Wanna Join Interno?</h1>
          <p style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400",color:"#FFFFFF"}} >It is a long established fact that a reader will be distracted</p>

          <div style={{paddingTop:"21px"}}>
              <button style={{
              backgroundColor: '#CDA274', color: "#FFFFFF",  borderRadius: "18px", boxShadow: "0px 10px 20px rgba(192, 192, 192, 0.35)", fontFamily: "Jost", fontSize: "18px", display: "flex", flexDirection: "column", justifyContent: "center",
              alignItems:"flex-end",flexWrap:"wrap", width: "253px", height: "75px", padding: "26px 0px", marginLeft:"auto", marginRight:"auto"
                        }}><div style={{display:"flex",justifyContent: "space-between", paddingTop:"0px",paddingBottom:"0px", paddingLeft:"51px"}}>Contact With Us</div><img style={{paddingRight:"61px", paddingLeft:"10px"}} src='./Images/blackarrow.png' alt='arrow' /></button>
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

export default Services
