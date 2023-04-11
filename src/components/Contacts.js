import React, { useEffect } from 'react'
import './main.css'
import { Link } from 'react-router-dom';

const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div style={{ backgroundImage: `url(${require('./Images/contactbanner.png')}`, height: "356px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ marginTop: "178px", backgroundColor: "#ffffff", width: "503px", height: "178px", borderRadius: "37px 37px 0 0", display: "flex", alignItems: "center", textAlign: "center" }}>

          <div style={{ textAlign: "center", paddingLeft: "136px" }}>
            <h1 style={{ fontFamily: "DM serif display", fontSize: "50px", fontWeight: "400" }}>Contact Us</h1>
            <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400" }}>
              Home/ Contact
            </p>
          </div>
        </div>
      </div>





      <div style={{ display: "flex", marginTop: "200px", marginLeft: "auto", marginRight: "auto", height: "436px", width:"1201px" }}>

        <div style={{ borderRadius: "70px", padding: "76px 32px 76px", display: "flex", justifyContent: "space-between", alignContent: "space-between", backgroundColor: "#F4F0EC" }}>

          
          <ul style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400", color: "#4D5053", flexDirection: "column", display: "flex", lineHeight: "10px", width:"300px" }}>
            
              <li><div style={{display:"flex", flexWrap:"wrap", alignContent:"center", justifyContent:"flex-start"}}><img src='./Images/callicon2.png' alt='callicon'/><p style={{paddingTop:"15px", paddingLeft:"10px"}}>+1 (132) 400-4545</p></div></li>
              
              <li><div style={{display:"flex", flexWrap:"wrap", alignContent:"center", justifyContent:"flex-start"}}><img src='./Images/msgicon.png' alt='message'/><p style={{paddingTop:"15px", paddingLeft:"10px"}}>yourdomain.com</p></div></li>
              
              <li><div style={{display:"flex", flexWrap:"wrap", alignContent:"center", justifyContent:"flex-start"}}><img src='./Images/linkicon.png' alt='link'/><p style={{paddingTop:"15px", paddingLeft:"10px"}}>info@yourdomain.com</p></div></li>

              <li><img src='./Images/socialicon.png' alt='socials' /></li>
           
          </ul>
        </div>

        <div style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400", width: "797px", marginLeft: "42px" }}><form style={{ marginBottom: "77px" }}>
          <div style={{ marginRight: "auto", marginLeft: "auto", display: "flex", flexDirection: "column", width: "796px" }}>
            <div style={{ marginRight: "auto", marginLeft: "auto", width: "796px" }}>
              <input type='text' placeholder='Name' style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400", paddingBottom: "41px", paddingTop: "23px", color: "#000000", width: "378px", borderBottomWidth:"3px", borderBottomColor:"#000000", outline:"0" , marginRight:"15px"}} />

              <input type='text' placeholder='Email' style={{
                fontFamily: "Jost", fontSize: "20px", fontWeight: "400", paddingBottom: "41px", paddingTop: "23px", color: "#000000", width: "378px", borderBottomWidth:"3px", borderBottomColor:"#000000", outline:"0"
              }} />
            </div>
            <div style={{ marginRight: "auto", marginLeft: "auto", width: "796px" }}>
              <input type='text' placeholder='Subject' style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400", paddingBottom: "41px", paddingTop: "23px", color: "#000000", width: "378px", borderBottomWidth:"3px", borderBottomColor:"#000000" , outline:"0", marginRight:"15px"}} />

              <input type='number' placeholder='Phone' style={{
                fontFamily: "Jost", fontSize: "20px", fontWeight: "400", paddingBottom: "41px", paddingTop: "23px", color: "#000000", width: "378px", borderBottomWidth:"3px",outline:"0", borderBottomColor:"#000000"
              }} />
            </div>


            <input type='text' placeholder='Hello I am Interested In...' style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400", paddingBottom: "41px", paddingTop: "23px", color: "#000000", width: "796px", marginRight: "auto", marginLeft: "auto", height: "277px", borderBottomWidth:"3px", borderBottomColor:"#000000", outline:"0" }} />
          </div>

          

        </form>
        <button style={{
            backgroundColor: '#292F36', color: "#FFFFFF", borderRadius: "18px", boxShadow: "0px 10px 20px rgba(192, 192, 192, 0.35)", fontFamily: "Jost", fontSize: "18px", display: "flex", flexDirection: "column", justifyContent: "center",
            alignItems: "flex-end", flexWrap: "wrap", width: "253px", height: "75px", padding: "26px 0px", marginLeft: "auto", marginTop:"40px"
          }}><div style={{ display: "flex", justifyContent: "space-between", paddingTop: "0px", paddingBottom: "0px", paddingLeft: "51px" }}>Send now</div><img style={{ paddingRight: "61px" }} src='./Images/arrow.png' alt='arrow' /></button>
        </div>

      </div>
      


<div>
  <img  style={{marginLeft:"auto", marginTop:"400px", marginBottom:"169px", width:"1201px", borderRadius:"70px", marginRight: "auto"}} src='./Images/gps.png' alt='location' />
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

export default Contacts
