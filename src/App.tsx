// import { useState } from 'react'
import './App.css'
import { AudioClip } from './types'

//the : AudioClip[] is smtg like : string[] or : any[] where, expetect the string values, but using this it is more organized
//we can also do const audioClip = [{key: "" , url: ""}] 
const audioClips: AudioClip[] = [
  {
    key: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    description: "Heater-1"
  },
  {
    key: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    description: "Heater-2"
  },
  {
    key: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    description: "Heater-3"
  },
  {
    key: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    description: "Heater-4"
  },
  {
    key: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    description: "Clap"
  },
  {
    key: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    description: "Open-HH"
  },
  {
    key: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    description: "Kick-n'-Hat"
  },
  {
    key: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    description: "Kick"
  },
  {
    key: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    description: "Closed-HH"
  }
];

function App() {
  
  //By specifying clip: AudioClip, we provide type information
  const playSound = (clip:AudioClip) => {
    // const audio = new Audio(clip.url);
    // audio.play();
    (document.getElementById(clip.key) as HTMLAudioElement).play().catch(console.error);

    //the ! operator is telling Typescript that the value will be non-null
    document.getElementById("display")!.innerText = clip.description;
    document.getElementById("drum-" + clip.key)?.focus();
  }

  //when press down keys
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    //change to upper case
    const key = e.key.toUpperCase();
    console.log(key);

    const clip = audioClips.find((clip) => clip.key == key);

    if(clip){
      playSound(clip);
    }
    
  }

  return (
<>
  <div className='container' id="drum-machine" onKeyDown={handleKeyDown}>
    <h2 className='text-center' style={{color:"white"}}>Drum Machine</h2>
    <div className='row mt-3'> {/* Center the drum-bank */}
      <div className="drum-bank text-center">
        {audioClips.map((clip) => (
          <button className='drum-pad col-md-3 p-3 m-1 btn btn-secondary' id={`drum-${clip.key}`} key={clip.key} onClick={() => playSound(clip)}>
            <audio className="clip" src={clip.url} id={clip.key} /> 
            {clip.key} 
          </button>
        ))}
      </div>
    </div>

    <div id="display" className="text-center mt-4" style={{color:'white'}}></div>
  </div>
</>


  )
}

export default App
