import './App.css';
import { useRef, useState } from 'react';
import Helper from './Helper';

function App() {
  const textRef = useRef();
  const [outputs, setOutputs] = useState([]);
  const [error, setError] = useState('');
  const handleRun = () => {
    const text = textRef.current.value;
    const checkValidText = /^[AB1-9 \n]+$/.test(text);
    if(checkValidText) {
      const lines = text.split('\n').filter(line => line);  
      const outputSequence = lines.map((sequence, index) => {
        return `Case #${index+1}: ${Helper.calculateMinimumTime(sequence)}`;
      });
      setOutputs(outputSequence);
      setError('');
    } else {
      setOutputs([]);
      setError('Please enter valid format. Eg. A 5 B 6 B 1 A 3');
    }
  };
  return (
    <div className="App">
      <br />
      <textarea ref={textRef} rows="5" style={{width: '300px'}}/>
      <br />
      {error && (
        <p style={{color: 'red'}}>
          {error}
        </p>
      )}
      <button onClick={handleRun}>Run</button>
      <br />
      <br />
      <br />
      <div>
        Output:
        {outputs.map(item => (
          <p>{item}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
