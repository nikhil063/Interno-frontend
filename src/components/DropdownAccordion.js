import React, { useState } from 'react';


export default function DropdownAccordion(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState('#000000');
  const [icon, setIcon] = useState('/Images/rarrow.png');


  const toggleDropdown = () => {
    setIsOpen(!isOpen);

    if (isOpen) {
      setColor('#000000');
      setIcon('/Images/rarrow.png');
    } else {
      setColor('#CDA274');
      setIcon('/Images/darrow.png');
    }
  }

  return (
    <div style={{ fontFamily: "DM serif display", fontSize: "25px", padding: "10px 0px", borderBottomWidth: "2px", borderBottomColor: "#CDA274" }} className="dropdown">
      <button style={{ display: "flex", width: "585px", textAlign: "left", justifyContent: "space-between", color: color }} onClick={toggleDropdown}>
        {props.label}
        <img style={{ marginTop: "10px" }} src={icon} alt='buttonarrow' />
      </button>
      {isOpen && (
        <div style={{ width: "585px", textAlign: "left" }} >
          {props.children}
        </div>
      )}
    </div>
  );
}

