import styled from "styled-components";
import { darken } from "polished";

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

  border-radius: 3rem;

  border-top: 1px solid lighten(var(--gray-800), 25%);
  border-left: 1px solid lighten(var(--gray-800), 25%);

  background: var(--gray-800);

  transition:
    box-shadow .05s linear,
    margin .05s linear;

  box-shadow:
    inset 2px 7px 6px rgba(255, 255, 255, .2),
    inset -1px -15px 10px 10px var(--gray-800),
    1px 3px 1px 1px ${darken(.03, '#2D2A37')},
    1px 4px 2px 1px var(--gray-800),

    2px 06px 2px rgba(0, 0, 0, .15),
    3px 07px 2px rgba(0, 0, 0, .15),
    6px 10px 2px rgba(0, 0, 0, .15);
`