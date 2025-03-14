import { Form } from "./form/Form"
import {StyledContainer} from "./Login.styles"
import { Portrait } from "./portrait/Portrait"

export const Login = () => {
  return (
    <StyledContainer>
        <Portrait/>
        <Form/>
    </StyledContainer>
  )
}
