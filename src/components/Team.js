import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer';
import './index.css'


export default function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (<>
    <div style={{ backgroundImage: `url(${require('./Images/teambanner.jpg')}`, height: "356px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ marginTop: "178px", backgroundColor: "#ffffff", width: "503px", height: "178px", borderRadius: "37px 37px 0 0", display: "flex", alignItems: "center", textAlign: "center" }}>

        <div style={{ textAlign: "center", paddingLeft: "59px" }}>
          <h1 style={{ fontFamily: "DM serif display", fontSize: "50px", fontWeight: "400" }}>Our Proffessional</h1>
          <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400" }}>
            Home/  Team
          </p>
        </div>
      </div>
    </div>



    <div>
      <div style={{ display: "flex", justifyContent: "center", alignContent: "center", marginTop: "11px" }}>
        <Link to='/team/teamsingle'>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignContent: "center", flexDirection: "column", textAlign: 'center', margin: "11px" }}>
            <img src='./Images/team1.jpg' alt='userimg' style={{ width: "283px", height: "433px", borderRadius: "40px" }} />
            <h1 style={{ fontFamily: "DM serif display", fontSize: "22px", fontWeight: "400", marginTop: "15px" }}>John Smith</h1>
            <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400" }}>
              Home/  Services
            </p>
            <img src='./Images/fbtwitter.png' alt='socials' style={{ width: "57px", height: "21px", marginLeft: "auto", marginRight: "auto", marginTop: "15px" }} />
          </div>

        </Link>


        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignContent: "center", flexDirection: "column", textAlign: 'center', margin: "22px" }}>
          <img src='./Images/team2.png' alt='userimg' style={{ width: "283px", height: "433px", borderRadius: "40px" }} />
          <h1 style={{ fontFamily: "DM serif display", fontSize: "22px", fontWeight: "400", marginTop: "15px" }}>Levi Muewenberg</h1>
          <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400" }}>
            Home/  Services
          </p>
          <img src='./Images/fbtwitter.png' alt='socials' style={{ width: "57px", height: "21px", marginLeft: "auto", marginRight: "auto", marginTop: "15px" }} />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignContent: "center", flexDirection: "column", textAlign: 'center', margin: "22px" }}>
          <img src='./Images/team3.png' alt='userimg' style={{ width: "283px", height: "433px", borderRadius: "40px" }} />
          <h1 style={{ fontFamily: "DM serif display", fontSize: "22px", fontWeight: "400", marginTop: "15px" }}>Nattasha Joulie</h1>
          <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400" }}>
            Home/  Services
          </p>
          <img src='./Images/fbtwitter.png' alt='socials' style={{ width: "57px", height: "21px", marginLeft: "auto", marginRight: "auto", marginTop: "15px" }} />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignContent: "center", flexDirection: "column", textAlign: 'center', margin: "22px" }}>
          <img src='./Images/team4.jpg' alt='userimg' style={{ width: "283px", height: "433px", borderRadius: "40px" }} />
          <h1 style={{ fontFamily: "DM serif display", fontSize: "22px", fontWeight: "400", marginTop: "15px" }}>Nora Owen</h1>
          <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400" }}>
            Home/  Services
          </p>
          <img src='./Images/fbtwitter.png' alt='socials' style={{ width: "57px", height: "21px", marginLeft: "auto", marginRight: "auto", marginTop: "15px" }} />
        </div>


      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignContent: "center", flexDirection: "column", textAlign: 'center', margin: "11px" }}>
            <img src='./Images/team5.png' alt='userimg' style={{ width: "283px", height: "433px", borderRadius: "40px" }} />
            <h1 style={{ fontFamily: "DM serif display", fontSize: "22px", fontWeight: "400", marginTop: "15px" }}>Avery Jackson</h1>
            <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400" }}>
              Home/  Services
            </p>
            <img src='./Images/fbtwitter.png' alt='socials' style={{ width: "57px", height: "21px", marginLeft: "auto", marginRight: "auto", marginTop: "15px" }} />
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignContent: "center", flexDirection: "column", textAlign: 'center', margin: "22px" }}>
            <img src='./Images/team6.jpg' alt='userimg' style={{ width: "283px", height: "433px", borderRadius: "40px" }} />
            <h1 style={{ fontFamily: "DM serif display", fontSize: "22px", fontWeight: "400", marginTop: "15px" }}>Sofia Carter</h1>
            <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400" }}>
              Home/  Services
            </p>
            <img src='./Images/fbtwitter.png' alt='socials' style={{ width: "57px", height: "21px", marginLeft: "auto", marginRight: "auto", marginTop: "15px" }} />
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignContent: "center", flexDirection: "column", textAlign: 'center', margin: "22px" }}>
            <img src='./Images/team7.png' alt='userimg' style={{ width: "283px", height: "433px", borderRadius: "40px" }} />
            <h1 style={{ fontFamily: "DM serif display", fontSize: "22px", fontWeight: "400", marginTop: "15px" }}>Luna James</h1>
            <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400" }}>
              Home/  Services
            </p>
            <img src='./Images/fbtwitter.png' alt='socials' style={{ width: "57px", height: "21px", marginLeft: "auto", marginRight: "auto", marginTop: "15px" }} />
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignContent: "center", flexDirection: "column", textAlign: 'center', margin: "22px" }}>
            <img src='./Images/team8.png' alt='userimg' style={{ width: "283px", height: "433px", borderRadius: "40px" }} />
            <h1 style={{ fontFamily: "DM serif display", fontSize: "22px", fontWeight: "400", marginTop: "15px" }}>Gianna Mateo</h1>
            <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400" }}>
              Home/  Services
            </p>
            <img src='./Images/fbtwitter.png' alt='socials' style={{ width: "57px", height: "21px", marginLeft: "auto", marginRight: "auto", marginTop: "15px" }} />
          </div>


        </div>
      </div>
    </div>

<Footer />
  </>
  )
}
