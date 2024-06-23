import './App.css';
import Header from './components/Header';
import DrumPadsContainer from './components/DrumPadsContainer';
import DrumControls from './components/DrumControls';
import { useEffect, useState } from "react";

const drumPads = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  }, {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  }, {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  }, {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  }, {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  }, {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  }, {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  }, {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  }, {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

function App() {
  const [isPowerOn, setIsPowerOn] = useState(true);
  const [volume, setVolume] = useState(50);
  const [display, setDisplay] = useState("");

  useEffect(() => {
    function handleKeyDown(event) {
      const sound = drumPads.find(sound => sound.keyTrigger.toLowerCase() === event.key);
      if (sound) {
        const audio = new Audio(`${sound.url}`);
        audio.volume = (volume / 100).toFixed(2);
        audio.play();
        setDisplay(sound.id);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  function handlePowerChange(event) {
    setIsPowerOn(event.target.checked);
  }

  function handleVolumeChange(event, newValue) {
    setVolume(newValue);
  }

  function handleOnClick(id) {
    setDisplay(id);
  }

  return (
    <div id='drum-machine-app'>
      <Header />
      <div id='drum-machine'>
        <DrumPadsContainer
          isPowerOn={isPowerOn}
          drumPads={drumPads}
          volume={volume}
          handleOnClick={handleOnClick} />
        <DrumControls
          display={display}
          isPowerOn={isPowerOn}
          handlePowerChange={handlePowerChange}
          volume={volume}
          handleVolumeChange={handleVolumeChange} />
      </div>
    </div>
  )
}

export default App;
