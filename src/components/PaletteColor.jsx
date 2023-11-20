import React from 'react'

const PaletteColor = ({color}) => {
  return (
    <div>{color.hex.value}</div>
  )
}

export default PaletteColor