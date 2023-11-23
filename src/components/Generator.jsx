import React from 'react'
import Palette from './Palette.jsx'
import { useState, useEffect } from 'react'

const Generator = () => {

    const [palette, setPalette] = useState(null);
    const [nextPalette, setNextPalette] = useState(null);
    const [copyToClip, setCopyToClip] = useState({hexValue: "", show: false});

    const url = "http://colormind.io/api/";
    const info = {
        method: 'POST',
        body: JSON.stringify({
            model: 'default',        
        })
    }

    useEffect(() => {
        const showCopyToClip = () => {
            setTimeout(() => {
                setCopyToClip({hexValue: "", show: false});
            }, 3000);
        };

        if (copyToClip.show) {
            showCopyToClip()
        };

        return () => {
            clearTimeout();
        };
    }, [copyToClip])

    useEffect(() => {
        fetch(url, info)
            .then(res => {
                return res.json();
            })  
            .then(data => {
                setPalette(data.result);
            });
            
        GetNextPalette()
    }, []);

    function GetNextPalette() {
        fetch(url, info)
            .then(res => {
                return res.json();
            })  
            .then(data => {
                setNextPalette(data.result);
            });
    }

    function Generate() {
        setPalette(nextPalette);
        GetNextPalette();
    }
    
  return (
    <section className="flex items-center justify-center flex-col h-screen gap-12">

        {copyToClip.show && <p class="absolute top-32 mx-auto bg-black text-white text-xs rounded-full px-3 py-1 font-normal">{`Color code ${copyToClip.hexValue} copied to clipboard`}</p>}

        {palette && <Palette colors={palette} clipState={setCopyToClip}/>}

        <button className="bg-black text-white px-6 py-3 text-base leading-none hover:bg-black/90" onClick={Generate}>Generate</button>

    </section>
  )
}

export default Generator