import styled from "styled-components";

export const StyledInput = styled.input`
  border: 0.5px solid rgb(74, 85, 104);
  border-radius: 0.9rem;
  padding: 0.75rem;
  background-color: rgb(18, 21, 52);
  color: white;
  &:focus{
    outline:none;
    border:none;
  }
`;