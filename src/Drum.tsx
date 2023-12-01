// import React from 'react'
//rafce

import { AudioClip } from "./types";

interface DrumpProps {
    audioClip: AudioClip ;
}

const Drum = ({audioClip}:DrumpProps) => {
  return (
    <button>
        <audio src={audioClip.url} id={audioClip.key} /> 
        {audioClip.key} 
    </button>
  )
}

export default Drum