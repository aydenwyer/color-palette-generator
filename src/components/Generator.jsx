import React from 'react'
import Palette from './Palette.jsx'
import { useState, useEffect } from 'react'

const Generator = () => {

    const url = "http://colormind.io/api/";
    const data = {
        method: 'POST',
        body: JSON.stringify({
            model: 'default',        
        })
    }

    const [palette, setPalette] = useState(null);
    const [nextPalette, setNextPalette] = useState(null);

    useEffect(() => {
        fetch(url, data)
            .then(res => {
                return res.json();
            })  
            .then(data => {
                setPalette(data.result);
            });
        GetPalette()
    }, []);

    function GetPalette() {
        fetch(url, data)
            .then(res => {
                return res.json();
            })  
            .then(data => {
                setNextPalette(data.result);
            });
    }

    function Generate() {
        setPalette(nextPalette);

        GetPalette();
    }

  return (
    <section className="flex items-center justify-center flex-col h-screen gap-12">
        {palette && <Palette colors={palette}/>}
        <button className="bg-black text-white px-6 py-3 text-base leading-none hover:bg-black/90" onClick={Generate}>Generate</button>
    </section>
  )
}

export default Generator