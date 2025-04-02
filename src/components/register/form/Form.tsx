import { useRegister } from "../../../hooks/useRegister";
import { CustomInputs } from "../../../utils/components/inputs/CustomInputs";
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
    setCredentials,
    loading,
    error,
    handleRegister,
    isEmpty,
    credentials,
  } = useRegister();

  const {
    passed,
    rules,
    error: errorConfirmPassword,
    setConfirmPassword,
    password,
    isConfirmPasswordPass,
  } = useRulesPassword(credentials.password);
  const handleNavigate = () => {
    navigate("/login");
  };

  const handleClickRegister = () => {
    handleRegister();
  };
  const handleInputChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputConfirmPassword = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(value);
  };

  const isButtonDisabled = isEmpty || !passed || !isConfirmPasswordPass;
  console.log(isButtonDisabled);
  console.log(isEmpty, !passed, !isConfirmPasswordPass);

  return (
    <StyledContainer>
      <CustomInputs
        dataTestid="company-name-input"
        label="Company Name"
        name="companyName"
        placeholder="Enter yout Company Name"
        type="string"
        onchange={handleInputChange}
      />
      <PasswordInput
        handleChange={handleInputChange}
        listRules={rules}
        passed={passed}
        password={password}
      />

      {passed && (
        <ConfirmPassword
          onChange={handleInputConfirmPassword}
          error={errorConfirmPassword}
        />
      )}
      <StyleButton
        disabled={isButtonDisabled}
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
