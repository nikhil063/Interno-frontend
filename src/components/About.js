import React, { useEffect } from 'react'
import './index.css'
import Footer from './Footer';


const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div style={{ backgroundImage: `url(${require('./Images/banner.png')}`, height: "356px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ marginTop: "178px", backgroundColor: "#ffffff", width: "503px", height: "178px", borderRadius: "37px 37px 0 0", display: "flex", alignItems: "center", textAlign: "center" }}>

          <div style={{ textAlign: "center", paddingLeft: "152px" }}>
            <h1 style={{ fontFamily: "DM serif display", fontSize: "50px", fontWeight: "400" }}>About Us</h1>
            <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400" }}>
              Home/ About us
            </p>
          </div>
        </div>
      </div>

      <div>
        <img src='./Images/Quotes.png' alt="quote" style={{ paddingTop: "200px", marginRight: "auto", marginLeft: "auto" }} />
      </div>

      <div style={{ width: "100%", height: "377px", paddingTop: "200px", display: "flex", justifyContent: "center", alignContent: "center", boxSizing: "content-box", marginRight: "auto", marginLeft: "auto", marginBottom:"150px" }}>
        <div id="text" style={{ paddingRight: "41px", width: "500px" }}>
          <h1 style={{ fontFamily: "DM serif display", fontSize: "50px", fontWeight: "400" }} >What we do</h1>
          <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400", paddingBottom: "41px", paddingTop: "23px" }}>It is a long established fact that a reader will be distracted by the of readable content of a page
            when lookings at its layouts the points of using
            that it has a more-or-less normal. </p>
            <button style={{
            backgroundColor: '#292F36', color: "#FFFFFF",  borderRadius: "18px", boxShadow: "0px 10px 20px rgba(192, 192, 192, 0.35)", fontFamily: "Jost", fontSize: "18px", display: "flex", flexDirection: "column", justifyContent: "center",
            alignItems:"flex-end",flexWrap:"wrap", width: "253px", height: "75px", padding: "26px 0px", marginRight:"auto"
          }}><div style={{display:"flex",justifyContent: "space-between", paddingTop:"0px",paddingBottom:"0px", paddingLeft:"51px"}}>Our concept</div><img style={{paddingRight:"61px"}} src='./Images/arrow.png' alt='arrow' /></button>
        </div>

        <img src='./Images/q1.jpg' alt="quotes" style={{ width: "659px", height: "377px", borderRadius: "70px 70px 70px 70px" }} />

      </div>


      <div style={{ marginRight: "360px", width: "100%", height: "377px", display: "flex", margin: "0px", justifyContent: "center", alignContent: "center", boxSizing: "content-box", marginBottom:"0px" }}>

        <img src='./Images/q2.jpg' alt="quotes" style={{ width: "659px", height: "377px", borderRadius: "70px 70px 70px 70px" }} />


        <div id="text" style={{ paddingLeft: "41px", width: "500px" }}>
          <h1 style={{ fontFamily: "DM serif display", fontSize: "50px", fontWeight: "400" }} >The end Result</h1>
          <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400", paddingBottom: "41px", paddingTop: "23px" }}>It is a long established fact that a reader will be distracted by the of readable content of a page
            when lookings at its layouts the points of using
            that it has a more-or-less normal. </p>
            <button style={{
            backgroundColor: '#292F36', color: "#FFFFFF",  borderRadius: "18px", boxShadow: "0px 10px 20px rgba(192, 192, 192, 0.35)", fontFamily: "Jost", fontSize: "18px", display: "flex", flexDirection: "column", justifyContent: "center",
            alignItems:"flex-end",flexWrap:"wrap", width: "253px", height: "75px", padding: "26px 0px", marginRight:"auto"
          }}><div style={{display:"flex",justifyContent: "space-between", paddingTop:"0px",paddingBottom:"0px", paddingLeft:"51px"}}>Our Portfolio</div><img style={{paddingRight:"61px"}} src='./Images/arrow.png' alt='arrow' /></button>
        </div>
      </div>


      <div style={{ width: "100%", backgroundColor: "#F4F0EC", height: "968px", marginTop: "173px", marginBottom: "213px" }}>
        <h1 style={{ fontFamily: "DM serif display", fontSize: "50px", fontWeight: "400", textAlign: "center", paddingTop: "185px", paddingBottom:"70px" }} >What People Think About Us</h1>
        <img src='./Images/comments.png' alt='users' style={{ marginRight: "auto", marginLeft: "auto" }} />
      </div>


      <h1 style={{ fontFamily: "DM serif display", fontSize: "50px", fontWeight: "400", textAlign: "center", paddingTop: "185px", width: "634px", marginRight: "auto", marginLeft: "auto" }}> Creative project? Let's have
        a productive talk.</h1>
      <form style={{marginBottom:"77px"}}>
        <div style={{ marginRight: "auto", marginLeft: "auto", display: "flex", flexDirection: "column", width:"796px"  }}>
          <div style={{ marginRight: "auto", marginLeft: "auto", width:"796px"}}>
            <input type='text' placeholder='Name' style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400", paddingBottom: "41px", paddingTop: "23px", color: "#000000", width:"378px", outline:"0px", borderBottomWidth:"3px", borderBottomColor:"#000000" }} />

            <input type='text' placeholder='Email' style={{fontFamily: "Jost", fontSize: "20px", fontWeight: "400", paddingBottom: "41px", paddingTop: "23px",marginLeft:"15px", color: "#000000", width:"378px", outline:"0px", borderBottomWidth:"3px", borderBottomColor:"#000000"
            }} />
          </div>

          <input type='text' placeholder='Hello I am Interested In...' style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400", paddingBottom: "41px", paddingTop: "23px", color: "#000000", width: "796px", marginRight: "auto", marginLeft: "auto", height: "277px", borderBottomWidth:"3px", borderBottomColor:"#000000", outline:"0" }} />
        </div>

        <button style={{
            backgroundColor: '#292F36', color: "#FFFFFF",  borderRadius: "18px", boxShadow: "0px 10px 20px rgba(192, 192, 192, 0.35)", fontFamily: "Jost", fontSize: "18px", display: "flex", flexDirection: "column", justifyContent: "center",
            alignItems:"flex-end",flexWrap:"wrap", width: "253px", height: "75px", padding: "26px 0px",marginLeft:"auto", marginRight:"auto", marginTop:"40px"
          }}><div style={{display:"flex",justifyContent: "space-between", paddingTop:"0px",paddingBottom:"0px", paddingLeft:"51px"}}>Send now</div><img style={{paddingRight:"61px"}} src='./Images/arrow.png' alt='arrow' /></button>

      </form>

      <Footer />

    </>
  )
}

export default About;
