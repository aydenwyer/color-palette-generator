import React from 'react'
import PaletteColor from './PaletteColor.jsx'

const Palette = ({colors, clipState}) => {

  return (
    <div className="grid gap-4 grid-cols-autofit w-full justify-center">
      {colors.map((color, i) => (
        <PaletteColor key={i} color={color} clipState={clipState}/>
      ))}
    </div>
  )
}

export default Palette