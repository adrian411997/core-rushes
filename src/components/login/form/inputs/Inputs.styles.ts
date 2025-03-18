import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-left: 9rem;
  & > span {
    font-size: 14px;
    margin-bottom: 1rem;
    color: rgb(153, 38, 58);
  }
`;

export const StyledInput = styled.input`
  border: 0.5px solid rgb(74, 85, 104);
  border-radius: 0.9rem;
  padding: 0.75rem;
  background-color: rgb(18, 21, 52);
  color: white;
`;

export const StyledInputContainer = styled.div`
  & > input {
    margin-bottom: 1.5rem;
    width: 100%;
  }
  & > p {
    margin-bottom: 0.5rem;
  }
`;

export const StyledTitleFormContainer = styled.div`
  margin-bottom: 35px;

  & > h2 {
    padding-bottom: 0.25rem;
  }
`;

export const StyleButton = styled.button`
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-radius: 0.75rem;
  line-height: 1.4;
  min-height: 2.5rem;
  width: 400px;
  background-color: rgb(0, 117, 255);
  width: 100%;
  color: white;
  border: none;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out;

  & > div {
    width: 25px;
    height: 25px;
  }
  &:hover {
    background-color: white;
    color: rgb(0, 117, 255);
    transition: 0.3s ease-in-out;
  }
  &[disabled] {
    cursor: not-allowed;
    background-color: rgb(100, 100, 100);
    color: white;
  }
`;

export const StyledContainerSignUp = styled.div`
  text-align: center;

  & > p > span {
    font-weight: bold;
  }

  & > p > span:hover {
    cursor: pointer;
  }
`;
