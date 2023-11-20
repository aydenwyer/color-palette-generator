import React from 'react'
import PaletteColor from './PaletteColor.jsx'

const Palette = ({colors}) => {

  return (
    <div>{colors.map((color, i) => (
      <PaletteColor key={i} color={color}/>
    ))}
    </div>
  )
}

export default Palette