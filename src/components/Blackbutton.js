import React from 'react'

function Blackbutton(props) {
  return (
    <>
      <button style={{
              backgroundColor: '#292F36', color: "#FFFFFF", borderRadius: "18px", boxShadow: "0px 10px 20px rgba(192, 192, 192, 0.35)", fontFamily: "Jost", fontSize: "18px", display: "flex", justifyContent: "center", width: "253px", height: "75px", padding: "26px 0px", margin:"0px"
            }}><div style={{ display: "flex", justifyContent: "space-between" }}>{props.label}
            </div><img style={{ margin:"5px 0px 0px 8px" }} src='/Images/arrow.png' alt='arrow' /></button>
    </>
  )
}

export default Blackbutton
