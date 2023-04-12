import React, { useState } from 'react';

export default function DropdownAccordion(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div style={{fontFamily:"DM serif display", fontSize:"25px", padding:"10px 0px", borderBottomWidth:"2px", borderBottomColor:"#CDA274"}} className="dropdown">
      <button style={{display:"flex",width:"585px", textAlign:"left", justifyContent:"space-between"}} onClick={toggleDropdown}>
        {props.label}
        <img style={{marginTop:"10px"}} src='/Images/rarrow.png' alt='buttonarrow' />
      </button>
      {isOpen && (
        <div style={{width:"585px", textAlign:"left"}} className="dropdown-content">
          {props.children}
        </div>
      )}
    </div>
  );
}

