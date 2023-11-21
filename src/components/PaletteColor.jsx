import React, { useEffect, useState } from 'react'

const PaletteColor = ({color}) => {
  const [info, setInfo] = useState({
    name: "",
    contrast: "",
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
          contrast: data.contrast.value
        })
      })
  }, [color]);

  return (
    <div className="w-[100px] h-[100px]" style={{backgroundColor: "rgb(" + color.toString() + ")", color: info.contrast}}>{info.name}</div>
  )
}

export default PaletteColor