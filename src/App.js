import React, { useState } from 'react'

import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  const [mode, setMode] = useState('light')
  const [txt, setTxt] = useState('Night')

  const toggleModes = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      setTxt('Night')
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#202020'
      setTxt('Dayy')

    }
  }
  return (
    <>
      <Navbar title="Hussain" aboutt="About" moded={mode} toggleModes={toggleModes} night={txt} />

          <div className="container my-3 mb-30">
            <Textform heading="Enter your text to analyze" moded={mode} />
          </div>

    </>
  );
}

export default App;
