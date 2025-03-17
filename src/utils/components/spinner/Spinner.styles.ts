import styled, { keyframes } from "styled-components";

// Animación para el spinner
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Estilo del spinner
export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #e0e0e0; /* Color del borde de fondo */
  border-top: 5px solid #007BFF; /* Color azul del borde animado */
  border-radius: 50%;
  animation: ${spin} 1s linear infinite; /* Aplicación de la animación */
`;