import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Barcode from 'react-barcode';

const BARCODE_PREFIX = "6340000205"

function randomNumberInRange(min: number, max: number): string {
  const value = Math.floor(Math.random() * (max - min + 1)) + min;
  return BARCODE_PREFIX + String(value).padStart(8, '0')
}

function App() {

  useEffect(() => {
    document.title = "Tescombobulator"
  }, []);

  const [value, setValue] = useState(randomNumberInRange(0, 99999999));

  const handleClick = () => {
    setValue(randomNumberInRange(0, 99999999));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tescombobulator</h1>
        <div className='Barcode'>
          <Barcode value={value} width={2} height={100} />
        </div>
        <button onClick={handleClick} className="App-button">Generate new clubcard</button>
      </header>
    </div>
  );
}

export default App;
