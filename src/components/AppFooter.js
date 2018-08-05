import React from 'react'
import styled from 'styled-components'
import SocialLinks from './SocialLinks'
import Logo from './Logo'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const StyledSocialLinks = styled(SocialLinks)`
  grid-row: 2/3;
  justify-content: center;
`

const Copyright = styled.span`
  grid-row: 3/4;
  margin: 10px 0;
  `

const Bottom = styled.div`
  grid-row: 2/3;
`

const StyledLogo = styled(Logo)`
  height: 60px;
`

export default props =>
  <Wrapper>
    <StyledLogo />

    <StyledSocialLinks />

    <Copyright>
      Copyright &copy; {new Date().getFullYear()}
    </Copyright>
  </Wrapper>