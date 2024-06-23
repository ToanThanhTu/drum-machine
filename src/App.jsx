import './App.css';
import Header from './components/Header';
import DrumPadsContainer from './components/DrumPadsContainer';
import DrumControls from './components/DrumControls';

function DrumMachine() {
  return (
    <div id='drum-machine'>
      <DrumPadsContainer />
      <DrumControls />
    </div>
  );
}

function App() {

  return (
    <>
      <Header />
      <DrumMachine />
    </>
  )
}

export default App;
