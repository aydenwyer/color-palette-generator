import React from 'react'
import Palette from './Palette.jsx'
import { useState, useEffect, useRef } from 'react'

const Generator = () => {

    const [palette, setPalette] = useState(null);
    const [nextPalette, setNextPalette] = useState([]);
    const [paletteIndex, setPaletteIndex] = useState(0);
    const [copyToClip, setCopyToClip] = useState({hexValue: "", show: false});
    const timeout = useRef();

    const url = "http://colormind.io/api/";
    const info = {
        method: 'POST',
        body: JSON.stringify({
            model: 'default',        
        })
    } 

    useEffect(() => {

        generateInitialPalette();

        generateNextPalette();

    }, [])

    const generateInitialPalette = async () => {
        
        const response = await fetch(url, info);
        const randomPalette = await response.json();

        setPalette(randomPalette.result);
    };

    const generateNextPalette = async () => {
        const requests = Array.from({ length: 25 }, async () => {
            const response = await fetch(url, info);
            const nextPalette = await response.json();
            return nextPalette.result;
        });
    
        const palettes = await Promise.all(requests);
        setNextPalette(prevArray => [...prevArray, ...palettes]);
    };

    useEffect(() => {        
        const showCopyToClip = () => {
            timeout.current = setTimeout(() => {
                setCopyToClip({...copyToClip, show: false});
            }, 3000);
        };

        if (copyToClip.show) {
            clearTimeout(timeout.current);
            showCopyToClip()
        };

        return () => {
            clearTimeout();
        };
    }, [copyToClip])

    function Generate() {
        setPalette(nextPalette[paletteIndex]);
        setPaletteIndex(paletteIndex + 1);
        if (paletteIndex >= nextPalette.length - 5) {
            generateNextPalette();
        }
    }
    
  return (
    <section className="flex items-center justify-center flex-col h-screen gap-12">

        <p style={copyToClip.show ? {opacity: 1} : {opacity: 0}} className="absolute top-[25%] mx-auto bg-black text-white text-xs rounded-full px-4 py-2 font-normal z-50 transition-opacity ease-out delay-150">Color code <span className="font-bold">{copyToClip.hexValue}</span> copied to clipboard</p>

        {palette && <Palette colors={palette} clipState={setCopyToClip}/>}

        <button className="bg-black text-white px-6 py-3 text-base leading-none hover:bg-black/90" onClick={Generate}>Generate</button>

    </section>
  )
}

export default Generator