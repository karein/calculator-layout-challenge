import React, { useState } from 'react';

import { Screen } from './components/Screen';
import { Buttons } from './components/Buttons';

import { Container, Calculator } from './style'
import { GlobalStyles } from './styles/global';

let acc = ''

export function App() {
  const [isNewCalc, setIsNewCalc] = useState(false);

  const [value, setValue] = useState<string>('0');
  const [historic, setHistoric] = useState<string>('0');

  // const [result, setResult] = useState(0);
  const [accumulator, setAccumulator] = useState('');

  // onChange={(e) => setAccumulator(e.target.value)}

  function handleExpression(e: React.MouseEvent<HTMLButtonElement>) {
    if (isNewCalc) {
      // setResult(0)
      setValue('0')
      setAccumulator('')
    }

    const btn: HTMLButtonElement = e.currentTarget;

    acc += btn.value
    console.log('acc', acc)

    setAccumulator(acc)
    setIsNewCalc(false)
    setValue(acc)
  }


  function handleCalc() {
    setIsNewCalc(true)

    const result = eval(accumulator)

    // eslint-disable-next-line no-eval
    // setResult(eval(accumulator))

    console.log('eval(accumulator)', result)
    setValue(String(result))
    setHistoric(accumulator)
  }

  function handleClean() {
    // setResult(0)
    setAccumulator('')
    setValue('0')
  }

  return (
    <Container>
      <Calculator>
        <Screen value={value} historic={historic} />
        <Buttons handleClean={handleClean} handleExpression={handleExpression} handleCalc={handleCalc} />

      </Calculator>
      <GlobalStyles />
    </Container>
  );
}
