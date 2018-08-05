import React from 'react'
import styled from 'styled-components'

const SignInButton = styled.button`
  display: block;
  color: white;
  white-space: nowrap;
  transition: transform 0.2s;
  will-change: transform;

  &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`

export default ({ className }) =>
  <SignInButton className={className}>
    Sign In
  </SignInButton>