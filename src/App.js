import { useState } from 'react';
import './App.css';

function App() {
const [age, setAge] = useState(0)
const [lowerLim, setLowerLim] = useState(0)
const [upperLim, setUpperLim] = useState(0)

function calculate(e){
  e.preventDefault()
  setLowerLim((220-age)*0.65)
  setUpperLim((220-age)*0.85)
}


  return (
    <div id="content">
      <h1>Heart rate limits calculator</h1>
      <form onSubmit={calculate}>
        <div>
          <label>Age</label>
          </div>
          <div>
          <input value={age} onChange={e => setAge(e.target.value)} />
        </div>

        <div>
          <label>Heart rate limits</label>
          </div>
          <div>
          <output>{lowerLim.toFixed(2)}-{upperLim.toFixed(2)}</output>
          </div>
        
        <button>Calculate!</button>
      </form>
    </div>
  );
}

export default App;
