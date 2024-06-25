// Importing components and icons from Material UI for the UI controls
import { Switch, Slider, Stack } from '@mui/material';
import { VolumeDown, VolumeUp } from '@mui/icons-material';

import '../styles/DrumControls.css';

// DrumControls component definition
// props: display (string), isPowerOn (boolean), handlePowerChange (function), volume (number), and handleVolumeChange (function)
function DrumControls({ display, isPowerOn, handlePowerChange, volume, handleVolumeChange }) {
    return (
        <div id="drum-controls">
            {/* Container for the power switch */}
            <div id='power-btn-wrap'>
                <h3 htmlFor='power-switch' id='power-label'>Power</h3>
                {/* Switch control for isPowerOn prop, component from MUI, toggles the power state */}
                <Switch
                    aria-label='Power Switch'
                    id='power-switch'
                    checked={isPowerOn} // Controlled component, checked state based on isPowerOn prop
                    onChange={handlePowerChange} // Event handler for when the switch is toggled
                />
            </div>

            {/* Display area showing the current sound ID
                Conditional rendering based on power state */}
            <div id='display'>{isPowerOn ? display : ""}</div>

            {/* Container for the volume control slider */}
            <div id='volume-wrap'>
                {/* Stack layout from Material UI to arrange volume icons and slider */}
                <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                    <VolumeDown fontSize='1.5rem' /> {/* Volume down icon */}
                    {/* Slider control for volume prop, component from MUI, adjusts the volume */}
                    <Slider
                        aria-label="Volume"
                        value={volume} // Controlled component, slider value based on volume prop
                        onChange={handleVolumeChange} // Event handler for when the slider value changes
                    />
                    <VolumeUp fontSize='1.5rem' /> {/* Volume up icon */}
                </Stack>
            </div>
        </div>
    );
}

export default DrumControls;