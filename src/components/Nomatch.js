import React, { useEffect } from 'react'
import './main.css'
import { Link } from 'react-router-dom';

function Nomatch() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{display:"flex"}}>
    <div style={{width:"50%", marginLeft:"360px",marginTop:"309px", paddingRight:"41px"}}>
      <img src='../Images/404.png' alt='404' />
        <h1 style={{fontFamily: "DM serif display", fontSize: "35px", fontWeight: "400",padding:"40px 0px"}} >We are sorry, but the page you  requested was not found </h1>
        <Link to='/'>
          <button style={{
              backgroundColor: '#292F36', color: "#FFFFFF",  borderRadius: "18px", boxShadow: "0px 10px 20px rgba(192, 192, 192, 0.35)", fontFamily: "Jost", fontSize: "18px", display: "flex", flexDirection: "column", justifyContent: "center",
              alignItems:"flex-end",flexWrap:"wrap", width: "240px", height: "75px", padding: "26px 33px",
            }}><div style={{display:"flex",justifyContent: "space-between", paddingTop:"0px",paddingBottom:"0px", paddingLeft:"20px"}}>Back To Home</div><img style={{paddingLeft:"15px", width:"39px"}} src='/Images/arrow.png' alt='arrow' /></button>
        </Link>
    </div>
        <img style={{width:"50%", borderRadius:"0 0 0 353px"}} src='../Images/errorimg.jpg' alt='' />
    </div>
  )
}

export default Nomatch
