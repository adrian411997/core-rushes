import styled from "styled-components";

export const StyledContainer = styled.div<{ isPassed: boolean }>`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  & > p {
    font-size: 14px;
    padding-left: 0.5rem;
    color: ${(props) =>
      props.isPassed ? `rgb(38, 153, 38)` : `rgb(153, 38, 58)`};
  }
`;
