import React, { useEffect } from 'react'
import Footer from './Footer'
import Tagbutton from '../Tagbutton'
import Blackbutton from './Blackbutton'

function Blogdetails() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div style={{ backgroundImage: `url(${require('./Images/projectbanner.png')}`, height: "356px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            </div>



            <div style={{ width: "1201px", marginLeft: "auto", marginRight: "auto", display: "flex", marginTop: "200px", marginBottom:"200px", justifyContent: "space-between" }}>

                <div style={{ width: "804px", height: "2579px" }}>
                    <h1 style={{ fontFamily: "DM serif display", fontSize: "50px", marginBottom: "21px" }}>Let's get solution for building construction work</h1>

                    <img src='/Images/blogdetails1.png' alt='' />

                    <div style={{ display: "flex", justifyContent: "space-between", margin: "46px 0px" }} >
                        <p>26 December 2023</p>
                        <p>Interior/ Decor /Design/ Home</p>
                    </div>

                    <div style={{ height: "236px", textAlign: "justify", fontFamily: "Jost", fontSize: "22px" }}><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.<br /><br />
                        Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p></div>

                    <div style={{ height: "267px", width: "804px", backgroundColor: "#F4F0EC", padding: "53px 227px", borderRadius: "50px", marginTop: "35px" }}>
                        <img src='/Images/blogquote.png' alt='' />
                    </div>

                    <div>
                        <h1 style={{ fontFamily: "DM serif display", fontSize: "50px", padding: "27px 0px 28px " }}>Design sprints are great</h1>
                        <p style={{ fontFamily: "Jost", fontSize: "22px" }}>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p>

                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "32px" }}>
                            <div style={{ fontFamily: "DM serif display", color: "#CDA274", fontSize: "22px", padding: "0px 11px" }}>
                                1
                            </div>
                            <div style={{ fontFamily: "Jost", fontSize: "22px" }}>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "32px" }}>
                            <div style={{ fontFamily: "DM serif display", color: "#CDA274", fontSize: "22px", padding: "0px 11px" }}>
                                2
                            </div>
                            <div style={{ fontFamily: "Jost", fontSize: "22px" }}>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "32px" }}>
                            <div style={{ fontFamily: "DM serif display", color: "#CDA274", fontSize: "22px", padding: "0px 11px" }}>
                                3
                            </div>
                            <div style={{ fontFamily: "Jost", fontSize: "22px" }}>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                            </div>
                        </div>
                    </div>


                    <img style={{ margin: "44px 0px 35px 0px" }} src='/Images/blogdetails2.png' alt='' />
                    <p style={{ fontFamily: "Jost", fontSize: "22px" }}>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p>

                    <div style={{ margin: "106px 0px 137px", display: "flex", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", width: "306px" }}>
                            <p style={{ fontFamily: "DM serif display", fontSize: "20px", padding: "10px 0px" }}>Tags</p>
                            <Tagbutton text="Kitchen" />
                            <Tagbutton text="Bedroom" />
                        </div>
                        <img style={{ width: "225px", height: "25px" }} src='/Images/socials.png' alt='' />
                    </div>
                </div>




                <div style={{ width: "345px" }}>

                    <div style={{display:"flex", justifyContent:"space-between",backgroundColor: "#F4F0EC", borderRadius: "20px", padding: "34px 33px"}} >
                        <input style={{ width: "345px", outline: "0px",backgroundColor: "#F4F0EC" }} type='text' placeholder='Search'></input>
                        <button><img src='/Images/searchicon.png' alt='search' /></button>
                        
                    </div>

                    <div style={{ borderBottomWidth: "2px", borderBottomColor: "#CDA274", textAlign: "left" }}>
                    <h1 style={{ fontFamily: "DM serif display", fontSize: "25px", padding: "10px 0px", fontWeight: "400", marginTop:"33px" }}>Latest News</h1>
                    <p style={{ fontFamily: "DM serif display", fontSize: "20px", padding: "10px 0px", fontWeight: "400", margin: "0px 0px 5px", textAlign: "left" }}>We focus on comfort and gorgeous</p>
                    <p style={{ fontFamily: "Jost", fontSize: "16px", padding: "10px 0px", fontWeight: "400", marginBottom: "6px", marginLeft: "244px" }}>06/02/2023</p>
                </div>
                <div style={{ borderBottomWidth: "2px", borderBottomColor: "#CDA274", textAlign: "left" }}>
                    
                    <p style={{ fontFamily: "DM serif display", fontSize: "20px", padding: "10px 0px", fontWeight: "400", margin: "0px 0px 5px", textAlign: "left" }}>We focus on comfort and gorgeous</p>
                    <p style={{ fontFamily: "Jost", fontSize: "16px", padding: "10px 0px", fontWeight: "400", marginBottom: "6px", marginLeft: "244px" }}>06/02/2023</p>
                    
                </div>
                <div style={{ borderBottomWidth: "2px", borderBottomColor: "#CDA274", textAlign: "left" }}>
                    
                    <p style={{ fontFamily: "DM serif display", fontSize: "20px", padding: "10px 0px", fontWeight: "400", margin: "0px 0px 5px", textAlign: "left" }}>We focus on comfort and gorgeous</p>
                    <p style={{ fontFamily: "Jost", fontSize: "16px", padding: "10px 0px", fontWeight: "400", marginBottom: "6px", marginLeft: "244px" }}>06/02/2023</p>
                    
                </div>


<div style={{padding:"27px 32px", borderRadius:"20px", backgroundColor:"#F4F0EC", height:"359px", margin:"50px 0px"}}>
<p style={{ fontFamily: "DM serif display", fontSize: "20px", padding: "10px 0px", fontWeight: "400", margin: "", textAlign: "left" }}>Categories</p>
                    <p style={{ fontFamily: "Jost", fontSize: "16px", padding: "0px 0px 15px", fontWeight: "400", borderBottomColor:"#CDA274", borderBottomWidth:"2px", margin:"15px 128px 0px 0px", width:"244px" }}>Decoration</p>
                    <p style={{ fontFamily: "Jost", fontSize: "16px", padding: "0px 0px 15px", fontWeight: "400", borderBottomColor:"#CDA274", borderBottomWidth:"2px", margin:"15px 128px 0px 0px", width:"244px" }}>Door windows</p>
                    <p style={{ fontFamily: "Jost", fontSize: "16px", padding: "0px 0px 15px", fontWeight: "400", borderBottomColor:"#CDA274", borderBottomWidth:"2px", margin:"15px 128px 0px 0px", width:"244px" }}>Home land</p>
                    <p style={{ fontFamily: "Jost", fontSize: "16px", padding: "0px 0px 15px", fontWeight: "400", borderBottomColor:"#CDA274", borderBottomWidth:"2px", margin:"15px 128px 0px 0px", width:"244px" }}>Roof installations</p>

</div>



<div style={{ margin: "50px 0px 137px", width:"345px" }}>
                        
                            <p style={{ fontFamily: "DM serif display", fontSize: "20px", padding: "10px 0px" }}>Tags</p>
                            <Tagbutton text="Kitchen" />

                           <Tagbutton text="Bedroom"/>
                           <Tagbutton text="Building"/>
                           <Tagbutton text="Architecture"/>
                           <Tagbutton text="Kitchen planning"/>
                           <Tagbutton text="Bedroom"/>

                           
                           
                      
                    </div>



                </div>
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
<div style={{display:"flex", justifyContent:"center", margin:"25px 0px 0px"}}>
                <Blackbutton label="Send Now" />
            </div>
</div>

<Footer />
        </>
    )
}

export default Blogdetails
