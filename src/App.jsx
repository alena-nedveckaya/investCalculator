import { useState } from 'react';
import BlockWithInpust from './components/BlockWithInputs';
import Results from './components/Results';
import Error from './components/Error';
import Header from './components/Header';

function App() {
  const [data, setData] = useState({
    initialInvestment: 10000,
    annualInvestment: 12000,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (name, value) => {
    setData((prevData) => {
      const newData = { ...prevData, [name]: value };
      return newData;
    });
  };

  const inputIsValid = data.duration >= 1;

  return (
    <>
      <Header />
      <BlockWithInpust data={data} onChange={handleChange} />
      {!inputIsValid && data.duration && <Error />}
      {inputIsValid && <Results data={data} />}
    </>
  );
}

export default App;
