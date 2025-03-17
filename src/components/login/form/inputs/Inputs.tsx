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
import { useLogin } from "../../../../hooks/useLogin";
import { CustomSpinner } from "../../../../utils/components/spinner/Spinner";

export const Inputs = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const { setCredentials, handleLogin, loading,error,isEmpty,setActiveRemember} = useLogin();

  const handleNavigate = () => {
    navigate("/register");
  };
  const handleSwitchChange = () => {
    setIsChecked((prevState) => !prevState);
    setActiveRemember((prevState) => !prevState)
  };
  const handleClickLogin = () => {
    handleLogin();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
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
          data-testid="email-input"
          placeholder="Enter your email"
          type="email"
          name="username"
          onChange={handleChange}
        />
        <Typography as="p">Password</Typography>
        <StyledInput
          placeholder="Your password"
          data-testid="password-input"
          type="password"
          name="password"
          onChange={handleChange}
        />
      </StyledInputContainer>
      <Switch isChecked={isChecked} onChange={handleSwitchChange} />
      <StyleButton disabled={isEmpty} onClick={handleClickLogin} data-testid="sign-in-button">
        {loading ? <CustomSpinner /> : "SIGN IN"}
      </StyleButton>
      {error ? <Typography as="span"  >{error}</Typography>: ""}
      <StyledContainerSignUp>
        <Typography as="p">
          Dont have an account?
          <Typography onClick={handleNavigate} as="span">
            Sign up
          </Typography>
        </Typography>
      </StyledContainerSignUp>
    </StyledContainer>
  );
};
