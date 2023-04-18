import React, { useEffect } from 'react'
import './index.css'
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Brownbutton from './Brownbutton';

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


      <div style={{marginRight: "auto", marginLeft: "auto"}}>


        <div style={{ display: "flex", justifyContent: "center", marginRight: "auto", marginLeft: "auto", marginTop: "200px",padding:"0px 20px 83px"}} >
        <div style={{ textAlign: "center",padding:"83px 20px 83px", width:"379px" }} >
            <h1 style={{ fontFamily: "DM serif display", fontSize: "25px", fontWeight: "400" }} >Interior Work</h1>
            <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400", paddingBottom: "41px", paddingTop: "23px" }}>It is a long established fact that a reader will be distracted by the of readable content of a page
              when lookings at its layouts the points of using
              that it has a more-or-less normal. </p>
            <Link to='servicesingle'><button style={{ display: "flex", fontFamily: "Jost", fontWeight: "600", fontSize: "20px", marginLeft: "auto", marginRight: "auto" }} >Read more<img style={{paddingTop:"9px", paddingLeft:"9px"}} src='./Images/arrow.png' alt='arrow' /></button></Link>
          </div>


          <div style={{ textAlign: "center",padding:"83px 20px 83px", width:"379px" }} >
            <h1 style={{ fontFamily: "DM serif display", fontSize: "25px", fontWeight: "400" }} >Interior Work</h1>
            <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400", paddingBottom: "41px", paddingTop: "23px" }}>It is a long established fact that a reader will be distracted by the of readable content of a page
              when lookings at its layouts the points of using
              that it has a more-or-less normal. </p>
            <Link to='servicesingle'><button style={{ display: "flex", fontFamily: "Jost", fontWeight: "600", fontSize: "20px", marginLeft: "auto", marginRight: "auto" }} >Read more<img style={{paddingTop:"9px", paddingLeft:"9px"}} src='./Images/arrow.png' alt='arrow' /></button></Link>
          </div>


          <div style={{ textAlign: "center",padding:"83px 20px 83px", width:"379px" }} >
            <h1 style={{ fontFamily: "DM serif display", fontSize: "25px", fontWeight: "400" }} >2d/3d Art Work</h1>
            <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400", paddingBottom: "41px", paddingTop: "23px" }}>It is a long established fact that a reader will be distracted by the of readable content of a page
              when lookings at its layouts the points of using
              that it has a more-or-less normal. </p>
            <Link to='servicesingle'><button style={{ display: "flex", fontFamily: "Jost", fontWeight: "600", fontSize: "20px", marginLeft: "auto", marginRight: "auto" }} >Read more<img style={{paddingTop:"9px", paddingLeft:"9px"}} src='./Images/arrow.png' alt='arrow' /></button></Link>
          </div>



        </div>


        <div style={{ display: "flex", justifyContent: "center", marginRight: "auto", marginLeft: "auto", marginBottom: "200px" }} >
          <div style={{ textAlign: "center",padding:"83px 20px 83px", width:"379px" }} >
            <h1 style={{ fontFamily: "DM serif display", fontSize: "25px", fontWeight: "400" }} >Retail Work</h1>
            <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400", paddingBottom: "41px", paddingTop: "23px" }}>It is a long established fact that a reader will be distracted by the of readable content of a page
              when lookings at its layouts the points of using
              that it has a more-or-less normal. </p>
            <Link to='servicesingle'><button style={{ display: "flex", fontFamily: "Jost", fontWeight: "600", fontSize: "20px", marginLeft: "auto", marginRight: "auto" }} >Read more<img style={{paddingTop:"9px", paddingLeft:"9px"}} src='./Images/arrow.png' alt='arrow' /></button></Link>
          </div>


          <div style={{ textAlign: "center", borderRadius:"30px", backgroundColor:"#F4F0EC", padding:"83px 20px 83px", width:"379px" }} >
            <h1 style={{ fontFamily: "DM serif display", fontSize: "25px", fontWeight: "400" }} >Decoration work</h1>
            <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400", paddingBottom: "41px", paddingTop: "23px" }}>It is a long established fact that a reader will be distracted by the of readable content of a page
              when lookings at its layouts the points of using
              that it has a more-or-less normal. </p>
            <Link to='servicesingle'><button style={{ display: "flex", fontFamily: "Jost", fontWeight: "600", fontSize: "20px", marginLeft: "auto", marginRight: "auto" }} >Read more<img style={{paddingTop:"9px", paddingLeft:"9px"}} src='./Images/arrow.png' alt='arrow' /></button></Link>
          </div>


          <div style={{ textAlign: "center",padding:"83px 20px 83px", width:"379px" }} >
            <h1 style={{ fontFamily: "DM serif display", fontSize: "25px", fontWeight: "400" }} >Retail Design</h1>
            <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400", paddingBottom: "41px", paddingTop: "23px" }}>It is a long established fact that a reader will be distracted by the of readable content of a page
              when lookings at its layouts the points of using
              that it has a more-or-less normal. </p>
            <Link to='servicesingle'><button style={{ display: "flex", fontFamily: "Jost", fontWeight: "600", fontSize: "20px", marginLeft: "auto", marginRight: "auto" }} >Read more<img style={{paddingTop:"9px", paddingLeft:"9px"}} src='./Images/arrow.png' alt='arrow' /></button></Link>
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
          <Link to='/contacts'>
              <div style={{display:"flex", justifyContent:"center"}}>
                <Brownbutton label='Contact With Us' />
              </div>
            </Link>
            </div>
      </div>
      </div>

      <Footer />
    </>
  )
}

export default Services
