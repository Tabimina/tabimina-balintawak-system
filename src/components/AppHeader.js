import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import logo from '../assets/logo.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import ms from '../pages/typography'
import { BrowserConsumer } from '../context/BrowserContext'
import { viewportWidthLarge } from '../constants'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 5px;
  background: linear-gradient(black, transparent);
  transition: background 1s;

  &.large {
    background: transparent;
    padding: 10px;
  }
`

const NavSection = styled.div`
  width: 100%;
`

const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const HeaderLink = styled(Link)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${ms(0)};
  margin: 0 0.2em;
  color: black;
  background: white;
  border: 1px solid white;
  max-width: 75px;
  height: 25px;
  font-weight: bold;

  &.active {
    background: black;
    color: white;
  }
`

const Logo = styled.img`
  margin-right: 10px;
  height: 30px;
  transition: all 0.3s;

  &.large {
    height: 60px;
  }
`

const SocialLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
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

const headLinks = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  // { name: 'News', to: '/news' },
  { name: 'Blog', to: '/blog' },
]

const socialLinks = () =>
  <SocialLinks>
    <SocialLink href="https://www.facebook.com/groups/81918470048/" target="_blank" rel="noopener">
      <SocialImg src={facebook} alt="Facebook" />
    </SocialLink>
    <SocialLink href="https://twitter.com/TabiminaSystem" target="_blank" rel="noopener">
      <SocialImg src={twitter} alt="Twitter" />
    </SocialLink>
    <SocialLink href="https://www.instagram.com/tabimina_balintawak" target="_blank" rel="noopener">
      <SocialImg src={instagram} alt="Instagram" />
    </SocialLink>
  </SocialLinks>

export default props =>
  <BrowserConsumer>
    {
      ({ isScrolling, viewportWidth }) => {
        const isLarge = !isScrolling && viewportWidth > viewportWidthLarge
        const className = isLarge ? 'large' : ''

        return (
          <Wrapper className={className}>
            <Logo src={logo} className={className} alt="Tabimina Balintawak Logo" />

            <NavSection>
              {isLarge ? socialLinks() : ''}

              <Nav>
                {headLinks.map(link =>
                  <HeaderLink to={link.to} key={link.name} exact={true} activeClassName="active">
                    {link.name}
                  </HeaderLink>
                )}
              </Nav>
            </NavSection>
          </Wrapper>
        )
      }
    }
  </BrowserConsumer>
