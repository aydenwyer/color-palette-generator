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
    <section className="flex items-center justify-center flex-col h-screen gap-12">
        {palette && <Palette colors={palette}/>}
        <button className="bg-black text-white px-6 py-3 text-base leading-none" onClick={GetPalette}>Generate</button>
    </section>
  )
}

export default Generator