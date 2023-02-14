import React from 'react';
import { ButtonsContent } from './styles'

interface ButtonsProps {
  handleClean: () => void,
  handleExpression: (e: React.MouseEvent<HTMLButtonElement>) => void
  handleCalc: () => void
}

export function Buttons({ handleClean, handleExpression, handleCalc }: ButtonsProps) {
  return (
    <ButtonsContent>
      <button value="ce" onClick={handleClean}>ce</button>
      <button value="c" onClick={() => console.log("cleanValue(this.id)")}>c</button>
      <button value="%" onClick={handleExpression}>%</button>
      <button className='violetButton' value="/" onClick={handleExpression}>/</button>
      <button value="7" onClick={handleExpression}>7</button>
      <button value="8" onClick={handleExpression}>8</button>
      <button value="9" onClick={handleExpression}>9</button>
      <button className='violetButton' value="x" onClick={handleExpression}>x</button>
      <button value="4" onClick={handleExpression}>4</button>
      <button value="5" onClick={handleExpression}>5</button>
      <button value="6" onClick={handleExpression}>6</button>
      <button className='violetButton' value="-" onClick={handleExpression}>-</button>
      <button value="1" onClick={handleExpression}>1</button>
      <button value="2" onClick={handleExpression}>2</button>
      <button value="3" onClick={handleExpression}>3</button>
      <button className='violetButton' value="+" onClick={handleExpression}>+</button>
      <button value="+/-" onClick={handleExpression}>+/-</button>
      <button value="0" onClick={handleExpression}>0</button>
      <button value="," onClick={handleExpression}>,</button>
      <button className='violetButton' value="=" onClick={handleCalc}>=</button>
    </ButtonsContent >
  );
}