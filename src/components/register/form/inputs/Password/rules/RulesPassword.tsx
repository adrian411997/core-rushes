import { JSX } from 'react'
import { StyledContainer } from './RulesPassword.styles'
import { Typography } from '../../../../../../utils/components/Typography/Typography'

interface propsInteface{
    Icon:JSX.Element,
    rule:string,
    passed:boolean
}

export const RulesPassword = ({Icon,rule,passed}:propsInteface) => {
  return (
    <StyledContainer isPassed={passed} >
        {Icon}
        <Typography as='p'>{rule}</Typography>
    </StyledContainer>
  )
}
