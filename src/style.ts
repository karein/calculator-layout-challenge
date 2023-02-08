import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  padding:101px auto;  
`

export const Calculator = styled.div`
  height: auto;
  width: 365px;

  margin: auto;
  padding: 54px 32px 32px;
  
  gap: 26px;
  justify-content: center;

  background-color: #bbc;
  display: grid;
  grid-template-rows: max-content 1fr;

  border-radius: 2rem;

  border-top: 1px solid lighten(var(--gray-800), 25%);
  border-left: 1px solid lighten(var(--gray-800), 25%);

  background: var(--gray-800);

  transition:
    box-shadow .05s linear,
    margin .05s linear;

  box-shadow:
    inset 1px 1px 2px rgba(255, 255, 255, .6),
    1px 4px 0px 0px darken(var(--gray-800), 20%),
    1px 4px 0px 1px #111,
    1px 4px 2px 1px #000,

    2px 06px 2px rgba(0, 0, 0, .15),
    3px 07px 2px rgba(0, 0, 0, .15),
    4px 08px 2px rgba(0, 0, 0, .15),
    5px 09px 2px rgba(0, 0, 0, .15),
    6px 10px 2px rgba(0, 0, 0, .15);
`