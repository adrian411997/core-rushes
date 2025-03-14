import {
  StyledContainer,
  StyledInput,
  StyledTitleFormContainer,
  StyledInputContainer,

  StyleButton,
} from "./Inputs.styles";



import { Typography } from "../../../../utils/components/Typography/Typography";
import { TITLE_FORM_LOGIN } from "../../../../common/Constant";
import { useState } from "react";
import { Switch } from "../switch/Switch";

export const Inputs = () => {
  const [isChecked, setIsChecked] = useState(false);

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
        <StyledInput placeholder="Enter your email" type="email" name="username"/>
        <Typography as="p">Password</Typography>
        <StyledInput placeholder="Your password" type="password" name="password"/>
      </StyledInputContainer>
      <Switch isChecked={isChecked} onChange={handleSwitchChange}/>
      <StyleButton>
        SIGN IN
      </StyleButton>
    </StyledContainer>
  );
};
