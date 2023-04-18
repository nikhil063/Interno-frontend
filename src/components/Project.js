import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer';
import './index.css'

function Project() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div style={{ backgroundImage: `url(${require('./Images/projectbanner.png')}`, height: "356px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ marginTop: "178px", backgroundColor: "#ffffff", width: "503px", height: "178px", borderRadius: "37px 37px 0 0", display: "flex", justifyContent: "center" }}>

                    <div style={{ textAlign: "center", paddingTop: "35px" }}>
                        <h1 style={{ fontFamily: "DM serif display", fontSize: "50px", fontWeight: "400" }}>Project</h1>
                        <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400" }}>
                            Home/ Project
                        </p>
                    </div>
                </div>
            </div>


<div style={{width:"880px", height:"75px", marginLeft:"auto", marginRight:"auto", borderWidth:"2px", borderColor:"#CDA274", borderRadius:"18px", display:"flex", justifyContent:"space-between", marginTop:"200px"}} >
    <button style={{padding:"0px 50px", fontSize:"18px", fontWeight:"600", fontFamily:"Jost", borderRadius:"25px"}} >Bedroom </button>
    <button style={{padding:"0px 60px", fontSize:"18px", fontWeight:"600", fontFamily:"Jost", borderRadius:"20px", backgroundColor:"#CDA274", color:"#ffffff"}} >Bathroom</button>
    <button style={{padding:"0px 50px", fontSize:"18px", fontWeight:"600", fontFamily:"Jost", borderRadius:"25px"}} >Kitchen</button>
    <button style={{padding:"0px 50px", fontSize:"18px", fontWeight:"600", fontFamily:"Jost", borderRadius:"25px"}} >Living Room </button>


</div>

            <div style={{ display: "flex", justifyContent: "space-between", width: "1201px", height: "3230px", marginLeft: "auto", marginRight: "auto", marginTop:"61px" }}>

                <div> 
                    <div style={{ display: "flex", justifyContent: "space-around", width: "585px", height: "3230px", flexWrap: "wrap", flexDirection: "column", flexFlow: "wrap", alignItems: "space-around" }}>

                    <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }} >
                        <div>
                            <img src='/Images/prolong1.png' alt='display' />
                        </div>
                        <div style={{ display: "flex", padding: "24px 0px", justifyContent: "space-between" }} >
                            <div >
                                <h1 style={{ fontFamily: "DM serif display", fontSize: "22px", fontWeight: "400" }}>Modern Kitchen</h1>
                                <p style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400" }}>Decor/ Architecture</p>
                            </div>
                            <div style={{ width: "70px", height:"70px" }}>
                            <Link to='projectsingle'><img style={{width:"70px", height:"70px"}} src='/Images/buttonarrow.png' alt='icon' /></Link>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", width: "585px" }} >
                        <div>
                            <img src='/Images/proshort1.png' alt='display' style={{ width: "585px" }} />
                        </div>
                        <div style={{ display: "flex", padding: "24px 0px", justifyContent: "space-between" }} >
                            <div >
                                <h1 style={{ fontFamily: "DM serif display", fontSize: "22px", fontWeight: "400" }}>Modern Kitchen</h1>
                                <p style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400" }}>Decor/ Architecture</p>
                            </div>
                            <div style={{ width: "70px" }}>
                            <Link to='projectsingle'><button ><img style={{width:"70px", height:"70px"}} src='/Images/buttonarrow.png' alt='icon' /></button></Link>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }} >
                        <div>
                            <img src='/Images/prolong1.png' alt='display' />
                        </div>
                        <div style={{ display: "flex", padding: "24px 0px", justifyContent: "space-between" }} >
                            <div >
                                <h1 style={{ fontFamily: "DM serif display", fontSize: "22px", fontWeight: "400" }}>Modern Kitchen</h1>
                                <p style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400" }}>Decor/ Architecture</p>
                            </div>
                            <div style={{ width: "70px" }}>
                            <Link to='projectsingle'><button ><img style={{width:"70px", height:"70px"}} src='/Images/buttonarrow.png' alt='icon' /></button></Link>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", width: "585px" }} >
                        <div>
                            <img src='/Images/proshort1.png' alt='display' style={{ width: "585px" }} />
                        </div>
                        <div style={{ display: "flex", padding: "24px 0px", justifyContent: "space-between" }} >
                            <div >
                                <h1 style={{ fontFamily: "DM serif display", fontSize: "22px", fontWeight: "400" }}>Modern Kitchen</h1>
                                <p style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400" }}>Decor/ Architecture</p>
                            </div>
                            <div style={{ width: "70px" }}>
                            <Link to='projectsingle'><button ><img style={{width:"70px", height:"70px"}} src='/Images/buttonarrow.png' alt='icon' /></button></Link>
                            </div>
                        </div>
                    </div>
                   

                </div>
                </div>


                <div>
                    

                        <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", width: "585px" }} >
                            <div>
                                <img src='/Images/proshort1.png' alt='display' style={{ width: "585px" }} />
                            </div>
                            <div style={{ display: "flex", padding: "24px 0px", justifyContent: "space-between" }} >
                                <div >
                                    <h1 style={{ fontFamily: "DM serif display", fontSize: "22px", fontWeight: "400" }}>Modern Kitchen</h1>
                                    <p style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400" }}>Decor/ Architecture</p>
                                </div>
                                <div style={{ width: "70px" }}>
                                <Link to='projectsingle'><button ><img style={{width:"70px", height:"70px"}} src='/Images/buttonarrow.png' alt='icon' /></button></Link>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }} >
                            <div>
                                <img src='/Images/prolong1.png' alt='display' />
                            </div>
                            <div style={{ display: "flex", padding: "24px 0px", justifyContent: "space-between" }} >
                                <div >
                                    <h1 style={{ fontFamily: "DM serif display", fontSize: "22px", fontWeight: "400" }}>Modern Kitchen</h1>
                                    <p style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400" }}>Decor/ Architecture</p>
                                </div>
                                <div style={{ width: "70px" }}>
                                <Link to='projectsingle'><button ><img style={{width:"70px", height:"70px"}} src='/Images/buttonarrow.png' alt='icon' /></button></Link>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", width: "585px" }} >
                            <div>
                                <img src='/Images/proshort1.png' alt='display' style={{ width: "585px" }} />
                            </div>
                            <div style={{ display: "flex", padding: "24px 0px", justifyContent: "space-between" }} >
                                <div >
                                    <h1 style={{ fontFamily: "DM serif display", fontSize: "22px", fontWeight: "400" }}>Modern Kitchen</h1>
                                    <p style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400" }}>Decor/ Architecture</p>
                                </div>
                                <div style={{ width: "70px" }}>
                                <Link to='projectsingle'><button ><img style={{width:"70px", height:"70px"}} src='/Images/buttonarrow.png' alt='icon' /></button></Link>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }} >
                            <div>
                                <img src='/Images/prolong1.png' alt='display' />
                            </div>
                            <div style={{ display: "flex", padding: "24px 0px", justifyContent: "space-between" }} >
                                <div >
                                    <h1 style={{ fontFamily: "DM serif display", fontSize: "22px", fontWeight: "400" }}>Modern Kitchen</h1>
                                    <p style={{ fontFamily: "Jost", fontSize: "22px", fontWeight: "400" }}>Decor/ Architecture</p>
                                </div>
                                <div style={{ width: "70px" }}>
                                <Link to='projectsingle'><button ><img style={{width:"70px", height:"70px"}} src='/Images/buttonarrow.png' alt='icon' /></button></Link>
                                </div>
                            </div>
                        </div>
                    


                    
                </div>
            </div>

<div style={{display:"flex", justifyContent:"space-between", width:"268px",marginTop:"100px",marginLeft:"auto", marginRight:"auto" }}>
    <button><img src='/Images/1.png' alt='1' /></button>
    <button><img src='/Images/2.png' alt='2' /></button>
    <button><img src='/Images/4.png' alt='4' /></button>
    <button><img src='/Images/3.png' alt='3' /></button>
</div>

<Footer />
        </>
    )
}

export default Project
