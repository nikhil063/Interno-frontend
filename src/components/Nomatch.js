import React, { useEffect } from 'react'
import './index.css'
import { Link } from 'react-router-dom';
import Blackbutton from './Blackbutton';

function Nomatch() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{display:"flex"}}>
    <div style={{width:"53%", marginLeft:"auto", marginRight:"auto"}}>
      <div style={{marginLeft:"auto", marginRight:"81px", width:"569px",marginTop:"309px", height:"424px"}}>
        
        <h1 style={{fontFamily:"DM serif display", color:"#CDA274", fontWeight:"400", fontSize:"250px",  height:"280px"}}>404</h1>
          <h1 style={{fontFamily: "DM serif display", fontSize: "35px", fontWeight: "400",padding:"15px 0px 23px", lineHeight:"125%"}} >We are sorry, but the page you  requested was not found </h1>
          <Link to='/'>
          <Blackbutton label="Back To Home" />
          </Link>
      </div>
    </div>
        <img style={{width:"47%", borderRadius:"0 0 0 353px", margin:"0px"}} src='/Images/errorimg.jpg' alt='' />
    </div>
  )
}

export default Nomatch
