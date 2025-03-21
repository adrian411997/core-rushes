import styled from "styled-components";

export const StyledContainer = styled.div<{ isPassed: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  & > input {
    border-color: ${(prop) =>
      prop.isPassed ? `rgb(38, 153, 38)` : `rgb(153, 38, 58)`};
  }

`;

export const IconButton = styled.button`
  position: absolute;
  right: 15px;
  top: 35px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  font-size: 18px;

  &:hover {
    color: #333;
  }
`;
