import React, { useEffect, useState } from 'react'

const PaletteColor = ({color}) => {
  const [name, setName] = useState("");
  
  useEffect(() => {
    const url = `https://www.thecolorapi.com/id?rgb=${color.toString()}&format=json`;

    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setName(data.name.value)
      })
  }, [color]);

  return (
    <>{name && <div className="w-[100px] h-[100px]" style={{backgroundColor: "rgb(" + color.toString() + ")"}}>{name}</div>}</>
  )
}

export default PaletteColor