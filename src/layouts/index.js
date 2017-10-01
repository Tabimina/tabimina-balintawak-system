import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import AppHeader from '../components/AppHeader'
import styled from 'styled-components'

import './index.css'

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
`

const Content = styled.div`
  padding-top: 325px;
`

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Tabimina Balintawak System"
      meta={[
        { name: 'description', content: 'Tabimina Balintawak System' },
        { name: 'keywords', content: 'tabimina, balintawak, fma, escrima, kali, self-defense, fighting, survival' },
      ]}
    />
    <Header>
      <AppHeader />
    </Header>
    <Content>
      {children()}
    </Content>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
