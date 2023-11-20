import React from 'react'
import Palette from './Palette.jsx'
import { useState, useEffect } from 'react'

const Generator = () => {

    const [palette, setPalette] = useState(null);

    useEffect(() => {
        GetPalette();
    }, []);

    function GetPalette() {
        const url = "http://colormind.io/api/";
        const data = {
            method: 'POST',
            body: JSON.stringify({
              model: 'default',        
            })
        }

        fetch(url, data)
            .then(res => {
                return res.json();
            })  
            .then(data => {
                setPalette(data.result);
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