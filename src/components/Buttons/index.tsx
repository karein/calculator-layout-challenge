import { ButtonsContent } from './styles'

export function Buttons() {
  return (
    <ButtonsContent>
      <button id="ce" onClick={() => console.log("cleanValue(this.id)")}>ce</button>
      <button id="c" onClick={() => console.log("cleanValue(this.id)")}>c</button>
      <button id="%" onClick={() => console.log("myFunction(this.id)")}>%</button>
      <button className='violetButton' id="/" onClick={() => console.log("myFunction(this.id)")}>/</button>
      <button id="7" onClick={() => console.log("myFunction(this.id)")}>7</button>
      <button id="8" onClick={() => console.log("myFunction(this.id)")}>8</button>
      <button id="9" onClick={() => console.log("myFunction(this.id)")}>9</button>
      <button className='violetButton' id="x" onClick={() => console.log("myFunction(this.id)")}>x</button>
      <button id="4" onClick={() => console.log("myFunction(this.id)")}>4</button>
      <button id="5" onClick={() => console.log("myFunction(this.id)")}>5</button>
      <button id="6" onClick={() => console.log("myFunction(this.id)")}>6</button>
      <button className='violetButton' id="-" onClick={() => console.log("myFunction(this.id)")}>-</button>
      <button id="1" onClick={() => console.log("myFunction(this.id)")}>1</button>
      <button id="2" onClick={() => console.log("myFunction(this.id)")}>2</button>
      <button id="3" onClick={() => console.log("myFunction(this.id)")}>3</button>
      <button className='violetButton' id="+" onClick={() => console.log("myFunction(this.id)")}>+</button>
      <button id="+/-" onClick={() => console.log("myFunction(this.id)")}>+/-</button>
      <button id="0" onClick={() => console.log("myFunction(this.id)")}>0</button>
      <button id="," onClick={() => console.log("myFunction(this.id)")}>,</button>
      <button className='violetButton' id="=" onClick={() => console.log("calc()")}>=</button>
    </ButtonsContent >
  );
}