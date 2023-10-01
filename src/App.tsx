import  { useState } from 'react';
import Number from './components/Number';
import Result from './components/Result';
import './App.css';

function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      evaluateExpression();
    } else if (value === 'C') {
      clearExpression();
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  const evaluateExpression = () => {
    try {
      const evalResult = eval(expression);
      setResult(evalResult);
    } catch (error) {
      setResult(null);
    }
  };

  const clearExpression = () => {
    setExpression('');
    setResult(null);
  };

  return (
    <>
      <h1>Simple Calculator</h1>
      <Result result={result} displayedExpression={expression} />
      <div className='number-col'>
        <Number number="1" onClick={() => handleButtonClick("1")} />
        <Number number="2" onClick={() => handleButtonClick("2")} />
        <Number number="3" onClick={() => handleButtonClick("3")} />
        <Number number="+" onClick={() => handleButtonClick("+")} />
      </div>
      <div className='number-col'>
        <Number number="4" onClick={() => handleButtonClick("4")} />
        <Number number="5" onClick={() => handleButtonClick("5")} />
        <Number number="6" onClick={() => handleButtonClick("6")} />
        <Number number="-" onClick={() => handleButtonClick("-")} />
      </div>
      <div className='number-col'>
        <Number number="7" onClick={() => handleButtonClick("7")} />
        <Number number="8" onClick={() => handleButtonClick("8")} />
        <Number number="9" onClick={() => handleButtonClick("9")} />
        <Number number="*" onClick={() => handleButtonClick("*")} />
      </div>
      <div className='number-col'>
        <Number number="0" onClick={() => handleButtonClick("0")} />
        <Number number="=" onClick={() => handleButtonClick("=")} />
        <Number number="C" onClick={() => handleButtonClick("C")} />
      </div>
    </>
  );
}

export default App;
