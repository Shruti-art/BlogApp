import React from 'react'
import logoImg from '../img.png';
function Logo() {
  return (
    <div>
      <img src={logoImg} 
        alt="Logo" 
        style={{ width: '50px', height: 'auto', borderRadius: '50%' }}  />
    </div>
  )
}

export default Logo
