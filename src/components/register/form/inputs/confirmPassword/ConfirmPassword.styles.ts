import styled from "styled-components";

export const StyledContainer = styled.div`
    display:flex;
    flex-direction:column;
    & > span{
        font-size:14px;
        padding-top: 0.75rem;
        color:rgb(153, 38, 58);
    }
    position:relative;
`

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
