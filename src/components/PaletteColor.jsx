import React from 'react'

const PaletteColor = ({color}) => {
  

  return (
    <div className="w-[100px] h-[100px]" style={{backgroundColor: "rgb(" + color.toString() + ")"}}>{color.toString()}</div>
  )
}

export default PaletteColor