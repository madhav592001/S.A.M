import React, { useState } from 'react'

function ToggleSwitch() {
    const [val,setVal] = useState(0);
  const change = ()=>{
      if(val === 0)
      setVal(1);
      else
      setVal(0);
      console.log(val);
  }
  return (
    <span  style = {{fontSize:"100%",backgroundColor:"rgba(121, 180, 183, 0.42)",padding:"1% 3%",paddingLeft:"0%",height:"6%",borderRadius:"50px"}}>
        <span  style = {{backgroundColor:"#79B4B7",padding:"1% 5%",borderRadius:"50px"}} onClick={change}>
         Login </span> SignUp</span>
  )
}

export default ToggleSwitch