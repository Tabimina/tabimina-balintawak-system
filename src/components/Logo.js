import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'

const Logo = styled.img`
  transition: all 0.3s;
`

export default ({ className }) =>
  <Logo src={logo} className={className} alt="Tabimina Balintawak Logo" />