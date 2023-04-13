import React, { useEffect } from 'react'
import './index.css'
import Footer from './Footer';

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


     <Footer />
        </>
  )
}

export default Changelog
