import React, { useEffect } from 'react'
import Footer from './Footer';
import Dropdown2 from './Dropdown2';

function Teamsingle() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div style={{ backgroundImage: `url(${require('./Images/teamainglebanner.jpg')}`, height: "356px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ marginTop: "178px", backgroundColor: "#ffffff", width: "503px", height: "178px", borderRadius: "37px 37px 0 0", display: "flex", alignItems: "center", textAlign: "center" }}>

          <div style={{ textAlign: "center", paddingLeft: "35px" }}>
            <h1 style={{ fontFamily: "DM serif display", fontSize: "50px", fontWeight: "400" }}>Proffessional Single</h1>
            <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400" }}>
              Home/ Team Single
            </p>
          </div>
        </div>
      </div>
      <div style={{ width: "1201px", height: "689px", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "auto", marginRight: "auto", marginTop: "200px", marginBottom: "200px" }}>
        <img src='/Images/teamsingle.png' alt='user' />
        <div style={{ padding: "67px 59px" }}>
          <h1 style={{ fontFamily: "DM serif display", fontSize: "50px", fontWeight: "400" }}>John Smith</h1>
          <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400", padding: "30px 0px 32px" }}>
            Designer
            <br />
            <br />
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrpobelie frandomised words which don't look even slightly believable.
          </p>
          <ul style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400", color: "#4D5053", flexDirection: "column", display: "flex", lineHeight: "10px", width: "300px" }}>

            <li><div style={{ display: "flex", flexWrap: "wrap", alignContent: "center", justifyContent: "flex-start" }}><img src='/Images/callicon2.png' alt='callicon' /><p style={{ paddingTop: "15px", paddingLeft: "10px" }}>+1 (132) 400-4545</p></div></li>

            <li><div style={{ display: "flex", flexWrap: "wrap", alignContent: "center", justifyContent: "flex-start" }}><img src='/Images/msgicon.png' alt='message' /><p style={{ paddingTop: "15px", paddingLeft: "10px" }}>yourdomain.com</p></div></li>

            <li><div style={{ display: "flex", flexWrap: "wrap", alignContent: "center", justifyContent: "flex-start" }}><img src='/Images/linkicon.png' alt='link' /><p style={{ paddingTop: "15px", paddingLeft: "10px" }}>info@yourdomain.com</p></div></li>

            <li><img src='/Images/socialicon.png' alt='socials' /></li>

          </ul>
        </div>
      </div>

      <div style={{ width: "1201px", marginLeft: "auto", marginRight: "auto", marginTop: "200px", marginBottom: "200px" }}>
        <h1 style={{ fontFamily: "DM serif display", fontSize: "50px", fontWeight: "400" }}>Short Biography</h1>
        <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400", padding: "30px 0px 32px" }}>
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, njecthumour
          randomised words which don't look even slightly believable.
          <br />
          <br />
          Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined but the majority have suffered alteration in some form chunks as necessary.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent:"center", alignContent:"center",width: "1201px", marginLeft:"auto", marginRight:"auto" }}>

        <div style={{width:"50%"}} >
          <h1 style={{ fontFamily: "DM serif display", fontSize: "22px", fontWeight: "400" }}>Simplicity and functionality</h1>
          <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400", paddingTop:"40px" }}>
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.
            <br />
            <br />
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, njecthumour.
          </p>
          <img src='/Images/noslider.png' alt='not a slider' style={{width:"483px", marginTop:"40px"}} />
        </div>

        <div style={{ width:"50%", paddingLeft:"40px" }}>
        <h1 style={{ fontFamily: "DM serif display", fontSize: "22px", fontWeight: "400" }}>Question and Answer</h1>
        <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400" , padding: "30px 0px 32px"}}>
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.</p>
          <Dropdown2 label="Website & Mobile App Design">
            <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.</p>
          </Dropdown2>
          <Dropdown2 label="How To Easy Succesful Design?">
            <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.</p>
          </Dropdown2>
          <Dropdown2 label="International Trade Experience?">
            <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.</p>
          </Dropdown2>
        </div>
      </div>

<div style={{ width: "100%", backgroundColor: "#F4F0EC", height: "968px", marginTop: "173px", marginBottom: "213px" }}>
<h1 style={{ fontFamily: "DM serif display", fontSize: "50px", fontWeight: "400", textAlign: "center", paddingTop: "185px", paddingBottom:"30px" }} >Our Team Members</h1>

<img src='/Images/comments.png' alt='users' style={{ marginRight: "auto", marginLeft: "auto" }} />
</div>


<div style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400", width: "796px", marginLeft: "auto", marginRight:"auto"  }}>
<form style={{ marginBottom: "77px" }}>
<h1 style={{ fontFamily: "DM serif display", fontSize: "50px", fontWeight: "400", textAlign: "center",  paddingBottom:"70px" }} >Contact us</h1>
<div style={{ marginRight: "auto", marginLeft: "auto", display: "flex", flexDirection: "column", width: "796px" }}>
  <div style={{width: "796px" }}>
    <input type='text' placeholder='Name' style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400", paddingBottom: "41px", paddingTop: "23px", color: "#000000", width: "378px", borderBottomWidth:"3px", borderBottomColor:"#000000", outline:"0" , marginRight:"15px"}} />

    <input type='text' placeholder='Email' style={{
      fontFamily: "Jost", fontSize: "20px", fontWeight: "400", paddingBottom: "41px", paddingTop: "23px", color: "#000000", width: "378px", borderBottomWidth:"3px", borderBottomColor:"#000000", outline:"0"
    }} />
  </div>

    <input type='text' placeholder='Send your message' style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400", paddingBottom: "41px", paddingTop: "23px", color: "#000000", width: "796px", marginRight: "auto", marginLeft: "auto", height: "277px", borderBottomWidth:"3px", borderBottomColor:"#000000", outline:"0" }} />

    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
    <input type='checkbox' style={{width:"17px", marginRight:"15px", border: "2px solid #CDA274"}} /><p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400" , padding: "30px 0px 32px", color:"#CDA274"}}>Save my name, email and website in the browser for when I next comment</p>
  </div>
</div>

</form>
<button style={{
  backgroundColor: '#292F36', color: "#FFFFFF", borderRadius: "18px", boxShadow: "0px 10px 20px rgba(192, 192, 192, 0.35)", fontFamily: "Jost", fontSize: "18px", display: "flex", flexDirection: "column", justifyContent: "center",
  alignItems: "flex-end", flexWrap: "wrap", width: "253px", height: "75px", padding: "26px 0px", marginLeft: "auto", marginRight:"auto", marginTop:"40px"
}}><div style={{ display: "flex", justifyContent: "space-between", paddingTop: "0px", paddingBottom: "0px", paddingLeft: "51px" }}>Send now</div><img style={{ paddingRight: "61px" }} src='/Images/arrow.png' alt='arrow' /></button>
</div>






<Footer />
    </>
  )
}

export default Teamsingle;
