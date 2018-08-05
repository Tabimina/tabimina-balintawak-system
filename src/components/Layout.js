import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import styled from 'styled-components'
import BrowserProvider, { BrowserConsumer } from '../context/BrowserContext'
import {
  viewportWidthLarge,
  headerHeight,
  headerHeightLarge
} from '../constants'

const LayoutContent = styled.div``

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${headerHeight}px;
  z-index: 100;
  transition: all 0.3s;

  &:not(.scrolling) {
    @media (min-width: ${viewportWidthLarge}px) {
      height: ${headerHeightLarge}px;
    }
  }
`

const Main = styled.main`
  transition: padding-top 0.3s;
  padding-top: ${headerHeight}px;

  &:not(.scrolling) {
    @media (min-width: ${viewportWidthLarge}px) {
      padding-top: ${headerHeightLarge}px;
    }
  }
`

const Footer = styled.footer`
  background: white;
  height: 200px;
`

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <LayoutContent>
        <Helmet>
          <title>Tabimina Balintawak</title>
          <meta name="description" content="Tabimina Balintawak" />
          <meta name="keywords" content="tabimina, balintawak, fma, escrima, kali, self-defense, fighting, survival" />
          <link href="https://fonts.googleapis.com/css?family=Raleway:100,400,900" rel="stylesheet" />
        </Helmet>

        <BrowserProvider>
          <BrowserConsumer>
            {
              ({ isScrolling }) => {
                const scrollingClass = isScrolling ? 'scrolling' : ''

                return (
                  <>
                    <Header className={scrollingClass}>
                      <AppHeader />
                    </Header>

                    <Main className={scrollingClass}>
                      {this.props.children}
                    </Main>

                    <Footer>
                      <AppFooter />
                    </Footer>
                  </>
                )
              }
            }
          </BrowserConsumer>
        </BrowserProvider>
      </LayoutContent>
    )
  }
}

export default Layout
