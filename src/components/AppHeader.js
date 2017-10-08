import React from 'react'
import Aux from 'react-aux';
import styled from 'styled-components'
import Link from 'gatsby-link'
import logo from '../assets/logo.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  color: #000;
  background-color: #FFF;
`

const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
`

const HeaderLink = styled(Link)`
  margin: 0 5px;
`

const HeaderLogo = styled.img`
  margin-right: 10px;
  height: 40px;
`

const HeaderSocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`

const HeaderSocialLink = styled(Link)`
  margin: 0 3px;
  width: 25px;
  height: 25px;
`

const HeaderSocialImg = styled.img`
  width: 100%;
  height: 100%;
`

export default () => (
  <Aux>
    <HeaderWrapper>
      <HeaderLogo src={logo} alt="Tabimina Balintawak System Logo" />
      <HeaderNav>
        <HeaderLink to="/">
          Home
        </HeaderLink>
        <HeaderLink to="/about">
          About
        </HeaderLink>
        <HeaderLink to="/blog">
          Blog
        </HeaderLink>
      </HeaderNav>

      <HeaderSocialLinks>
        <HeaderSocialLink to="//www.facebook.com">
          <HeaderSocialImg src={facebook} alt="Facebook" />
        </HeaderSocialLink>
        <HeaderSocialLink to="//www.twitter.com">
          <HeaderSocialImg src={twitter} alt="Twitter" />
        </HeaderSocialLink>
        <HeaderSocialLink to="//www.instagram.com">
          <HeaderSocialImg src={instagram} alt="Instagram" />
        </HeaderSocialLink>
      </HeaderSocialLinks>
    </HeaderWrapper>
  </Aux>
)
