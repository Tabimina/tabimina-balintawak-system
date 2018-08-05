import React from 'react'
import styled from 'styled-components'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const SocialLink = styled.a`
  margin: 0 3px;
  width: 25px;
  height: 25px;
`

const SocialImg = styled.img`
  width: 100%;
  height: 100%;
`

export default ({ className, children }) =>
  <Wrapper className={className}>
    <SocialLink href="https://www.facebook.com/groups/81918470048/" target="_blank" rel="noopener">
      <SocialImg src={facebook} alt="Facebook" />
    </SocialLink>
    <SocialLink href="https://twitter.com/TabiminaSystem" target="_blank" rel="noopener">
      <SocialImg src={twitter} alt="Twitter" />
    </SocialLink>
    <SocialLink href="https://www.instagram.com/tabimina_balintawak" target="_blank" rel="noopener">
      <SocialImg src={instagram} alt="Instagram" />
    </SocialLink>
  </Wrapper>