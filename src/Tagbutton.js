import React, { useState } from 'react';

function Tagbutton(props) {
  const [bgColor, setBgColor] = useState(false);
  const [textcolor, setTextColor] = useState(false)

  const handleClick = () => {
    setBgColor(!bgColor);
    setTextColor(!textcolor);
  };


  const buttonStyle = {
    backgroundColor: bgColor ? '#292F36' :  '#F4F0EC',
    color: textcolor ? '#F4F0EC' : '#292F36',
    padding: '13px 22px',
    borderRadius: '10px',
    cursor: 'pointer',
    margin:"5px",
    fontFamily:"Jost"
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      {props.text}
    </button>
  );
}

export default Tagbutton;
