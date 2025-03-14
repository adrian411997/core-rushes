import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* Esto asegura que el box-model sea consistente */
  }

  body {
    font-family: Arial, sans-serif; 
    line-height: 1.6; 
    background: linear-gradient(310deg, rgb(15, 18, 59) 14.25%, rgb(9, 13, 46) 56.45%, rgb(2, 5, 21) 86.14%) !important;
    color:white;
  }
`;

