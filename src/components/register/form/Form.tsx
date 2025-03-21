import {  useState } from "react";
import { useRegister } from "../../../hooks/useRegister";
import { CustomInputs } from "../../../utils/components/inputs/CustomInputs";
import { Switch } from "../../../utils/components/switch/Switch";
import {
  StyleButton,
  StyledContainer,
  StyledContainerSignUp,
} from "./Form.styles";
import { useNavigate } from "react-router-dom";
import { CustomSpinner } from "../../../utils/components/spinner/Spinner";
import { Typography } from "../../../utils/components/Typography/Typography";
import { PasswordInput } from "./inputs/Password/PasswordInput";
import { useRulesPassword } from "../../../hooks/useRulesPassword";
import { ConfirmPassword } from "./inputs/confirmPassword/ConfirmPassword";

export const Form = () => {
  const navigate = useNavigate();

  const {
    passed,
    rules,
    setPassword,
    error: errorConfirmPassword,
    setConfirmPassword,
  } = useRulesPassword();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const {
    setCredentials,
    loading,
    error,
    handleRegister,
    isEmpty,
    setActiveRemember,
  } = useRegister();
  const handleNavigate = () => {
    navigate("/login");
  };
  const handleSwitchChange = () => {
    setIsChecked((prevState) => !prevState);
    setActiveRemember((prevState) => !prevState);
  };
  const handleClickRegister = () => {
    handleRegister();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "confirm-password") setConfirmPassword(value);
    if (name === "password") setPassword(value);
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <StyledContainer>
      <CustomInputs
        dataTestid="company-name-input"
        label="Company Name"
        name="companyName"
        placeholder="Enter yout Company Name"
        type="string"
        onchange={handleChange}
      />
      <PasswordInput
        handleChange={handleChange}
        listRules={rules}
        passed={passed}
      />

      {passed && (
        <ConfirmPassword onChange={handleChange} error={errorConfirmPassword} />
      )}
      <Switch isChecked={isChecked} onChange={handleSwitchChange} />
      <StyleButton
        disabled={isEmpty || !passed || !!errorConfirmPassword}
        onClick={handleClickRegister}
        data-testid="sign-in-button"
      >
        {loading ? <CustomSpinner /> : "SIGN UP"}
      </StyleButton>
      {error ? <Typography as="span">{error}</Typography> : ""}
      <StyledContainerSignUp>
        <Typography as="p">
          Already have an account?
          <Typography onClick={handleNavigate} as="span">
            Sign in
          </Typography>
        </Typography>
      </StyledContainerSignUp>
    </StyledContainer>
  );
};
