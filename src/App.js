import { useState } from 'react';
import './App.css';

function App() {
const [height, setHeight] = useState(0)
const [weight, setWeight] = useState(0)
const [bmIndex, setBMIndex] = useState(0)

function calculate(e){
  e.preventDefault()
  setLowerLim(weight/(height*height))
  setUpperLim(weight/(height*height))
}


  return (
    <div id="content">
      <h1>Calculating body mass</h1>
      <form onSubmit={calculate}>
        <div>
          <label>Height(m)</label>
          <input value={height} onChange={e => setHeight(e.target.value)} />
        </div>
        <div>
          <label>Weight</label>
          <input value={weight} onChange={e => setWeight(e.target.value)}/>
        </div>
        <div id="bmi">
          <output>{bmIndex}</output>
        </div>
        <button>Calculate!</button>
      </form>
    </div>
  );
}

export default App;
