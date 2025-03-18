import { ChangeEventHandler } from "react";
import {
  Slider,
  SwitchInput,
  SwitchLabel,
  StyledContainer,
} from "./Switch.styles";
import { Typography } from "../../../../utils/components/Typography/Typography";

interface IProps {
  isChecked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Switch = ({ isChecked, onChange }: IProps) => {
  return (
    <StyledContainer>
      <SwitchLabel>
        <SwitchInput
          type="checkbox"
          checked={isChecked}
          data-testid="switch-button"
          onChange={onChange}
        />
        <Slider />
      </SwitchLabel>
      <Typography as="p">Remember me</Typography>
    </StyledContainer>
  );
};
