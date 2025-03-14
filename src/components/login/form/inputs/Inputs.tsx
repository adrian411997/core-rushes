import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "../../../../utils/components/Typography/Typography";
import { TITLE_FORM_LOGIN } from "../../../../common/Constant";
import { Switch } from "../switch/Switch";
import {
  StyledContainer,
  StyledInput,
  StyledTitleFormContainer,
  StyledInputContainer,
  StyledContainerSignUp,
  StyleButton,
} from "./Inputs.styles";

export const Inputs = () => {
  const navigate = useNavigate()
  const [isChecked, setIsChecked] = useState(false);
  const handleNavigate = ()=>{
    navigate("/register")
  }
  const handleSwitchChange = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <StyledContainer>
      <StyledTitleFormContainer>
        <Typography as="h1">{TITLE_FORM_LOGIN}</Typography>
        <Typography as="p">Enter your email and password to sign in</Typography>
      </StyledTitleFormContainer>
      <StyledInputContainer>
        <Typography as="p">Email</Typography>
        <StyledInput
          placeholder="Enter your email"
          type="email"
          name="username"
        />
        <Typography as="p">Password</Typography>
        <StyledInput
          placeholder="Your password"
          type="password"
          name="password"
        />
      </StyledInputContainer>
      <Switch isChecked={isChecked} onChange={handleSwitchChange} />
      <StyleButton>SIGN IN</StyleButton>
      <StyledContainerSignUp>
        <Typography as="p">
          Dont have an account? <Typography onClick={handleNavigate} as="span">Sign up</Typography>
        </Typography>
      </StyledContainerSignUp>
    </StyledContainer>
  );
};
