import { StyledButton } from "./Styles"

const Button = ({click,text}) => {
  return (
    <StyledButton onClick={click}>{text}</StyledButton>
  )
}

export default Button