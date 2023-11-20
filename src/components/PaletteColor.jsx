import React from 'react'

const PaletteColor = ({color}) => {
  

  return (
    <div className="w-[100px] h-[100px]" style={{backgroundColor: color.hex.value}}>{color.hex.value}</div>
  )
}

export default PaletteColor