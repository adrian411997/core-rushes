import React, { useState } from "react";
import { StyledContainer,IconButton } from "./PasswordInput.styles";
import { CustomInputs } from "../../../../../utils/components/inputs/CustomInputs";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { RulesPassword } from "./rules/RulesPassword";
import { IRulesCheck } from "./utils/ListChecks";
import { FaEye, FaEyeSlash } from "react-icons/fa"; interface propsInterface {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  listRules: IRulesCheck[],
  passed:boolean
}

export const PasswordInput = ({ handleChange,listRules,passed }: propsInterface) => {
  const [visible,setVisible] = useState<boolean>(false)
  const renderIcon = (passed: boolean) => {
    return passed ? <FaCheck color="green" /> : <ImCross color="red" />;
  };
  const handleVisible = () =>{
    setVisible((prevState) => !prevState)
  }
  return (
    <StyledContainer isPassed={passed}>
      <CustomInputs
        dataTestid="password-input"
        label="Password"
        name="password"
        placeholder="Enter your Password"
        type={visible ? "text" : "password"}
        onchange={handleChange}
      />
      <IconButton onClick={handleVisible} >
        {visible ?<FaEye/> : <FaEyeSlash/> }
      </IconButton>
      {listRules.map((check) => (
        <RulesPassword passed={ check.isPassed} Icon={renderIcon(check.isPassed)} rule={check.rule} />
      ))}
    
    </StyledContainer>
  );
};
