import React, { useEffect } from 'react'
import './index.css'
import Footer from './Footer';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div style={{ backgroundImage: `url(${require('./Images/blogbanner.jpg')}`, height: "356px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ marginTop: "178px", backgroundColor: "#ffffff", width: "503px", height: "178px", borderRadius: "37px 37px 0 0", display: "flex", alignItems: "center" }}>

          <div style={{ textAlign: "center", paddingLeft: "140px", paddingRight: "140px", paddingTop: "35px" }}>
            <h1 style={{ fontFamily: "DM serif display", fontSize: "50px", fontWeight: "400" }}>Article & News</h1>
            <p style={{ fontFamily: "Jost", fontSize: "20px", fontWeight: "400" }}>
              Home/ Blog
            </p>
          </div>
        </div>
      </div>
      
      <div style={{ marginLeft: "auto" , marginRight:"auto", width:"1201px"}}>
      <h1 style={{ fontFamily: "DM serif display", fontSize: "50px", fontWeight: "400", padding:"150px 0px 30px" }} >Latest Post</h1>
        <div style={{ display: "flex", justifyContent:"space-between"}}>
        

          <div  >         
            <img  src='./Images/blogimg1.png' alt='blogimage' />
          </div>

          <div style={{ width: "499px", display:"flex", flexDirection:"column", justifyContent:"space-between" }} >
            <h1 style={{ fontFamily: "DM serif display", fontSize: "25px", fontWeight: "400", marginBottom: "21px" }} >Let’s Get Solution For Building Construction Work</h1>
            <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. <br/><br/>  Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.
<br/>
<br/>
              Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
            <div style={{ display: "flex" }}>
              <p style={{ fontFamily: "Jost", fontSize: "16px", fontWeight: "400", width: "737px" }} >26 December, 2022</p>
              <button ><img style={{ width: "150px"}} src='./Images/buttonarrow.png' alt='button' /></button>
            </div>
          </div>
        </div>

      </div>



      <div>

        <div style={{padding:"21px"}}>
        <div>
        <h1 style={{ fontFamily: "DM serif display", fontSize: "50px", fontWeight: "400", padding:"150px 0px 30px", width:"1201px", marginLeft:"auto", marginRight:"auto" }} >Article & News</h1>
        </div>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          
            <div style={{ width: "382px", height: "521px", backgroundColor: "#FFFFFF", borderRadius: "62px", margin:"10px" }}>
              <img style={{ padding: "21px 21px 0" }} src='./Images/half1.png' alt='card' />
              <div>
                <h1 style={{ fontFamily: "DM serif display", fontSize: "25px", fontWeight: "400", padding: "21px 21px 5px" }} >Let’s Get Solution For Building Construction Work</h1>
                <div style={{ display: "flex", width: "340px", paddingLeft: "21px", paddingTop: "30px" }}>
                  <p style={{ fontFamily: "Jost", fontSize: "16px", fontWeight: "400", width: "737px", paddingTop: "21px" }} >26 December, 2022</p>
                  <button ><img style={{ width: "180px" }} src='./Images/buttonarrow.png' alt='button' /></button>
                </div>
              </div>
            </div>

            <div style={{ width: "382px", height: "521px", backgroundColor: "#E7E7E7", borderRadius: "62px", margin:"10px" }}>
              <img style={{ padding: "21px 21px 0" }} src='./Images/half2.png' alt='card' />
              <div>
                <h1 style={{ fontFamily: "DM serif display", fontSize: "25px", fontWeight: "400", padding: "21px 21px 5px" }} >Low Cost Latest Invented Interior Designing Ideas</h1>
                <div style={{ display: "flex", width: "340px", paddingLeft: "21px", paddingTop: "30px" }}>
                  <p style={{ fontFamily: "Jost", fontSize: "16px", fontWeight: "400", width: "737px", paddingTop: "21px" }} >26 December, 2022</p>
                  <button ><img style={{ width: "180px" }} src='./Images/whitearrow.png' alt='button' /></button>
                </div>
              </div>
            </div>

            <div style={{ width: "382px", height: "521px", backgroundColor: "#FFFFFF", borderRadius: "62px", margin:"10px" }}>
              <img style={{ padding: "21px 21px 0" }} src='./Images/half3.png' alt='card' />
              <div>
                <h1 style={{ fontFamily: "DM serif display", fontSize: "25px", fontWeight: "400", padding: "21px 21px 5px" }} >Low Cost Latest Invented Interior Designing Ideas</h1>
                <div style={{ display: "flex", width: "340px", paddingLeft: "21px", paddingTop: "30px" }}>
                  <p style={{ fontFamily: "Jost", fontSize: "16px", fontWeight: "400", width: "737px", paddingTop: "21px" }} >26 December, 2022</p>
                  <button ><img style={{ width: "180px" }} src='./Images/buttonarrow.png' alt='button' /></button>
                </div>
              </div>
            </div>

          </div>

        </div>


        <div style={{padding:"21px"}}>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            <div style={{ width: "382px", height: "521px", backgroundColor: "#FFFFFF", borderRadius: "62px", margin:"10px" }}>
              <img style={{ padding: "21px 21px 0" }} src='./Images/half4.png' alt='card' />
              <div>
                <h1 style={{ fontFamily: "DM serif display", fontSize: "25px", fontWeight: "400", padding: "21px 21px 5px" }} >Best For Any Office & Business Interior Solution</h1>
                <div style={{ display: "flex", width: "340px", paddingLeft: "21px", paddingTop: "30px" }}>
                  <p style={{ fontFamily: "Jost", fontSize: "16px", fontWeight: "400", width: "737px", paddingTop: "21px" }} >26 December, 2022</p>
                  <button ><img style={{ width: "180px" }} src='./Images/buttonarrow.png' alt='button' /></button>
                </div>
              </div>
            </div>

            <div style={{ width: "382px", height: "521px", backgroundColor: "#E7E7E7", borderRadius: "62px", margin:"10px" }}>
              <img style={{ padding: "21px 21px 0" }} src='./Images/half5.png' alt='card' />
              <div>
                <h1 style={{ fontFamily: "DM serif display", fontSize: "25px", fontWeight: "400", padding: "21px 21px 5px" }} >Let’s Get Solution For Building Construction Work</h1>
                <div style={{ display: "flex", width: "340px", paddingLeft: "21px", paddingTop: "30px" }}>
                  <p style={{ fontFamily: "Jost", fontSize: "16px", fontWeight: "400", width: "737px", paddingTop: "21px" }} >26 December, 2022</p>
                  <button ><img style={{ width: "180px" }} src='./Images/whitearrow.png' alt='button' /></button>
                </div>
              </div>
            </div>

            <div style={{ width: "382px", height: "521px", backgroundColor: "#FFFFFF", borderRadius: "62px", margin:"10px" }}>
              <img style={{ padding: "21px 21px 0" }} src='./Images/half6.png' alt='card' />
              <div>
                <h1 style={{ fontFamily: "DM serif display", fontSize: "25px", fontWeight: "400", padding: "21px 21px 5px" }} >Best For Any Office & Business Interior Solution</h1>
                <div style={{ display: "flex", width: "340px", paddingLeft: "21px", paddingTop: "30px" }}>
                  <p style={{ fontFamily: "Jost", fontSize: "16px", fontWeight: "400", width: "737px", paddingTop: "21px" }} >26 December, 2022</p>
                  <button ><img style={{ width: "180px" }} src='./Images/buttonarrow.png' alt='button' /></button>
                </div>
              </div>
            </div>

          </div>

        </div>


      </div>

<Footer />
    </>
  )
}

export default Blog
