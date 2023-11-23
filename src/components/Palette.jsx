import React from 'react'
import PaletteColor from './PaletteColor.jsx'

const Palette = ({colors, clipState}) => {

  return (
    <div className="flex gap-4">
      {colors.map((color, i) => (
        <PaletteColor key={i} color={color} clipState={clipState}/>
      ))}
    </div>
  )
}

export default Palette