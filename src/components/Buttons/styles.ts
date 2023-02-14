import styled from "styled-components";
import { darken, lighten } from 'polished';


export const ButtonsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  /* grid-template-rows: repeat(5, 1fr); */


  gap: 12px;
  justify-items: center;

  button{
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 64px;
    height: 64px;
    font-size: 24px;
    color: var(--gray-100);
    
    outline: none;
    cursor: pointer;
    background: none;
    
    user-select: none;
    
    border: 0;
    border-radius: 5em;
    
    border-top: 1px solid var(--gray-800);
    border-left: 1px solid var(--gray-800);
    
    background: radial-gradient(ellipse at center, #2D2A37 55%, ${lighten(.03, '#2D2A37')});

    text-transform: uppercase;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, .8);
    text-shadow: 1px 1px 1px fade-out(var(--gray-800), .5);

    transition:
      box-shadow .05s linear,
      margin .05s linear;
        
    &:active {
      background: radial-gradient(circle at center, ${darken(.02, '#2D2A37')}, #2D2A37);
      box-shadow: inset 2px 2px 3px rgba(0, 0, 0, .4);
    }

    &:first-child{
        color: var(--violet-300);
    }

    &.violetButton{
      background: linear-gradient(190deg, var(--violet-600), ${lighten(.1, '#462878')});
      /* box-shadow: inset 2px -2px 15px rgba(255, 255, 255, .08); */
    }

    &:last-child{
      background: linear-gradient(190deg, #7F45E2, ${lighten(.05, '#7F45E2')});
    }
  }
`
