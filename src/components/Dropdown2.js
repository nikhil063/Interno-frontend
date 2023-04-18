import React, { useState } from 'react';


export default function Dropdown2(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState('#FFFFFF');
  const [border, setBorder] = useState('#CDA274')
  const [icon, setIcon] = useState('/Images/plus.png');


  const toggleDropdown = () => {
    setIsOpen(!isOpen);

    if (isOpen) {
        setColor('#FFFFFF');
      setIcon('/Images/plus.png');
      setBorder('#CDA274')

    } else {
        setColor('#F4F0EC');
      setIcon('/Images/minus.png');
      setBorder('#F4F0EC')
    }
  }

  return (
    <div style={{ padding: "10px 0px", borderWidth: "2px", borderColor: border, backgroundColor: color , width:"527px", borderRadius:"18px", margin:"14px 0px" }}>
      <button style={{ display: "flex", width: "483px", textAlign: "center", justifyContent: "space-between", marginLeft:"23px", lineHeight:"33px" }} onClick={toggleDropdown}>
        <p style={{ fontWeight:"700", fontFamily: "Jost", fontSize: "18px", paddingTop:"10px" }}>{props.label}</p>
        <img style={{}} src={icon} alt='dropdown' />
      </button>
      {isOpen && (
        <p style={{ fontWeight:"400", fontFamily: "Jost", fontSize: "22px",width: "483px", textAlign: "left",marginLeft:"23px", padding:"15px 0px"  }}>
          {props.children}
        </p>
      )}
    </div>
  );
}

