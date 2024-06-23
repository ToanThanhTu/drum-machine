import Switch from '@mui/material/Switch';

function PowerButton() {
    return (
        <div className='power-btn-container'>
            <label htmlFor='power-switch'>Power</label>
            <Switch id='power-switch' defaultChecked="true" />
        </div>
    );
}

function VolumeSlider() {
    return (
        <div></div>
    );
}

function DrumControls() {
    return (
        <div id="drum-controls">
            <PowerButton />
            <div id='display'>Hello</div>
            <VolumeSlider />
        </div>
    );
}

export default DrumControls;