import React, { useEffect } from 'react'
import './index.css'
import Footer from './Footer';
import Blackbutton from './Blackbutton';

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
        <div style={{display:"flex", justifyContent:"end"}}>
          <Blackbutton label="Send Now" />
        </div>
        </div>

      </div>
      


<div>
  <img  style={{marginLeft:"auto", marginTop:"400px", marginBottom:"169px", width:"1201px", borderRadius:"70px", marginRight: "auto"}} src='./Images/gps.png' alt='location' />
</div>

<Footer />
    </>
  )
}

export default Contacts
