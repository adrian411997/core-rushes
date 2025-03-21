import React, { useState } from "react";
import { CustomInputs } from "../../../../../utils/components/inputs/CustomInputs";
import { StyledContainer, IconButton } from "./ConfirmPassword.styles";
import { Typography } from "../../../../../utils/components/Typography/Typography";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface propsInterface {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

export const ConfirmPassword = ({ onChange, error }: propsInterface) => {
  const label = "Confirm Password";
  const placeholder = "Re-enter your password";
  const [visible, setVisible] = useState<boolean>(false);
  const handleVisible = () => {
    setVisible((prevState) => !prevState);
  };
  return (
    <StyledContainer>
      <CustomInputs
        dataTestid="confirm-password"
        label={label}
        name="confirm-password"
        placeholder={placeholder}
        type={visible ? "text" : "password"}
        onchange={onChange}
      />
      <IconButton onClick={handleVisible}>
        {visible ? <FaEye /> : <FaEyeSlash />}
      </IconButton>
      {error ? <Typography as="span">{error}</Typography> : ""}
    </StyledContainer>
  );
};
