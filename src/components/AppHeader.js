import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Logo from './Logo'
import SocialLinks from './SocialLinks'
import JoinButton from './JoinButton'
import SignInButton from './SignInButton'
import ms from '../typography'
import { BrowserConsumer } from '../context/BrowserContext'
import { viewportWidthLarge } from '../constants'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  background: linear-gradient(black, transparent);
  transition: background 1s;

  &.large {
    background: transparent;
    padding: 10px;
  }

  @media (max-width: 450px) {
    font-size: 0.75em;
  }
`

const NavSection = styled.div`
  width: 100%;
`

const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0;

  &.large {
    margin-top: 10px;
  }
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
  max-width: 6.25em;
  height: 2em;
  font-weight: bold;

  &.active {
    background: black;
    color: white;
  }
`

const StyledLogo = styled(Logo)`
  margin-right: 10px;
  height: 30px;

  &.large {
    height: 60px;
  }
`

const StyledJoinButton = styled(JoinButton)`
  height: 2em;
  white-space: nowrap;
`

const AuthLinksWrapper = styled.div`
  display: flex;
`

const headLinks = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Blog', to: '/blog' },
]

const AuthLinks = () => {
  return (
    <AuthLinksWrapper>
      <StyledJoinButton />
      <SignInButton />
    </AuthLinksWrapper>
  )
}

export default props =>
  <BrowserConsumer>
    {
      ({ isScrolling, viewportWidth }) => {
        const isLarge = !isScrolling && viewportWidth > viewportWidthLarge
        const className = isLarge ? 'large' : ''

        return (
          <Wrapper className={className}>
            <StyledLogo className={className} />

            <NavSection>
              {isLarge ? <SocialLinks /> : ''}

              <Nav className={className}>
                {headLinks.map(link =>
                  <HeaderLink to={link.to} key={link.name} exact={true} activeClassName="active">
                    {link.name}
                  </HeaderLink>
                )}
              </Nav>
            </NavSection>

            {isLarge ? '' : <AuthLinks />}
          </Wrapper>
        )
      }
    }
  </BrowserConsumer>
