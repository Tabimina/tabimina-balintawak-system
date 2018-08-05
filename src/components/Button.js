import styled from 'styled-components'

const Button = styled.button`
  background-color: transparent;
  border: 0.15em solid white;
  border-radius: 3px;
  color: white;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus {
    box-shadow: 0 0 0 0.125em white;
  }

  &:active {
    transform: scale(0.95);
  }
`

export default Button