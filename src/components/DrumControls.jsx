import { Switch } from '@mui/material';
import { Slider } from '@mui/material';
import { Stack } from '@mui/material';
import { VolumeDown } from '@mui/icons-material';
import { VolumeUp } from '@mui/icons-material';
import '../styles/DrumControls.css';

function DrumControls({ display, isPowerOn, handlePowerChange, volume, handleVolumeChange }) {
    return (
        <div id="drum-controls">
            <div id='power-btn-wrap'>
                <h3 htmlFor='power-switch' id='power-label'>Power</h3>
                <Switch
                    aria-label='Power Switch'
                    id='power-switch'
                    checked={isPowerOn}
                    onChange={handlePowerChange} />
            </div>

            <div id='display'>{isPowerOn ? display : ""}</div>

            <div id='volume-wrap'>
                <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                    <VolumeDown fontSize='1.5rem' />
                    <Slider
                        aria-label="Volume"
                        value={volume}
                        onChange={handleVolumeChange} />
                    <VolumeUp fontSize='1.5rem' />
                </Stack>
            </div>
        </div>
    );
}

export default DrumControls;