import React, { useEffect, useState } from 'react'

const PaletteColor = ({color}) => {
  const [info, setInfo] = useState({
    name: "",
    contrast: "",
    hex: "",
  });
  
  useEffect(() => {
    const url = `https://www.thecolorapi.com/id?rgb=${color.toString()}&format=json`;

    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setInfo({
          name: data.name.value,
          contrast: data.contrast.value,
          hex: data.hex.value
        })
      })
  }, [color]);

  return (
    <div className="w-[200px] h-[300px] flex flex-col px-1 pt-1 pb-3 gap-3 items-center transition-transform ease-out bg-white hover:-translate-y-1 hover:shadow-soft">
      <div className="w-full h-full" style={{backgroundColor: "rgb(" + color.toString() + ")"}}></div>
      <p>{info.hex}</p>
    </div>
    
  )
}

export default PaletteColor