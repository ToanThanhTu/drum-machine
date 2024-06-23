import '../styles/DrumPadsContainer.css'

function DrumPadsContainer({ isPowerOn, drumPads, volume, handleOnClick }) {
    return (
        <div id="drum-pads-container">
            {drumPads.map(({ keyCode, keyTrigger, id, url }) => {
                const audio = new Audio(`${isPowerOn ? url : ""}`);

                return (
                    <button
                        key={keyCode}
                        id={id}
                        className="drum-pad"
                        onClick={
                            isPowerOn
                                ? () => {
                                    audio.volume = (volume / 100).toFixed(2);
                                    audio.play();
                                    handleOnClick(isPowerOn ? id : "");
                                }
                                : () => {return;}
                        }>
                        {keyTrigger}
                    </button>
                );
            })}
        </div>
    );
}

export default DrumPadsContainer;