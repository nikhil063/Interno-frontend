import React, { useEffect } from 'react'
import './index.css'
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Blackbutton from './Blackbutton';
import Brownbutton from './Brownbutton';


function Mainpage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div style={{
        backgroundImage: `url(${require('./Images/Photo.png')})`,
        width: `1201px`,
        height: `758px`,
        borderRadius: `70px`,
        marginLeft: 'auto',
        marginRight: "auto",
        marginTop: '57px'
      }}> <div style={{
        fontFamily: "DM serif display",
        fontSize: '65px',
        fontWeight: "400",
        paddingTop: '208px',
        paddingLeft: '52px'
      }}>
          Let Your Home<br />Be Unique

          <p style={{
            fontFamily: "Jost",
            fontSize: '22px',
            width: '433px',
            fontWeight: "400",
            paddingTop: '18px',
            paddingLeft: '0'
          }}>There are many variations of the passages of
            lorem Ipsum fromavailable, majority.</p>
          <div style={{ paddingTop: "21px" }}>
            <Link to='/pricing'>
              <Blackbutton label="Get Started" />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex content-evenly" style={{ padding: "200px 381px 0", textAlign: "center" }}>
        <div style={{
          width: "358px",
          height: "225px", marginRight: "42px"
        }}>
          <h1 style={{ fontFamily: 'DM serif display', fontSize: "25px", fontWeight: "400", paddingBottom: "20px" }}>Project Plan</h1>
          <p style={{ fontFamily: 'Jost', fontSize: "20px", fontWeight: "400", paddingBottom: "52px" }}>There are many variations of the passages of lorem Ipsum from
            available, majority.</p>
          <Link to='/faq'><button style={{ display: "flex", fontFamily: "Jost", fontWeight: "600", fontSize: "20px", marginLeft: "auto", marginRight: "auto" }} >Read more<img style={{ paddingTop: "9px", paddingLeft: "9px" }} src='./Images/arrow.png' alt='arrow' /></button></Link>
        </div>
        <div style={{
          width: "358px",
          height: "225px", marginLeft: 'auto',
          marginRight: "auto"
        }}>
          <h1 style={{ fontFamily: 'DM serif display', fontSize: "25px", fontWeight: "400", paddingBottom: "20px" }}>Interior work</h1>
          <p style={{ fontFamily: 'Jost', fontSize: "20px", fontWeight: "400", paddingBottom: "52px" }}>There are many variations of the passages of lorem Ipsum from
            available, majority.</p>
            <Link to='/faq'><button style={{ display: "flex", fontFamily: "Jost", fontWeight: "600", fontSize: "20px", marginLeft: "auto", marginRight: "auto" }} >Read more<img style={{ paddingTop: "9px", paddingLeft: "9px" }} src='./Images/arrow.png' alt='arrow' /></button></Link>
        </div>
        <div style={{
          width: "358px",
          height: "225px", marginRight: "42px"
        }}>
          <h1 style={{ fontFamily: 'DM serif display', fontSize: "25px", fontWeight: "400", paddingBottom: "20px" }}>Realization</h1>
          <p style={{ fontFamily: 'Jost', fontSize: "20px", fontWeight: "400", paddingBottom: "52px" }}>There are many variations of the passages of lorem Ipsum from
            available, majority.</p>
            <Link to='/faq'><button style={{ display: "flex", fontFamily: "Jost", fontWeight: "600", fontSize: "20px", marginLeft: "auto", marginRight: "auto" }} >Read more<img style={{ paddingTop: "9px", paddingLeft: "9px" }} src='./Images/arrow.png' alt='arrow' /></button></Link>
        </div>
      </div>

      <div style={{ display: "flex", marginLeft: "auto", marginRight: "auto", width: "1201px", height: "700px", marginTop: "200px", marginBottom: "200px" }}>
        <div style={{
          width: "472px", marginLeft: 'auto',
          marginRight: "auto"
        }}>
          <h1 style={{ fontFamily: "DM serif display", fontSize: "50px", fontWeight: "400", lineHeight: "125%", paddingBottom: "33px" }}>We Create The Art
            Of Stylish Living
            Stylishly</h1>
          <p style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400", paddingBottom: "45px" }}>It is a long established fact that a reader will be distracted by the of readable content of a page
            when lookings at its layouts the points of using
            that it has a more-or-less normal.</p>
          <div>
            <div style={{ display: "flex" }}>
              <button style={{ paddingRight: "15px", paddingBottom: "47px" }}><img src='./Images/Callicon.png' alt='call' /></button>
              <div>
                <h1 style={{ fontFamily: "Jost", fontSize: "24px", fontWeight: "700" }}>012345678</h1>
                <p style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400", paddingBottom: "47px" }}>Call us now</p>
              </div>
            </div>
          </div>
          <div style={{ paddingTop: "26px 48px" }}>
          <Link to='/contacts'>
            <Blackbutton label="Get Free Estimate" />
          </Link>
          </div>
        </div>
        <div>
          <img src='./Images/Imageside.png' alt='img' style={{ height: "700px", width: "653px" }} />
        </div>
      </div>

      <div style={{ margin: "0 360px", backgroundColor: "#F4F0EC", width: "1199px", height: "679px", borderRadius: "70px", textAlign: "justify", marginLeft: 'auto', marginRight: "auto" }}>
        <h1 style={{ fontFamily: "DM serif display", fontWeight: "400", fontSize: "50px", padding: "88px 326px 38px", textAlign: "center" }}>What The People Think About Us</h1>

        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div style={{ padding: "37px 53px", backgroundColor: "#ffffff", borderRadius: "15px", width: "370px", height: "339px" }}>
            <div style={{ display: "flex" }} >
              <img style={{ paddingRight: "15px", width: "77px" }} src='./Images/user1.png' alt='usericon' />
              <div>
                <h1 style={{ fontFamily: "DM serif display", fontSize: "22px", fontWeight: "400" }}>Nattasha Mith </h1>
                <p style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400", color: "#4D5053" }}>Sydney, USA</p>
              </div>
            </div>
            <p style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400", lineHeight: "150%", color: "#4D5053", width: "296px", height: "132px", paddingRight: "25px", paddingTop: "25px" }} >Lorem Ipsum is simply dummy
              text of the typesetting industry.
              Ipsum has been scrambled it
              to make a type book.</p>
          </div>
          <div style={{ padding: "37px 53px", backgroundColor: "#ffffff", borderRadius: "15px", width: "370px", height: "339px" }}>
            <div style={{ display: "flex" }} >
              <img style={{ paddingRight: "15px", width: "77px" }} src='./Images/user2.png' alt='usericon' />
              <div>
                <h1 style={{ fontFamily: "DM serif display", fontSize: "22px", fontWeight: "400" }}>Benny Roll</h1>
                <p style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400", color: "#4D5053" }}>Sydney, Australia</p>
              </div>
            </div>
            <p style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400", lineHeight: "150%", color: "#4D5053", width: "296px", height: "132px", paddingRight: "25px", paddingTop: "25px" }} >Lorem Ipsum is simply dummy
              text of the typesetting industry.
              Ipsum has been scrambled it
              to make a type book.</p>
          </div>
          <div style={{ padding: "37px 53px", backgroundColor: "#ffffff", borderRadius: "15px", width: "370px", height: "339px" }}>
            <div style={{ display: "flex" }} >
              <img style={{ paddingRight: "15px", width: "77px" }} src='./Images/user3.png' alt='usericon' />
              <div>
                <h1 style={{ fontFamily: "DM serif display", fontSize: "22px", fontWeight: "400" }}>Raymond Galario </h1>
                <p style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400", color: "#4D5053" }}>Sydney, New York</p>
              </div>
            </div>
            <p style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400", lineHeight: "150%", color: "#4D5053", width: "296px", height: "132px", paddingRight: "25px", paddingTop: "25px" }} >Lorem Ipsum is simply dummy
              text of the typesetting industry.
              Ipsum has been scrambled it
              to make a type book.</p>
          </div>
        </div>

      </div>

      <img src='./Images/Clientlogo.png' alt='clientlogo' style={{ padding: "150px", marginLeft: "auto", marginRight: "auto" }} />



      <div style={{ marginLeft: "auto", marginRight: "auto", marginBottom: "93px" }} >
        <h1 style={{ fontFamily: "DM serif display", fontSize: "50px", fontWeight: "400", textAlign: "center" }} >Follow Our Projects</h1>
        <p style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400", textAlign: "center", width: "737px", marginLeft: "auto", marginRight: "auto" }} >It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
      </div>




      <div style={{ display: "flex", flexWrap: "wrap", width: "1120px", marginLeft: "auto", marginRight: "auto", justifyContent: "center" }}>


        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "25px", width: "1120px" }}>
          <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", marginRight: "70px" }} >
            <img src='./Images/dispy.png' alt='display' style={{ borderRadius: "0px", width: "525px" }} />
            <div style={{ display: "flex", paddingTop: "24px", justifyContent: "space-evenly" }} >
              <div style={{ width: "455px" }}>
                <h1 style={{ fontFamily: "DM serif display", fontSize: "22px", fontWeight: "400" }}>Modern Kitchen</h1>
                <p style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400" }}>Decor/ Architecture</p>
              </div>
              <div style={{ width: "70px" }}> 
              <Link to='project'><button ><img style={{ width: "70px", height:"70px" }} src='./Images/buttonarrow.png' alt='icon' /></button></Link>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", marginRight: "70px" }} >
            <div><img src='./Images/dispy2.png' alt='display' style={{ borderRadius: "0px", width: "525px" }} /></div>
            <div style={{ display: "flex", paddingTop: "24px", justifyContent: "space-evenly" }} >
              <div style={{ width: "455px" }}>
                <h1 style={{ fontFamily: "DM serif display", fontSize: "22px", fontWeight: "400" }}>Modern Kitchen</h1>
                <p style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400" }}>Decor/ Architecture</p>
              </div>
              <div style={{ width: "70px" }}> <Link to='project'><button ><img style={{ width: "70px", height:"70px" }} src='./Images/buttonarrow.png' alt='icon' /></button></Link></div>
            </div>
          </div>
        </div>


        <div style={{ display: "flex", justifyContent: "space-between", width: "1120px" }}>
          <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", marginRight: "70px" }} >
            <div><img src='./Images/dispy3.png' alt='display' style={{ borderRadius: "0px", width: "525px" }} /></div>
            <div style={{ display: "flex", paddingTop: "24px", justifyContent: "space-evenly" }} >
              <div style={{ width: "455px" }}>
                <h1 style={{ fontFamily: "DM serif display", fontSize: "22px", fontWeight: "400" }}>Modern Kitchen</h1>
                <p style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400" }}>Decor/ Architecture</p>
              </div>
              <div style={{ width: "70px" }}> <Link to='project'><button ><img style={{ width: "70px", height:"70px" }} src='./Images/buttonarrow.png' alt='icon' /></button></Link></div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", marginRight: "70px" }} >
            <div><img src='./Images/dispy4.png' alt='display' style={{ borderRadius: "0px", width: "525px" }} /></div>
            <div style={{ display: "flex", paddingTop: "24px", justifyContent: "space-evenly" }} >
              <div style={{ width: "455px" }}>
                <h1 style={{ fontFamily: "DM serif display", fontSize: "22px", fontWeight: "400" }}>Modern Kitchen</h1>
                <p style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400" }}>Decor/ Architecture</p>
              </div>
              <div style={{ width: "70px" }}> <Link to='project'><button ><img style={{ width: "70px", height:"70px" }} src='./Images/buttonarrow.png' alt='icon' /></button></Link></div>
            </div>
          </div>
        </div>

      </div>

      <img src='./Images/Counter.png' alt='container' style={{ width: "100%", marginTop: "200px" }} />


      <div style={{ marginLeft: "auto", marginRight: "auto", marginBottom: "93px" }} >
        <h1 style={{ fontFamily: "DM serif display", fontSize: "50px", fontWeight: "400", color: "#000000", textAlign: "center", margin: "200px 0px 0px" }} >Article & News</h1>
        <p style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400", textAlign: "center", width: "737px", marginRight: "auto", marginLeft: "auto" }} >It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <div style={{ width: "382px", height: "521px", backgroundColor: "#FFFFFF", borderRadius: "62px" }}>
          <img style={{ padding: "21px 21px 0" }} src='./Images/half1.png' alt='card' />
          <div>
            <h1 style={{ fontFamily: "DM serif display", fontSize: "25px", fontWeight: "400", padding: "21px 21px 5px" }} >Let’s Get Solution For Building Construction Work</h1>
            <div style={{ display: "flex", width: "340px", paddingLeft: "21px", paddingTop: "30px" }}>
              <p style={{ fontFamily: "Jost", fontSize: "16px", fontWeight: "400", width: "737px", paddingTop: "21px" }} >26 December, 2022</p>
              <button ><img style={{ width: "180px" }} src='./Images/buttonarrow.png' alt='button' /></button>
            </div>
          </div>
        </div>

        <div style={{ width: "382px", height: "521px", backgroundColor: "#E7E7E7", borderRadius: "62px" }}>
          <img style={{ padding: "21px 21px 0" }} src='./Images/half1.png' alt='card' />
          <div>
            <h1 style={{ fontFamily: "DM serif display", fontSize: "25px", fontWeight: "400", padding: "21px 21px 5px" }} >Let’s Get Solution For Building Construction Work</h1>
            <div style={{ display: "flex", width: "340px", paddingLeft: "21px", paddingTop: "30px" }}>
              <p style={{ fontFamily: "Jost", fontSize: "16px", fontWeight: "400", width: "737px", paddingTop: "21px" }} >26 December, 2022</p>
              <button ><img style={{ width: "180px" }} src='./Images/whitearrow.png' alt='button' /></button>
            </div>
          </div>
        </div>

        <div style={{ width: "382px", height: "521px", backgroundColor: "#FFFFFF", borderRadius: "62px" }}>
          <img style={{ padding: "21px 21px 0" }} src='./Images/half1.png' alt='card' />
          <div>
            <h1 style={{ fontFamily: "DM serif display", fontSize: "25px", fontWeight: "400", padding: "21px 21px 5px" }} >Let’s Get Solution For Building Construction Work</h1>
            <div style={{ display: "flex", width: "340px", paddingLeft: "21px", paddingTop: "30px" }}>
              <p style={{ fontFamily: "Jost", fontSize: "16px", fontWeight: "400", width: "737px", paddingTop: "21px" }} >26 December, 2022</p>
              <button ><img style={{ width: "180px" }} src='./Images/buttonarrow.png' alt='button' /></button>
            </div>
          </div>
        </div>

      </div>

      <div style={{ width: "1199px", height: "374px", backgroundColor: "#292F36", borderRadius: "70px", marginTop: "202px", textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
        <div style={{ paddingTop: "80px" }} >
          <h1 style={{ fontFamily: "DM serif display", fontSize: "50px", fontWeight: "400", color: "#FFFFFF" }} >Article & News</h1>
          <p style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400", color: "#FFFFFF" }} >It is a long established fact that a reader will be distracted</p>


          <div style={{ paddingTop: "21px" }}>
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

export default Mainpage
