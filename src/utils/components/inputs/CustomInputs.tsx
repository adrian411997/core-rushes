import { Typography } from "../Typography/Typography";
import { StyledInput } from "./CustomInputs.styles";

interface propsInterface {
  dataTestid: string;
  placeholder: string;
  type: string;
  label: String;
  name: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CustomInputs = ({
  dataTestid,
  label,
  onchange,
  name,
  placeholder,
  type,
}: propsInterface) => {
  return (
    <>
      <Typography as="p">{label}</Typography>
      <StyledInput
        data-testid={dataTestid}
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onchange}
      />
    </>
  );
};
