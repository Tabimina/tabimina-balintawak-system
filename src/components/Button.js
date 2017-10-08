import styled from 'styled-components'

const Button = styled.button`
  background-color: transparent;
  border: 2px solid white;
  border-radius: 3px;
  color: white;
  padding: 5px 10px;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus {
    box-shadow: 0 0 0 2px white;
  }

  &:active {
    background-color: white;
    color: black;
    transform: scale(0.95);
  }
`

export default Button