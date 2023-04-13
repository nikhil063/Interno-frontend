import React, { useEffect } from 'react'
import Footer from './Footer';

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



      <Footer />
      </>
  )
}

export default Licences
