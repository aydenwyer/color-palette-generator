import React from 'react'
import PaletteColor from './PaletteColor.jsx'

const Palette = ({colors}) => {

  return (
    <div className="flex">{colors.map((color, i) => (
      <PaletteColor key={i} color={color}/>
    ))}
    </div>
  )
}

export default Palette