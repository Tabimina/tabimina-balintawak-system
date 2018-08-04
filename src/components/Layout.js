import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import styled from 'styled-components'
import {
  BrowserProvider,
  BrowserConsumer
} from '../context/BrowserContext'
import {
  viewportWidthLarge,
  headerHeight,
  headerHeightLarge
} from '../constants'

const TemplateContent = styled.div``

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

const Content = styled.main`
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

class TemplateWrapper extends Component {
  static propTypes = {
    children: PropTypes.array,
  }

  render() {
    return (
      <TemplateContent>
        <Helmet
          title="Tabimina Balintawak"
          meta={[
            { name: 'description', content: 'Tabimina Balintawak' },
            { name: 'keywords', content: 'tabimina, balintawak, fma, escrima, kali, self-defense, fighting, survival' },
          ]}
        />
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

                    <Content className={scrollingClass}>
                      {this.props.children}
                    </Content>

                    <Footer>
                      <AppFooter />
                    </Footer>
                  </>
                )
              }
            }
          </BrowserConsumer>
        </BrowserProvider>
      </TemplateContent>
    )
  }
}

export default TemplateWrapper
