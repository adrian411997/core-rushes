import { ChangeEventHandler } from "react";
import { Slider, SwitchInput, SwitchLabel } from "./Switch.styles";

interface IProps {
  isChecked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Switch = ({ isChecked, onChange }: IProps) => {
  return (
    <SwitchLabel>
      <SwitchInput type="checkbox" checked={isChecked} data-testid="switch-button"  onChange={onChange} />
      <Slider />
    </SwitchLabel>
  );
};
