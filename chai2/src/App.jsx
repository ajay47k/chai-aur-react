import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('blue');

  // Map of state colors to Tailwind background classes
  const bgColors = {
    blue: 'bg-blue-500',
    red: 'bg-red-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    black: 'bg-black',
    white: 'bg-white',
    // Add more colors as needed
  };

  return (
    <div className={`h-screen w-screen ${bgColors[color]}`}>
      <div>
        <button onClick={() => setColor('green')}>Green</button>
        <button onClick={() => setColor('red')}>Red</button>
        <button onClick={() => setColor('black')}>Black</button>
        <button onClick={() => setColor('white')}>White</button>
        <button onClick={() => setColor('yellow')}>Yellow</button>
      </div>
    </div>
  );
}

export default App;
