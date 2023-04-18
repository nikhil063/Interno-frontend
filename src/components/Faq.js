import React, { useEffect } from 'react'
import './index.css'
import DropdownAccordion from './DropdownAccordion'
import Footer from './Footer'


function Faq() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
        <>
        <div style={{ backgroundImage: `url(${require('./Images/blogbanner.jpg')}`, height: "356px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ marginTop: "178px", backgroundColor: "#ffffff", width: "503px", height: "178px", borderRadius: "37px 37px 0 0", display: "flex", justifyContent: "center" }}>

          <div style={{ textAlign: "center",  paddingTop: "35px" }}>
            <h1 style={{ fontFamily: "DM serif display", fontSize: "50px", fontWeight: "400" }}>FAQs</h1>
            <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400" }}>
              Home/ Faq
            </p>
          </div>
        </div>
      </div>

<h1 style={{ fontFamily: "DM serif display", fontSize: "50px", fontWeight: "400" , textAlign:"center", marginTop:"200px"}}>Every Question Answered</h1>
             <div style={{width:"1201px", marginLeft:"auto", marginRight:"auto", display:"flex", justifyContent:"space-between", marginTop:"50px"}}>
                 <div style={{margin:"60px", width:"585px"}}>
                       <DropdownAccordion label="What is the hipcouch Interior design service?">
                         <p style={{fontFamily:"Jost", fontSize:"22px", padding:"20px", textAlign:"justify"}}>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem
vitae turpmaximus.posuere in.Contrary popular belief.
There are many variations of passages of Lorem Ipsum available, but the majority randomised.</p>
                       </DropdownAccordion>
                       <DropdownAccordion label="So how exactly does it work?">
                       <p style={{fontFamily:"Jost", fontSize:"22px", padding:"20px", textAlign:"justify"}}>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem
vitae turpmaximus.posuere in.Contrary popular belief.
There are many variations of passages of Lorem Ipsum available, but the majority randomised.</p>
                       </DropdownAccordion>
                       <DropdownAccordion label="What cities do you currently operate in?">
                       <p style={{fontFamily:"Jost", fontSize:"22px", padding:"20px", textAlign:"justify"}}>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem
vitae turpmaximus.posuere in.Contrary popular belief.
There are many variations of passages of Lorem Ipsum available, but the majority randomised.</p>
                       </DropdownAccordion>
                       <DropdownAccordion label="Hipcouch interior design service?">
                       <p style={{fontFamily:"Jost", fontSize:"22px", padding:"20px", textAlign:"justify"}}>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem
vitae turpmaximus.posuere in.Contrary popular belief.
There are many variations of passages of Lorem Ipsum available, but the majority randomised.</p>
                       </DropdownAccordion>
                       <DropdownAccordion label="What kind of designers do you have?">
                       <p style={{fontFamily:"Jost", fontSize:"22px", padding:"20px", textAlign:"justify"}}>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem
vitae turpmaximus.posuere in.Contrary popular belief.
There are many variations of passages of Lorem Ipsum available, but the majority randomised.</p>
                       </DropdownAccordion>
                     </div>


                     <img style={{borderRadius:"70px", height:"678px"}} src='/Images/faqside.jpg' alt='side'/>
             </div>

<h1 style={{ fontFamily: "DM serif display", fontSize: "50px", fontWeight: "400" , textAlign:"center", marginTop:"200px"}}>Every Question Answered</h1>
 

<div style={{width:"1201px", marginLeft:"auto", marginRight:"auto", display:"flex", justifyContent:"space-between", marginTop:"50px"}}>
<img style={{borderRadius:"70px", height:"678px"}} src='/Images/faqside2.png' alt='side'/>
    <div style={{margin:"60px", width:"585px"}}>
          <DropdownAccordion label="How long does it take?">
            <p style={{fontFamily:"Jost", fontSize:"22px", padding:"20px", textAlign:"justify"}}>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem
vitae turpmaximus.posuere in.Contrary popular belief.
There are many variations of passages of Lorem Ipsum available, but the majority randomised.</p>
          </DropdownAccordion>
          <DropdownAccordion label="Do you offer counselling?">
          <p style={{fontFamily:"Jost", fontSize:"22px", padding:"20px", textAlign:"justify"}}>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem
vitae turpmaximus.posuere in.Contrary popular belief.
There are many variations of passages of Lorem Ipsum available, but the majority randomised.</p>
          </DropdownAccordion>
          <DropdownAccordion label="Can I put into myexisting designs?">
          <p style={{fontFamily:"Jost", fontSize:"22px", padding:"20px", textAlign:"justify"}}>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem
vitae turpmaximus.posuere in.Contrary popular belief.
There are many variations of passages of Lorem Ipsum available, but the majority randomised.</p>
          </DropdownAccordion>
          <DropdownAccordion label="What do your services cost?">
          <p style={{fontFamily:"Jost", fontSize:"22px", padding:"20px", textAlign:"justify"}}>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem
vitae turpmaximus.posuere in.Contrary popular belief.
There are many variations of passages of Lorem Ipsum available, but the majority randomised.</p>
          </DropdownAccordion>
          <DropdownAccordion label="What kind of designers do you have">
          <p style={{fontFamily:"Jost", fontSize:"22px", padding:"20px", textAlign:"justify"}}>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem
vitae turpmaximus.posuere in.Contrary popular belief.
There are many variations of passages of Lorem Ipsum available, but the majority randomised.</p>
          </DropdownAccordion>
        </div>
</div>

<Footer />
        </>
    )
}

export default Faq
