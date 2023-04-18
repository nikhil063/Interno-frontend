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
    <div style={{width:"50%", marginLeft:"360px",marginTop:"309px", paddingRight:"41px"}}>
      <img src='/Images/404.png' alt='404' />
        <h1 style={{fontFamily: "DM serif display", fontSize: "35px", fontWeight: "400",padding:"40px 0px"}} >We are sorry, but the page you  requested was not found </h1>
        <Link to='/'>
        <Blackbutton label="Back To Home" />
        </Link>
    </div>
        <img style={{width:"50%", borderRadius:"0 0 0 353px"}} src='/Images/errorimg.jpg' alt='' />
    </div>
  )
}

export default Nomatch
