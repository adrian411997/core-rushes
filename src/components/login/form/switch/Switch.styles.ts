import styled from "styled-components";

export const StyledContainer = styled.div`
  display:flex;
  width:100%;
  & >p{
    padding-left:0.5rem;
    font-size:12px;
    font-weight: bold;
  }

  align-items:center;
`

export const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 18px;
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color:rgb(57,114,252);
  }

  &:checked + span:before {
    transform: translateX(25px); 
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(47,55,72); 
  transition: 0.4s;
  border-radius: 25px;

  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 17px;
    left: 0px;
    bottom: 0px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;