import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "../../../../utils/components/Typography/Typography";
import { TITLE_FORM_LOGIN } from "../../../../common/Constant";
import { Switch } from "../../../../utils/components/switch/Switch";
import {
  StyledContainer,
  StyledTitleFormContainer,
  StyledInputContainer,
  StyledContainerSignUp,
  StyleButton,
} from "./Inputs.styles";
import { useLogin } from "../../../../hooks/useLogin";
import { CustomSpinner } from "../../../../utils/components/spinner/Spinner";
import { CustomInputs } from "../../../../utils/components/inputs/CustomInputs";
export const Inputs = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const {
    setCredentials,
    handleLogin,
    loading,
    error,
    isEmpty,
    setActiveRemember,
  } = useLogin();

  const handleNavigate = () => {
    navigate("/register");
  };
  const handleSwitchChange = () => {
    setIsChecked((prevState) => !prevState);
    setActiveRemember((prevState) => !prevState);
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
        <CustomInputs
          dataTestid="company-name-input"
          label={"Company Name"}
          name="companyName"
          type="string"
          onchange={handleChange}
          placeholder="Enter your Company Name"
        />
        <CustomInputs
          dataTestid="password-input"
          label={"Password"}
          name="password"
          type="password"
          onchange={handleChange}
          placeholder="Your password"
        />
      </StyledInputContainer>
      <Switch isChecked={isChecked} onChange={handleSwitchChange} />
      <StyleButton
        disabled={isEmpty}
        onClick={handleClickLogin}
        data-testid="sign-in-button"
      >
        {loading ? <CustomSpinner /> : "SIGN IN"}
      </StyleButton>
      {error ? <Typography as="span">{error}</Typography> : ""}
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
