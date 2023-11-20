import React from 'react'
import Palette from './Palette.jsx'
import { useState, useEffect } from 'react'

const Generator = () => {

    const [palette, setPalette] = useState(null);

    useEffect(() => {
        GetPalette();
    }, []);

    function GetPalette() {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const url = `https://www.thecolorapi.com/scheme?hex=${randomColor}&format=json&mode=analogic&count=5`;

        fetch(url)
            .then(res => {
                return res.json();
            })  
            .then(data => {
                setPalette(data.colors);
            });
    }

  return (
    <section>
        <button onClick={GetPalette}>Generate Random Palette</button>
        {palette && <Palette colors={palette}/>}
    </section>
  )
}

export default Generator