import './App.css';
import Header from './components/Header';
import DrumPadsContainer from './components/DrumPadsContainer';
import DrumControls from './components/DrumControls';
import Footer from './components/Footer';

import { useEffect, useState } from "react";

// Drum pads initialization - each object represents a drum sound with its associated key, ID, and sound URL
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

// Main App component
function App() {
  // State hooks for power status, volume, and display text
  const [isPowerOn, setIsPowerOn] = useState(true);
  const [volume, setVolume] = useState(50);
  const [display, setDisplay] = useState("");

  // Effect hook to add and clean up the keydown event listener for playing drum sounds
  useEffect(() => {
    function handleKeyDown(event) {
      // Find the drum pad corresponding to the pressed key
      const sound = drumPads.find(sound => sound.keyTrigger.toLowerCase() === event.key);
      if (sound) {
        // Play the sound if a matching drum pad is found
        const audio = new Audio(`${sound.url}`);
        audio.volume = (volume / 100).toFixed(2); // Adjust volume
        audio.play();
        setDisplay(sound.id); // Update display with the sound ID
      }
    }

    // Add event listener for keydown events
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Handler for Power Switch toggle change
  function handlePowerChange(event) {
    setIsPowerOn(event.target.checked);
  }

  // Handler for volume change
  function handleVolumeChange(event, newValue) {
    setVolume(newValue);
  }

  // Handler for click events on drum pads
  function handleOnClick(id) {
    setDisplay(id); // Update display with the clicked drum pad's ID
  }

  return (
    <>
      <div id='drum-machine-app'>
        {/* Header component */}
        <Header />
        <div id='drum-machine'>
          {/* Drum pads container with props */}
          <DrumPadsContainer
            isPowerOn={isPowerOn}
            drumPads={drumPads}
            volume={volume}
            handleOnClick={handleOnClick} />
          {/* Drum controls with props */}
          <DrumControls
            display={display}
            isPowerOn={isPowerOn}
            handlePowerChange={handlePowerChange}
            volume={volume}
            handleVolumeChange={handleVolumeChange} />
        </div>
      </div>
      <Footer />
    </>

  )
}

export default App;
