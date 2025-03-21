import { Typography } from "../../../utils/components/Typography/Typography";
import { StyledContainer } from "./Title.style";

export const Title = () => {
  return (
    <StyledContainer>
      <Typography as="h2">Welcome!</Typography>
      <Typography as="p">Complete the form and start to get solutions</Typography>
    </StyledContainer>
  );
};
