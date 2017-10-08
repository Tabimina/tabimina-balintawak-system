import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Aux from 'react-aux'
import Helmet from 'react-helmet'
import AppHeader from '../components/AppHeader'
import styled from 'styled-components'

import './index.css'
const headerHeight = '50px'

const TemplateContent = styled.div`
`

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${headerHeight};
  z-index: 100;
`

const Content = styled.div`
  padding-top: ${headerHeight};
`

class TemplateWrapper extends Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <TemplateContent>
        <Helmet
          title="Tabimina Balintawak System"
          meta={[
            { name: 'description', content: 'Tabimina Balintawak System' },
            { name: 'keywords', content: 'tabimina, balintawak, fma, escrima, kali, self-defense, fighting, survival' },
          ]}
        />
        <div>
          <Header>
            <AppHeader />
          </Header>

          <Content>
            {this.props.children()}
          </Content>
        </div>
      </TemplateContent>
    )
  }
}

export default TemplateWrapper
