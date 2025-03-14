import { StyledContainer } from "./Portrait.styles";
import { Typography } from "../../../utils/components/Typography/Typography";

export const Portrait = () => {
  const TITLE = "INSPIRED BY THE FUTURE"
  const SUBTITLE = "THE VISION DASHBOARD"

  return (
    <StyledContainer>
      <Typography as="h3">{TITLE}</Typography>
      <Typography as="h2">{SUBTITLE}</Typography>
    </StyledContainer>
  );
};
