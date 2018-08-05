import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const SignInButton = styled.button`
  display: block;
  color: white;
`

export default ({ className }) =>
  <Button className={className}>
    Join Now
  </Button>