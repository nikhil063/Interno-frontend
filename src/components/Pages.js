import React, { useEffect } from 'react'
import './index.css'
import Footer from './Footer';

function Pages() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div style={{ backgroundImage: `url(${require('./Images/pagesbanner.png')}`, height: "356px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ marginTop: "178px", backgroundColor: "#ffffff", width: "503px", height: "178px", borderRadius: "37px 37px 0 0", display: "flex", alignItems: "center", textAlign: "center" }}>

          <div style={{ textAlign: "center", paddingLeft: "90px" }}>
            <h1 style={{ fontFamily: "DM serif display", fontSize: "50px", fontWeight: "400" }}>Restricted Page</h1>
            <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400" }}>
              Home/ Restricted Page
            </p>
          </div>
        </div>
      </div>



      <div style={{ marginLeft: "auto", marginRight: "auto", width: "1201px", height: "671px", backgroundColor: "#F4F0EC", borderRadius: "70px", padding: "154px 240px", marginTop: "200px", marginBottom: "200px" }}>
        <h1 style={{ fontFamily: "DM serif display", fontSize: "50px", fontWeight: "400", textAlign: "center", marginBottom: "16px" }}>Password Protected</h1>
        <p style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400", textAlign: "center" }}>This page is password protected. If you are the website admin, or have access to this page, type your password below.</p>
        <form>
          <input type='password' placeholder='Enter your password' style={{
            fontFamily: "Jost", fontSize: "20px", fontWeight: "400", color: "#000000", width: "482px", height: "45px", backgroundColor: "#F4F0EC", marginLeft: "118px", marginRight: "118px", marginTop: "50px", marginBottom: "41px", borderBottomWidth:"3px", borderBottomColor:"#000000", outline:"0"
          }} />


        </form>
        <button style={{
          backgroundColor: '#292F36', color: "#FFFFFF", borderRadius: "18px", boxShadow: "0px 10px 20px rgba(192, 192, 192, 0.35)", fontFamily: "Jost", fontSize: "18px", display: "flex", flexDirection: "column", justifyContent: "center",
          alignItems: "flex-end", flexWrap: "wrap", width: "253px", height: "75px", padding: "26px 0px", marginLeft: "auto", marginRight: "auto"
        }}><div style={{ display: "flex", justifyContent: "space-between", paddingTop: "0px", paddingBottom: "0px", paddingLeft: "51px" }}>Get Started</div><img style={{ paddingRight: "61px" }} src='./Images/arrow.png' alt='arrow' /></button>
      </div>

  <Footer/ >
    </>
  )
}

export default Pages
