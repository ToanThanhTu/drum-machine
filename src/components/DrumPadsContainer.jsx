import '../styles/DrumPadsContainer.css'

// DrumPadsContainer component definition
// props: isPowerOn (boolean), drumPads (array of objects), volume (number), and handleOnClick (function)
function DrumPadsContainer({ isPowerOn, drumPads, volume, handleOnClick }) {
    return (
        <div id="drum-pads-container">
            {/* Mapping through each drumPad object in the drumPads array to render individual drum pad buttons */}
            {drumPads.map(({ keyCode, keyTrigger, id, url }) => {
                // Creating a new Audio object for each drum pad. If the power is off, it initializes with an empty string to prevent sound.
                const audio = new Audio(`${isPowerOn ? url : ""}`);

                return (
                    // Returning a button for each drum pad with the keyTrigger as the button text
                    <button 
                        key={keyCode} // Unique key for each button, using the keyCode property
                        id={id} // Setting the id of the button to the id property of the drum pad
                        className="drum-pad" // CSS class for styling
                        onClick={
                            // Defining the onClick event handler for each button
                            isPowerOn
                                ? () => { // If the power is on, set the volume of the audio, play the sound, and call handleOnClick to set the display with the id
                                    audio.volume = (volume / 100).toFixed(2); // Setting the volume based on the volume prop
                                    audio.play();
                                    handleOnClick(isPowerOn ? id : ""); // Calling handleOnClick to set the display with the id
                                }
                                : () => {return;} // If the power is off, onClick does nothing
                        }>
                        {keyTrigger}
                    </button>
                );
            })}
        </div>
    );
}

export default DrumPadsContainer;