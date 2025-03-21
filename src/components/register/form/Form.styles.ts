import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;
  border: 1.5px solid rgb(74, 85, 104);
  border-radius: 1rem;
  width: 400px;
  padding: 2rem 1rem;
  & > input {
    margin-bottom: 1rem;
  }
  & > span {  
    font-size: 14px;
    margin-bottom: 1rem;
    color: rgb(153, 38, 58);
  }
`;

export const StyleButton = styled.button`
  margin-top: 1rem;
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